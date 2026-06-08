// @ts-nocheck
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Link } from "react-router";
import gsap from "gsap";

const PARTICLE_COUNT = 4000;
const BASE_SPEED = 1.2;
const RIBBON_COUNT = 5;
const DRIFT_SPEED = 0.15;
const DRIFT_AMOUNT = 0.15;
const TAPER_LENGTH = 150;

function ribbonY(ribbonIdx: number, x: number, time: number): number {
  const phase = ribbonIdx * ((Math.PI * 2) / RIBBON_COUNT);
  const y1 = Math.sin(x * 0.003 + phase + time * 0.5) * 80;
  const y2 = Math.sin(x * 0.007 + phase * 1.3 + time * 0.3) * 40;
  const y3 = Math.sin(x * 0.015 + phase * 0.7 + time * 0.8) * 15;
  const baseY = (ribbonIdx - (RIBBON_COUNT - 1) / 2) * 120;
  return baseY + y1 + y2 + y3;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlineRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const width = window.innerWidth;
    const height = window.innerHeight;
    const camera = new THREE.OrthographicCamera(
      -width / 2,
      width / 2,
      height / 2,
      -height / 2,
      1,
      1000
    );
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Create gradient texture
    const gradCanvas = document.createElement("canvas");
    gradCanvas.width = 32;
    gradCanvas.height = 32;
    const gradCtx = gradCanvas.getContext("2d")!;
    const gradient = gradCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.3, "rgba(232, 196, 106, 0.6)");
    gradient.addColorStop(0.7, "rgba(212, 168, 83, 0.15)");
    gradient.addColorStop(1, "rgba(212, 168, 83, 0)");
    gradCtx.fillStyle = gradient;
    gradCtx.fillRect(0, 0, 32, 32);
    const pointTexture = new THREE.CanvasTexture(gradCanvas);

    // Particle data
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const opacities = new Float32Array(PARTICLE_COUNT);
    const speeds = new Float32Array(PARTICLE_COUNT);
    const maxOpacities = new Float32Array(PARTICLE_COUNT);
    const phases = new Float32Array(PARTICLE_COUNT);
    const ribbonIndices = new Float32Array(PARTICLE_COUNT);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const ages = new Float32Array(PARTICLE_COUNT);
    const lifespans = new Float32Array(PARTICLE_COUNT);
    const driftPhases = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      ages[i] = Infinity; // Start dead
    }

    // Geometry and material
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("opacity", new THREE.BufferAttribute(opacities, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Vector3(0.91, 0.78, 0.52) },
        size: { value: 1.0 },
        pointTexture: { value: pointTexture },
      },
      vertexShader: `
        uniform float size;
        varying float vOpacity;
        attribute float opacity;
        void main() {
          vOpacity = opacity;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D pointTexture;
        uniform vec3 color;
        varying float vOpacity;
        void main() {
          vec4 texColor = texture2D(pointTexture, gl_PointCoord);
          if (texColor.a * vOpacity < 0.01) discard;
          gl_FragColor = vec4(texColor.rgb * color, texColor.a * vOpacity);
        }
      `,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
      transparent: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    let mouseActive = false;
    let mouseTimeout: ReturnType<typeof setTimeout>;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseX =
        (e.clientX - rect.left) *
          (renderer.domElement.width / rect.width) -
        width / 2;
      mouseY =
        -(
          (e.clientY - rect.top) *
            (renderer.domElement.height / rect.height) -
          height / 2
        );
      mouseActive = true;
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        mouseActive = false;
      }, 100);
    };
    renderer.domElement.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;

      // Spawn particles
      for (let r = 0; r < RIBBON_COUNT; r++) {
        if (Math.random() < 0.3) {
          // Find dead particle
          for (let i = 0; i < PARTICLE_COUNT; i++) {
            if (ages[i] > lifespans[i]) {
              positions[i * 3] = -width / 2 - Math.random() * 100;
              positions[i * 3 + 1] = ribbonY(r, -width / 2, time);
              positions[i * 3 + 2] = Math.random();
              speeds[i] = BASE_SPEED * (0.8 + Math.random() * 0.4);
              opacities[i] = 0;
              maxOpacities[i] = 0.3 + Math.random() * 0.5;
              phases[i] = Math.random() * Math.PI * 2;
              ribbonIndices[i] = r;
              sizes[i] = 10 + Math.random() * 30;
              ages[i] = 0;
              lifespans[i] = 300 + Math.random() * 200;
              driftPhases[i] = Math.random() * Math.PI * 2;
              break;
            }
          }
        }
      }

      // Update particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        if (ages[i] > lifespans[i]) continue;
        ages[i]++;

        positions[i * 3] += speeds[i];

        const baseY = ribbonY(ribbonIndices[i], positions[i * 3], time);
        const drift =
          Math.sin(
            time * DRIFT_SPEED * Math.PI * 2 + driftPhases[i]
          ) *
          DRIFT_AMOUNT *
          100;
        const targetY = baseY + drift;
        positions[i * 3 + 1] += (targetY - positions[i * 3 + 1]) * 0.1;

        const _life = ages[i] / lifespans[i];
        const headFade = Math.min(1, ages[i] / TAPER_LENGTH);
        const tailFade = Math.min(1, (lifespans[i] - ages[i]) / TAPER_LENGTH);
        opacities[i] = maxOpacities[i] * headFade * tailFade;

        // Mouse repulsion
        if (mouseActive) {
          const dx = positions[i * 3] - mouseX;
          const dy = positions[i * 3 + 1] - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const force = (1 - dist / 200) * 2.0;
            positions[i * 3] += (dx / dist) * force;
            positions[i * 3 + 1] += (dy / dist) * force;
          }
        }
      }

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.opacity.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.left = -w / 2;
      camera.right = w / 2;
      camera.top = h / 2;
      camera.bottom = -h / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // GSAP entrance animations
    const tl = gsap.timeline({ delay: 0.3 });
    tl.to(overlineRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      .to(
        headingRef.current?.querySelectorAll("span") || [],
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .to(
        subtitleRef.current,
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.2"
      )
      .to(
        ctaRef.current,
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.2"
      );

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      pointTexture.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const headingWords = ["Where", "Ideas", "Flow", "Into", "Reality"];

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0B1A3E]"
    >
      {/* Three.js canvas container */}
      <div
        ref={containerRef}
        className="absolute inset-0"
        role="presentation"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-[800px] mx-auto">
        <p
          ref={overlineRef}
          className="text-[#D4A853] text-xs sm:text-sm font-bold tracking-[0.12em] uppercase mb-6 opacity-0 translate-y-2"
        >
          INTELLIGENT AUTOMATION
        </p>

        <h1
          ref={headingRef}
          className="text-white font-normal leading-[0.95] mb-6"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            fontFamily: "'Playfair Display', Georgia, serif",
            textShadow: "0 2px 20px rgba(11, 26, 62, 0.5)",
          }}
        >
          {headingWords.map((word, i) => (
            <span
              key={i}
              className="inline-block mr-[0.25em] opacity-0 translate-y-2"
              style={{ filter: "blur(12px)" }}
            >
              {word}
            </span>
          ))}
        </h1>

        <p
          ref={subtitleRef}
          className="text-white/75 text-base sm:text-lg md:text-xl max-w-[640px] mx-auto mb-8 opacity-0 translate-y-2 leading-relaxed"
        >
          Smart AI helps creators and businesses automate workflows, generate
          stunning visuals, and orchestrate intelligent processes — all from one
          unified platform.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-wrap items-center justify-center gap-4 opacity-0 translate-y-2"
        >
          <Link
            to="/ai-generate"
            className="px-8 py-3.5 rounded-full bg-[#D4A853] text-[#0B1A3E] font-semibold text-sm sm:text-base hover:bg-[#E8C46A] hover:-translate-y-0.5 transition-all duration-300"
          >
            Start Creating
          </Link>
          <Link
            to="/ai-chat"
            className="px-8 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm sm:text-base hover:border-[#D4A853] hover:text-[#D4A853] transition-all duration-300"
          >
            Watch Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
