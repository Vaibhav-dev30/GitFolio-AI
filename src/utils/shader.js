export function initGLSLBackground() {
    const canvas = document.getElementById('shader-canvas');
    if (!canvas) return;
    
    const gl = canvas.getContext('webgl');
    if (!gl) return;

    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const vertexShaderSource = `
        attribute vec2 position;
        varying vec2 v_texCoord;
        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
            v_texCoord = position * 0.5 + 0.5;
        }
    `;

    const fragmentShaderSource = `
        precision highp float;
        uniform float u_time;
        uniform vec2 u_resolution;

        varying vec2 v_texCoord;

        void main() {
            vec2 uv = v_texCoord;
            
            // Create a soft, flowing organic gradient movement
            float t = u_time * 0.2;
            
            vec2 p = uv * 3.0;
            for(int i=1; i<4; i++) {
                float fi = float(i);
                p.x += 0.3 / fi * sin(fi * p.y + t + 0.3 * fi);
                p.y += 0.3 / fi * sin(fi * p.x + t + 0.5 * fi);
            }
            
            // Warm, cream-based palette
            vec3 color1 = vec3(0.99, 0.98, 0.97); // #FDFBF7 (Cream)
            vec3 color2 = vec3(0.96, 0.95, 0.93); // #F5F2ED (Sand)
            vec3 accent = vec3(0.85, 0.47, 0.02);  // #D97706 (Amber)
            
            float noise = 0.5 + 0.5 * sin(p.x + p.y);
            vec3 finalColor = mix(color1, color2, noise);
            finalColor = mix(finalColor, accent, noise * 0.05); // Subtle accent bleed
            
            gl_FragColor = vec4(finalColor, 1.0);
        }
    `;

    function createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, "u_time");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");

    let startTime = performance.now();
    function renderShader() {
        let time = (performance.now() - startTime) * 0.001; 
        gl.uniform1f(timeLocation, time);
        gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        requestAnimationFrame(renderShader);
    }
    requestAnimationFrame(renderShader);
}
