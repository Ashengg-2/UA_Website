export const woodVertexShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  varying float vHeight;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p);
      p *= 2.04;
      amplitude *= 0.48;
    }
    return value;
  }

  float woodHeight(vec2 uv) {
    vec2 warp = vec2(fbm(uv * 1.05 + 1.8), fbm(uv * 1.05 + 5.4)) * 0.11;
    vec2 grainCoord = vec2(
      uv.x * 0.35 + warp.x + sin(uv.x * 2.2) * 0.04,
      uv.y * 14.5 + warp.y * 2.8
    );
    float primary = fbm(grainCoord);
    float fine = fbm(grainCoord * 2.8 + 0.9) * 0.32;
    float pore = fbm(vec2(grainCoord.x * 5.5, grainCoord.y * 24.0)) * 0.12;
    return primary * 0.72 + fine + pore;
  }

  void main() {
    vUv = uv;
    float height = woodHeight(uv * 2.2 + vec2(uTime * 0.004, uTime * 0.003));
    vHeight = height;
    vec3 displaced = position + normal * (height - 0.48) * 0.048;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`;

export const woodFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  varying vec2 vUv;
  varying float vHeight;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 6; i++) {
      value += amplitude * noise(p);
      p *= 2.03;
      amplitude *= 0.5;
    }
    return value;
  }

  float woodPattern(vec2 uv) {
    vec2 drift = vec2(sin(uTime * 0.05), cos(uTime * 0.04)) * 0.003;
    vec2 parallax = uMouse * 0.003;
    vec2 p = uv + drift + parallax;
    vec2 warp = vec2(fbm(p * 0.95 + 1.2), fbm(p * 0.95 + 4.1)) * 0.13;
    vec2 grainCoord = vec2(
      p.x * 0.55 + warp.x + sin(p.x * 2.4) * 0.05,
      p.y * 13.0 + warp.y * 2.6
    );
    float primary = fbm(grainCoord);
    float fine = fbm(grainCoord * 2.6 + 0.7) * 0.34;
    float pore = fbm(vec2(grainCoord.x * 5.0, grainCoord.y * 22.0)) * 0.1;
    return clamp(primary * 0.74 + fine + pore, 0.0, 1.0);
  }

  vec3 woodColor(float pattern) {
    vec3 c0 = vec3(0.071, 0.047, 0.035);
    vec3 c1 = vec3(0.110, 0.071, 0.059);
    vec3 c2 = vec3(0.141, 0.094, 0.078);
    vec3 c3 = vec3(0.176, 0.114, 0.094);
    vec3 c4 = vec3(0.290, 0.184, 0.145);
    vec3 c5 = vec3(0.416, 0.290, 0.220);
    vec3 c6 = vec3(0.478, 0.349, 0.267);

    vec3 base = mix(c0, c1, smoothstep(0.0, 0.18, pattern));
    base = mix(base, c2, smoothstep(0.12, 0.32, pattern));
    base = mix(base, c3, smoothstep(0.28, 0.48, pattern));
    base = mix(base, c4, smoothstep(0.42, 0.68, pattern));
    base = mix(base, c5, smoothstep(0.62, 0.84, pattern) * 0.55);
    return mix(base, c6, smoothstep(0.78, 0.96, pattern) * 0.22);
  }

  void main() {
    vec2 uv = vUv;
    float eps = 0.0011;
    float center = woodPattern(uv);
    float dx = woodPattern(uv + vec2(eps, 0.0)) - woodPattern(uv - vec2(eps, 0.0));
    float dy = woodPattern(uv + vec2(0.0, eps)) - woodPattern(uv - vec2(0.0, eps));
    vec3 normal = normalize(vec3(-dx * 26.0, -dy * 26.0, 1.0));

    vec3 lightDir = normalize(vec3(-0.62 + uMouse.x * 0.1, 0.78 + uMouse.y * 0.06, 0.58));
    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    vec3 halfDir = normalize(lightDir + viewDir);

    float diff = max(dot(normal, lightDir), 0.0);
    float spec = pow(max(dot(normal, halfDir), 0.0), 88.0);
    float clearcoat = pow(max(dot(normal, halfDir), 0.0), 160.0);
    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 4.0);
    float ridge = smoothstep(0.42, 0.72, center);
    float groove = smoothstep(0.38, 0.12, center);
    float ao = mix(1.0, 0.58, groove);

    vec3 color = woodColor(center);
    color *= 0.42 + diff * 0.68;
    color *= ao;
    color = mix(color, color * 1.18, ridge * 0.35);

    float slowPulse = 0.5 + 0.5 * sin(uTime * 0.28 + center * 10.0);
    color += vec3(0.16, 0.13, 0.10) * spec * (0.28 + slowPulse * 0.1);
    color += vec3(0.22, 0.18, 0.14) * clearcoat * 0.18;
    color += vec3(0.08, 0.07, 0.06) * fresnel * 0.42;

    vec2 glossCenter = vec2(0.16, 0.84) + uMouse * 0.04 + vec2(sin(uTime * 0.11) * 0.025, cos(uTime * 0.08)  * 0.02);
    float broadGloss = pow(max(0.0, 1.0 - length(uv - glossCenter) * 1.8), 2.8) * 0.11;
    float streakGloss = pow(
      max(0.0, 1.0 - abs(normalize(uv - 0.5).y) * 12.0),
      6.0
    ) * 0.06;
    color += vec3(0.18, 0.15, 0.12) * (broadGloss + streakGloss);

    vec2 vigCoord = (gl_FragCoord.xy / uResolution - 0.5) * vec2(1.08, 1.0);
    float vignette = 1.0 - dot(vigCoord, vigCoord) * 0.48;
    color *= clamp(vignette, 0.62, 1.0);

    color = mix(color, vec3(0.035, 0.022, 0.018), 0.04);
    color = pow(color, vec3(0.92));

    gl_FragColor = vec4(color, 1.0);
  }
`;
