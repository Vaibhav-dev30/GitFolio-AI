export function initAuth3D() {
    const container = document.getElementById('auth-threejs-container');
    if (!container || typeof THREE === 'undefined') return;
    container.innerHTML = '';
    
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 40);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1);
    dirLight1.position.set(10, 20, 20);
    scene.add(dirLight1);

    // --- Dynamic Background Orbs (for refraction) ---
    // Add colored orbs that move in the background to refract through the glass
    // Colors matched exactly to the Landing Page Aurelian theme: Deep Amber, Bright Gold, Soft Cream
    const colors = [0xd97706, 0xf59e0b, 0xfef3c7];
    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    const orbGeometry = new THREE.SphereGeometry(8, 32, 32);
    
    // Orb 1: Theme Amber
    const orb1 = new THREE.Mesh(
        orbGeometry,
        new THREE.MeshBasicMaterial({ color: 0xd97706 })
    );
    orb1.position.set(-15, 10, -20);
    
    // Orb 2: Deep Orange
    const orb2 = new THREE.Mesh(
        orbGeometry,
        new THREE.MeshBasicMaterial({ color: 0x936413 })
    );
    orb2.position.set(15, -10, -25);
    
    // Orb 3: Cool Accent (Cyan/Indigo) to add premium contrast
    const orb3 = new THREE.Mesh(
        orbGeometry,
        new THREE.MeshBasicMaterial({ color: 0x4f46e5 })
    );
    orb3.position.set(0, 15, -30);

    orbGroup.add(orb1);
    orbGroup.add(orb2);
    orbGroup.add(orb3);

    // --- Premium Frosted Glass Centerpiece ---
    // We use MeshPhysicalMaterial to create a highly realistic glass refraction effect
    const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0.1,
        roughness: 0.2, // Slightly frosted
        transmission: 0.95, // Glass-like transparency
        thickness: 2.0, // Refraction thickness
        ior: 1.5, // Index of refraction for glass
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        transparent: true,
        opacity: 1.0
    });

    // Abstract, elegant shape
    const glassGeometry = new THREE.TorusKnotGeometry(12, 3.5, 200, 32);
    const glassObject = new THREE.Mesh(glassGeometry, glassMaterial);
    
    // Shift the glass object to the left side of the pane
    glassObject.position.x = -10;
    scene.add(glassObject);

    // Shift orbs to match the left-anchored geometry
    orbGroup.position.x = -10;

    // Floating Glass Shards
    const shardGeo = new THREE.OctahedronGeometry(2, 0);
    const shards = [];
    for(let i=0; i<8; i++) {
        const shard = new THREE.Mesh(shardGeo, glassMaterial);
        shard.position.set(
            (Math.random() - 0.5) * 40 - 10, // Shift shards left too
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 20 - 5
        );
        shard.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, 0);
        shard.userData = {
            rx: Math.random() * 0.02,
            ry: Math.random() * 0.02,
            sy: Math.random() * 0.02 + 0.01,
            offset: Math.random() * Math.PI * 2
        };
        scene.add(shard);
        shards.push(shard);
    }

    let animationId;
    let count = 0;
    
    // Mouse interaction for subtle parallax
    let mouseX = 0;
    let mouseY = 0;
    const windowHalfX = width / 2;
    const windowHalfY = height / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX) - windowHalfX;
        mouseY = (event.clientY) - windowHalfY;
    });

    function animate() {
        animationId = requestAnimationFrame(animate);
        
        // Fluid camera parallax
        camera.position.x += (mouseX * 0.01 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 0.01 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        // Rotate the main glass object gracefully
        glassObject.rotation.y += 0.003;
        glassObject.rotation.x += 0.002;
        glassObject.rotation.z += 0.001;

        // Animate the background light orbs (orbiting)
        orb1.position.x = Math.sin(count * 0.5) * 20;
        orb1.position.y = Math.cos(count * 0.3) * 15;
        
        orb2.position.x = Math.cos(count * 0.4) * 20;
        orb2.position.y = Math.sin(count * 0.6) * -15;

        orb3.position.x = Math.sin(count * 0.7) * -15;
        orb3.position.y = Math.cos(count * 0.5) * 20;

        // Slowly animate floating shards
        shards.forEach(shard => {
            shard.rotation.x += shard.userData.rx;
            shard.rotation.y += shard.userData.ry;
            shard.position.y += Math.sin(count + shard.userData.offset) * 0.05;
        });
        
        count += 0.02;
        
        renderer.render(scene, camera);
    }

    // Robust resizing via ResizeObserver to ensure it strictly fits the pane, not window
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            const w = entry.contentRect.width;
            const h = entry.contentRect.height;
            if (w === 0 || h === 0) return;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        }
    });
    resizeObserver.observe(container);

    // Cleanup observer if needed when container is removed
    const originalRemove = container.remove;
    container.remove = function() {
        resizeObserver.disconnect();
        if(originalRemove) originalRemove.call(container);
    };

    animate();
}
