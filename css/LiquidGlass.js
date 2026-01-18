export function initWebGL(canvas, img) {
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vertShaderSrc = `
        attribute vec2 position;
        void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `;

    const fragShaderSrc = `
    precision mediump float;

    uniform vec3 iResolution;
    // uniform float iTime;
    uniform vec4 iMouse;
    uniform sampler2D iChannel0;

    void mainImage(out vec4 fragColor, in vec2 fragCoord)
    {
      const float NUM_ZERO = 0.0;
      const float NUM_ONE = 1.0;
      const float NUM_HALF = 0.5;
      const float NUM_TWO = 2.0;
      const float POWER_EXPONENT = 6.0;
      const float MASK_MULTIPLIER_1 = 10000.0;
      const float MASK_MULTIPLIER_2 = 9500.0;
      const float MASK_MULTIPLIER_3 = 11000.0;
      const float LENS_MULTIPLIER = 5000.0;
      const float MASK_STRENGTH_1 = 8.0;
      const float MASK_STRENGTH_2 = 16.0;
      const float MASK_STRENGTH_3 = 2.0;
      const float MASK_THRESHOLD_1 = 0.95;
      const float MASK_THRESHOLD_2 = 0.9;
      const float MASK_THRESHOLD_3 = 1.5;
      const float SAMPLE_RANGE = 4.0;
      const float SAMPLE_OFFSET = 0.5;
      const float GRADIENT_RANGE = 0.2;
      const float GRADIENT_OFFSET = 0.1;
      const float GRADIENT_EXTREME = -1000.0;
      const float LIGHTING_INTENSITY = 0.3;

      vec2 uv = fragCoord / iResolution.xy;
      vec2 mouse = iMouse.xy;
      if (length(mouse) < NUM_ONE) {
        mouse = iResolution.xy / NUM_TWO;
      }
      vec2 m2 = (uv - mouse / iResolution.xy);

      float roundedBox = pow(abs(m2.x * iResolution.x / iResolution.y), POWER_EXPONENT) + pow(abs(m2.y), POWER_EXPONENT);
      float rb1 = clamp((NUM_ONE - roundedBox * MASK_MULTIPLIER_1) * MASK_STRENGTH_1, NUM_ZERO, NUM_ONE);
      float rb2 = clamp((MASK_THRESHOLD_1 - roundedBox * MASK_MULTIPLIER_2) * MASK_STRENGTH_2, NUM_ZERO, NUM_ONE) -
        clamp(pow(MASK_THRESHOLD_2 - roundedBox * MASK_MULTIPLIER_2, NUM_ONE) * MASK_STRENGTH_2, NUM_ZERO, NUM_ONE);
      float rb3 = clamp((MASK_THRESHOLD_3 - roundedBox * MASK_MULTIPLIER_3) * MASK_STRENGTH_3, NUM_ZERO, NUM_ONE) -
        clamp(pow(NUM_ONE - roundedBox * MASK_MULTIPLIER_3, NUM_ONE) * MASK_STRENGTH_3, NUM_ZERO, NUM_ONE);

      fragColor = vec4(NUM_ZERO);
      float transition = smoothstep(NUM_ZERO, NUM_ONE, rb1 + rb2);

      if (transition > NUM_ZERO) {
        vec2 lens = ((uv - NUM_HALF) * NUM_ONE * (NUM_ONE - roundedBox * LENS_MULTIPLIER) + NUM_HALF);
        float total = NUM_ZERO;
        for (float x = -SAMPLE_RANGE; x <= SAMPLE_RANGE; x++) {
          for (float y = -SAMPLE_RANGE; y <= SAMPLE_RANGE; y++) {
            vec2 offset = vec2(x, y) * SAMPLE_OFFSET / iResolution.xy;
            fragColor += texture2D(iChannel0, offset + lens);
            total += NUM_ONE;
          }
        }
        fragColor /= total;

        float gradient = clamp((clamp(m2.y, NUM_ZERO, GRADIENT_RANGE) + GRADIENT_OFFSET) / NUM_TWO, NUM_ZERO, NUM_ONE) +
          clamp((clamp(-m2.y, GRADIENT_EXTREME, GRADIENT_RANGE) * rb3 + GRADIENT_OFFSET) / NUM_TWO, NUM_ZERO, NUM_ONE);
        vec4 lighting = clamp(fragColor + vec4(rb1) * gradient + vec4(rb2) * LIGHTING_INTENSITY, NUM_ZERO, NUM_ONE);

        fragColor = mix(texture2D(iChannel0, uv), lighting, transition);
      } else {
        fragColor = texture2D(iChannel0, uv);
      }
    }

    void main() {
      mainImage(gl_FragColor, gl_FragCoord.xy);
    }
  `;

    const createShader = (type, source) => {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error(gl.getShaderInfoLog(shader));
            return null;
        }
        return shader;
    };

    const vs = createShader(gl.VERTEX_SHADER, vertShaderSrc);
    const fs = createShader(gl.FRAGMENT_SHADER, fragShaderSrc);

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program failed to link:', gl.getProgramInfoLog(program));
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    gl.useProgram(program);

    const uniforms = {
        resolution: gl.getUniformLocation(program, "iResolution"),
        mouse: gl.getUniformLocation(program, "iMouse"),
        texture: gl.getUniformLocation(program, "iChannel0"),
    };

    let mouse = [0, 0];
    canvas.addEventListener("mousemove", e => {
        mouse = [e.clientX, canvas.height - e.clientY];
    });

    const texture = gl.createTexture();
    const setupTexture = () => {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    };

    if (img.complete) setupTexture();
    else img.onload = setupTexture;

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const render = () => {
        gl.clear(gl.COLOR_BUFFER_BIT);
        if (uniforms.resolution) gl.uniform3f(uniforms.resolution, canvas.width, canvas.height, 1);
        if (uniforms.mouse) gl.uniform4f(uniforms.mouse, mouse[0], mouse[1], 0, 0);
        if (uniforms.texture !== null) {
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.uniform1i(uniforms.texture, 0);
        }
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(render);
    };
    render();
}
