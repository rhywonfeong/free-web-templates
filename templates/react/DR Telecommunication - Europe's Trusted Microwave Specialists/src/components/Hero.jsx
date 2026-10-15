import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    const vsSource = `
      attribute vec4 aVertexPosition;
      void main() {
          gl_Position = aVertexPosition;
      }
    `;

    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;

      void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          vec2 p = uv * 2.0 - 1.0;
          p.x *= u_resolution.x / u_resolution.y;
          p.y += 0.8;

          float radius = 1.6;
          float thickness = 0.5;
          
          float r = length(p);
          float a = atan(p.y, p.x);

          float dist = abs(r - radius);
          float warp = sin(r * 4.0 - u_time * 0.5) * 0.3;
          float lineFreq = 80.0;
          float lines = sin((a + warp) * lineFreq + u_time * 2.0);
          
          lines = smoothstep(0.85, 1.0, lines);
          float mask = smoothstep(thickness, 0.0, dist);
          float coreGlow = 0.05 / (dist * dist + 0.05);
          float pattern = lines * mask;

          vec3 color1 = vec3(0.0, 0.4, 1.0);
          vec3 color2 = vec3(0.8, 0.1, 0.9);
          
          vec3 baseColor = mix(color1, color2, sin(a * 2.0 + u_time * 0.5) * 0.5 + 0.5);
          vec3 lineColor = mix(baseColor, vec3(1.0), 0.4);

          vec3 finalColor = lineColor * pattern * 2.5 + baseColor * coreGlow * 1.5;

          finalColor *= smoothstep(1.5, -0.5, p.y);
          finalColor *= smoothstep(3.0, 1.0, r);

          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    function loadShader(gl, type, source) {
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

    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    const positions = new Float32Array([
      -1.0,  1.0,
       1.0,  1.0,
      -1.0, -1.0,
       1.0, -1.0,
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const vertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
    const resolutionLocation = gl.getUniformLocation(shaderProgram, 'u_resolution');
    const timeLocation = gl.getUniformLocation(shaderProgram, 'u_time');

    let animationFrameId;
    let startTime = Date.now();

    function resizeCanvasToDisplaySize(canvas) {
      const displayWidth  = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      if (canvas.width  !== displayWidth || canvas.width !== displayHeight) {
        canvas.width  = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      }
    }

    function render() {
      resizeCanvasToDisplaySize(gl.canvas);
      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(shaderProgram);

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(vertexPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(vertexPosition);

      gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);
      gl.uniform1f(timeLocation, (Date.now() - startTime) * 0.001);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      gl.deleteProgram(shaderProgram);
    };
  }, []);

  return (
    <div className="aspect-[4/3] overflow-hidden flex flex-col text-center bg-[#0a0a0a] w-full max-w-[1400px] max-h-[90vh] border-white/5 border rounded-[2rem] relative shadow-2xl">
      {/* WebGL Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none"></canvas>

      {/* UI Overlay */}
      <div className="relative z-10 flex flex-col h-full w-full p-6 md:p-10 pointer-events-none">

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col md:pb-12 pointer-events-auto pb-4 items-center justify-end">
          <div className="flex items-end mb-4 animate-fade-up opacity-0">
            <h1 className="text-[11vw] md:text-[5rem] leading-none bg-clip-text font-light text-transparent tracking-tighter font-geist bg-gradient-to-b from-white via-white to-indigo-100/50">
             Europe's Trusted <br/> 
        Microwave Specialists
    
            </h1>
            <div className="w-1 md:w-1.5 h-[0.7em] bg-white/80 rounded-full ml-2 md:ml-4 mb-[0.1em] animate-blink"></div>
          </div>
          
          <p className="text-zinc-400 text-center max-w-lg text-sm md:text-lg leading-relaxed animate-fade-up opacity-0 delay-100 font-geist">
              We offer full-cycle delivery. From tower rigging to live network integration. Connecting networks where fiber can’t.
          </p>
          
          <Link to="/ecosystem" className="mt-8 bg-white text-black px-6 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300 tracking-tight animate-fade-up opacity-0 delay-200 shadow-[0_0_40px_rgba(255,255,255,0.1)] inline-block font-geist">
            Initialize space
          </Link>
        </main>
      </div>
    </div>
  );
}