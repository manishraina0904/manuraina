"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap, ScrollTrigger, isReducedMotion } from "@/lib/gsap";

interface CinematicCanvasProps {
  onDragStateChange?: (state: string) => void;
}

export default function CinematicCanvas({ onDragStateChange }: CinematicCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const reduced = isReducedMotion();

    // 1. SCENE & CAMERA
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05030a, 0.038);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8.2);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    // 2. ROOT CINEMATIC GROUP
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 3. 3D CORE MONOLITH (GLOWING PLANETARY CORE)
    // 3. 3D CORE MONOLITH (GLOWING PLANETARY CORE)
    // Inner Glowing Core
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6, // Vibrant Violet
      emissive: 0x6d28d9, // Deep violet emissive
      emissiveIntensity: 0.92,
      roughness: 0.15,
      metalness: 0.85,
      transparent: true,
      opacity: 0.96,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    rootGroup.add(innerMesh);

    // Atmospheric Planetary Glow Halo (soft additive celestial limb glow)
    const haloGeo = new THREE.SphereGeometry(1.36, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    rootGroup.add(haloMesh);

    // Secondary Outer Ethereal Nebula Glow
    const outerHaloGeo = new THREE.SphereGeometry(1.72, 32, 32);
    const outerHaloMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const outerHaloMesh = new THREE.Mesh(outerHaloGeo, outerHaloMat);
    rootGroup.add(outerHaloMesh);

    // Outer Faceted Polyhedral Wireframe Cage
    const outerGeo = new THREE.IcosahedronGeometry(1.9, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0xc4b5fd, // Light violet
      emissive: 0x6d28d9, // Deep violet emissive
      wireframe: true,
      transparent: true,
      opacity: 0.40,
      roughness: 0.30,
      metalness: 0.88,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    rootGroup.add(outerMesh);

    // Gyroscopic Orbital Rings - Glowing violet planetary rings
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x6d28d9,
      metalness: 0.85,
      roughness: 0.20,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
    });
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.55, 0.015, 16, 100), ringMat1);
    ring1.rotation.x = Math.PI / 3;
    rootGroup.add(ring1);

    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x7e22ce,
      metalness: 0.85,
      roughness: 0.20,
      transparent: true,
      opacity: 0.38,
      side: THREE.DoubleSide,
    });
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(3.05, 0.013, 16, 100), ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    rootGroup.add(ring2);

    const ring3 = new THREE.Mesh(
      new THREE.TorusGeometry(3.55, 0.009, 16, 100),
      new THREE.MeshBasicMaterial({ color: 0xddd6fe, transparent: true, opacity: 0.20 })
    );
    ring3.rotation.z = Math.PI / 2.5;
    rootGroup.add(ring3);

    // 4. FLOATING STAR CONSTELLATION (DELICATE, CONTROLLED)
    const particleCount = 220;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cBlue = new THREE.Color(0x8b5cf6);
    const cDeep = new THREE.Color(0x6d28d9);
    const cWhite = new THREE.Color(0xede9fe);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.2 + Math.random() * 4.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const rVal = Math.random();
      const col = rVal > 0.65 ? cBlue : rVal > 0.35 ? cDeep : cWhite;
      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.034,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // 5. LIGHTING RIG - ELEVATED PLANET GLOW & RADIANCE
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const lightViolet = new THREE.PointLight(0x8b5cf6, 3.0, 25);
    lightViolet.position.set(5, 4, 6);
    scene.add(lightViolet);

    const lightDeep = new THREE.PointLight(0x6d28d9, 2.0, 25);
    lightDeep.position.set(-5, -4, -4);
    scene.add(lightDeep);

    const centerGlow = new THREE.PointLight(0xa855f7, 2.8, 14);
    centerGlow.position.set(0, 0, 0);
    scene.add(centerGlow);

    // 6. MOUSE INTERACTION & 360 DRAGGING STATE
    let mouseX = 0;
    let mouseY = 0;
    let dragRotX = 0;
    let dragRotY = 0;
    let targetDragRotX = 0;
    let targetDragRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 7. GSAP SCROLLTRIGGER CAMERA & OBJECT CHOREOGRAPHY TIMELINE
    // The camera and 3D objects morph dynamically through 6 cinematic acts based on page scroll
    const scrollObj = {
      progress: 0,
      camX: 0,
      camY: 0,
      camZ: 8.2,
      rootX: 0,
      rootY: 0,
      rootZ: 0,
      rootScale: 1,
      coreExpand: 1,
      lookAtY: 0,
    };

    let scrollTriggerInstance: ScrollTrigger | null = null;

    if (!reduced) {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        onUpdate: (self) => {
          const p = self.progress;
          scrollObj.progress = p;

          // Hero act (0.0 -> 0.15): Full visibility and gentle floating
          // Beyond Hero (p > 0.15): Canvas fades out cleanly so that cards,
          // retro monitor, calendar, and 3D pass are crisp and unobstructed!
          if (containerRef.current) {
            if (p < 0.15) {
              containerRef.current.style.opacity = "1";
            } else if (p < 0.25) {
              const fade = 1 - (p - 0.15) / 0.10;
              containerRef.current.style.opacity = String(Math.max(0, fade));
            } else {
              containerRef.current.style.opacity = "0";
            }
          }

          if (p <= 0.2) {
            const t = p / 0.2;
            scrollObj.camX = gsap.utils.interpolate(0, 1.5, t);
            scrollObj.camY = gsap.utils.interpolate(0, 0.8, t);
            scrollObj.camZ = gsap.utils.interpolate(8.2, 7.2, t);
            scrollObj.rootX = gsap.utils.interpolate(0, 0.3, t);
            scrollObj.rootY = gsap.utils.interpolate(0, 0.8, t);
            scrollObj.rootScale = gsap.utils.interpolate(0.9, 0.7, t);
            scrollObj.coreExpand = gsap.utils.interpolate(1, 0.8, t);
            scrollObj.lookAtY = gsap.utils.interpolate(0, 0.2, t);
          }
        },
      });
    }

    // 8. RESIZE HANDLER
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    // 9. ANIMATION LOOP
    let animId: number;
    const clock = new THREE.Clock();

    const renderLoop = () => {
      animId = requestAnimationFrame(renderLoop);
      const elapsedTime = clock.getElapsedTime();

      // Idle auto-rotation
      const baseRotY = elapsedTime * 0.12;
      const baseRotX = Math.sin(elapsedTime * 0.2) * 0.05;

      rootGroup.position.set(0, 0, 0);
      rootGroup.rotation.x = scrollObj.rootX + baseRotX;
      rootGroup.rotation.y = scrollObj.rootY + baseRotY;
      rootGroup.scale.setScalar(scrollObj.rootScale * 0.85);

      // Core scale pulsation
      const pulse = Math.sin(elapsedTime * 1.8) * 0.03;
      innerMesh.scale.setScalar(scrollObj.coreExpand + pulse);
      haloMesh.scale.setScalar(scrollObj.coreExpand + pulse * 1.2);
      outerHaloMesh.scale.setScalar(scrollObj.coreExpand + pulse * 0.8);
      outerMesh.scale.setScalar(1 + (scrollObj.coreExpand - 1) * 0.4);

      // Orbital rotations
      ring1.rotation.z = elapsedTime * 0.25;
      ring2.rotation.z = -elapsedTime * 0.2;
      ring3.rotation.x = elapsedTime * 0.15;

      particles.rotation.y = elapsedTime * 0.03;

      // Camera parallax sway
      if (!reduced) {
        camera.position.x += (scrollObj.camX + mouseX * 0.3 - camera.position.x) * 0.08;
        camera.position.y += (scrollObj.camY + mouseY * 0.2 - camera.position.y) * 0.08;
        camera.position.z += (scrollObj.camZ - camera.position.z) * 0.08;
        camera.lookAt(0, scrollObj.lookAtY, 0);
      } else {
        camera.position.set(0, 0, 7.5);
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
      renderer.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      outerHaloGeo.dispose();
      outerHaloMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [onDragStateChange]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-700"
      aria-hidden="true"
    >
      {/* Radiant atmospheric violet glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(109, 40, 217, 0.18) 45%, transparent 75%)",
        }}
      />
      <canvas ref={canvasRef} className="relative z-10 w-full h-full block" />
    </div>
  );
}
