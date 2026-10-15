import React, { useEffect, useRef } from 'react';

export default function RibbonBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.warn('WebGL not supported, rendering static luxury dark background');
      return;
    }

    let animationId;
    
    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    
    window.addEventListener('resize', resize);
    resize();

    // Vertex Shader: simple pass-through
    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment Shader: ribbon flows based on HTML source
    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;

      vec3 ribbon(vec2 uv, float offset, float speed, float freq, float amp, vec3 color, float thickness) {
        float y = sin(uv.x * freq + u_time * speed + offset) * amp;
        y += sin(uv.x * (freq * 1.5) - u_time * (speed * 0.8)) * (amp * 0.3);
        float dist = abs(uv.y - y);
        float core = smoothstep(thickness, 0.0, dist);
        float glow = (thickness * 0.5) / (dist + 0.001);
        return color * (core * 0.5 + glow * 1.2);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= u_resolution.x / u_resolution.y;

        vec3 finalColor = vec3(0.0);
        p.y += 0.3; // Shift ribbons down slightly

        // 1. Deep Blue & Cyan Ribbon
        finalColor += ribbon(p, 0.0, 0.4, 1.2, 0.4, vec3(0.05, 0.3, 1.0), 0.03);
        finalColor += ribbon(p, 0.2, 0.3, 1.0, 0.5, vec3(0.0, 0.8, 1.0), 0.02) * 0.5;

        // 2. Purple Ribbon (Center sweeping up)
        finalColor += ribbon(p, 2.0, -0.5, 1.5, 0.6, vec3(0.7, 0.0, 1.0), 0.04);
        finalColor += ribbon(p, 2.2, -0.4, 1.3, 0.7, vec3(1.0, 0.0, 0.8), 0.02) * 0.6;

        // 3. Red/Orange accent
        finalColor += ribbon(p, 4.0, 0.6, 1.8, 0.3, vec3(1.0, 0.2, 0.0), 0.03);

        // Positioning masks (Keep header and top highly readable)
        float topMask = smoothstep(0.8, -0.2, p.y);
        finalColor *= topMask;

        float bottomMask = smoothstep(-1.2, -0.8, p.y);
        finalColor *= bottomMask;

        // Prevent blowout
        finalColor = vec3(1.0) - exp(-finalColor * 1.5);

        // Add extreme subtle base noise for high-fidelity audio look
        gl_FragColor = vec4(finalColor + vec3(0.01, 0.01, 0.02), 1.0);
      }
    `;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Quad Geometry
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

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');

    let startTime = Date.now();
    function render() {
      const currentTime = (Date.now() - startTime) / 1000.0;
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, currentTime);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationId = requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-85 transition-opacity duration-1000"
    />
  );
}