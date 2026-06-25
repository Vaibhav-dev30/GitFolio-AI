export function initRingsBackground() {
    const container = document.getElementById('threejs-bg-container');
    if (!container) return;
    
    // Clear any existing canvas
    container.innerHTML = '';

    const devicePixelRatio = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Creating a series of elegant floating glass-like rings
    const rings = [];
    const ringMaterial = new THREE.MeshPhongMaterial({
        color: 0xD97706,
        transparent: true,
        opacity: 0.3,
        shininess: 100
    });

    for (let i = 0; i < 3; i++) {
        const geometry = new THREE.TorusGeometry(2 + i * 1.5, 0.05, 16, 100);
        const ring = new THREE.Mesh(geometry, ringMaterial);
        ring.rotation.x = Math.random() * Math.PI;
        ring.rotation.y = Math.random() * Math.PI;
        scene.add(ring);
        rings.push({
            mesh: ring,
            speedX: Math.random() * 0.005,
            speedY: Math.random() * 0.005
        });
    }

    camera.position.z = 10;

    let animationFrameId;

    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        
        rings.forEach(r => {
            r.mesh.rotation.x += r.speedX;
            r.mesh.rotation.y += r.speedY;
        });
        
        renderer.render(scene, camera);
    }

    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    animate();
}
