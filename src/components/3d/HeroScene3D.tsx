"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { isReducedMotion } from "@/lib/gsap";

interface HeroScene3DProps {
  onInteractStateChange?: (state: string) => void;
}

export default function HeroScene3D({ onInteractStateChange }: HeroScene3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const reduced = isReducedMotion();

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060709, 0.05);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // ROOT GROUP FOR ROTATION & DRAG
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. INNER LUMINOUS CORE (Pulsing Energy Polyhedron)
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.8,
      transmission: 0.6,
      ior: 1.5,
      thickness: 0.5,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // 2. OUTER FACETED WIREFRAME CAGE
    const outerGeo = new THREE.IcosahedronGeometry(1.9, 1);
    const wireMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x3b0764,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
      roughness: 0.2,
      metalness: 0.9,
    });
    const outerMesh = new THREE.Mesh(outerGeo, wireMat);
    rootGroup.add(outerMesh);

    // 3. GYROSCOPIC ORBITAL RINGS
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x007799,
      roughness: 0.3,
      metalness: 0.8,
      side: THREE.DoubleSide,
    });
    const ringGeo1 = new THREE.TorusGeometry(2.5, 0.02, 16, 100);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    rootGroup.add(ring1);

    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x4c1d95,
      roughness: 0.3,
      metalness: 0.8,
      side: THREE.DoubleSide,
    });
    const ringGeo2 = new THREE.TorusGeometry(2.9, 0.015, 16, 100);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    rootGroup.add(ring2);

    const ringGeo3 = new THREE.TorusGeometry(3.3, 0.01, 16, 100);
    const ringMat3 = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.z = Math.PI / 2.5;
    rootGroup.add(ring3);

    // 4. FLOATING DATA NODES / PARTICLES
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f0ff);
    const violetColor = new THREE.Color(0x8b5cf6);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.2 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = Math.random();
      const pColor = mixed > 0.6 ? cyanColor : mixed > 0.3 ? violetColor : whiteColor;
      colors[i * 3] = pColor.r;
      colors[i * 3 + 1] = pColor.g;
      colors[i * 3 + 2] = pColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // 5. LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLightCyan = new THREE.PointLight(0x00f0ff, 4, 20);
    pointLightCyan.position.set(4, 3, 5);
    scene.add(pointLightCyan);

    const pointLightViolet = new THREE.PointLight(0x8b5cf6, 4, 20);
    pointLightViolet.position.set(-4, -3, -3);
    scene.add(pointLightViolet);

    const centerPointLight = new THREE.PointLight(0x00f0ff, 2.5, 6);
    centerPointLight.position.set(0, 0, 0);
    scene.add(centerPointLight);

    // 6. 360-DEGREE INTERACTIVE ORBIT CONTROLS WITH DAMPING
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;
    let targetRotationX = 0.2;
    let targetRotationY = 0.3;
    let currentRotationX = 0.2;
    let currentRotationY = 0.3;
    let autoRotateSpeed = reduced ? 0 : 0.003;

    // Pointer Parallax
    let mouseX = 0;
    let mouseY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      setHasInteracted(true);
      if (onInteractStateChange) onInteractStateChange("DRAG");

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      previousPointerX = clientX;
      previousPointerY = clientY;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      // Track relative normalized mouse for subtle camera sway
      const rect = container.getBoundingClientRect();
      mouseX = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((clientY - rect.top) / rect.height) * 2 - 1);

      if (!isDragging) return;

      const deltaX = clientX - previousPointerX;
      const deltaY = clientY - previousPointerY;

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.008;

      previousPointerX = clientX;
      previousPointerY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
      if (onInteractStateChange) onInteractStateChange("DEFAULT");
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    domElement.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    // Scroll Telemetry for Camera Parallax
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);

      // Smoothly tilt and elevate the 3D model as user scrolls into the manifesto
      rootGroup.position.y = progress * 1.5;
      rootGroup.position.z = -progress * 2.0;
      rootGroup.rotation.z = progress * 0.4;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // RESIZE HANDLER
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    // ANIMATION LOOP
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Inertial damping rotation
      if (!isDragging && !reduced) {
        targetRotationY += autoRotateSpeed;
      }

      currentRotationX += (targetRotationX - currentRotationX) * 0.08;
      currentRotationY += (targetRotationY - currentRotationY) * 0.08;

      rootGroup.rotation.x = currentRotationX;
      rootGroup.rotation.y = currentRotationY;

      // Camera parallax sway
      if (!reduced) {
        camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.05;
        camera.lookAt(0, rootGroup.position.y * 0.5, 0);

        // Individual element rotations
        coreMesh.rotation.x = elapsedTime * 0.2;
        coreMesh.rotation.y = elapsedTime * 0.3;
        coreMesh.scale.setScalar(1 + Math.sin(elapsedTime * 2) * 0.05);

        outerMesh.rotation.y = -elapsedTime * 0.15;
        outerMesh.rotation.z = elapsedTime * 0.1;

        ring1.rotation.z = elapsedTime * 0.4;
        ring2.rotation.z = -elapsedTime * 0.3;
        ring3.rotation.x = elapsedTime * 0.2;

        particles.rotation.y = elapsedTime * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);

      domElement.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      outerGeo.dispose();
      wireMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      ringGeo3.dispose();
      ringMat3.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [onInteractStateChange]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[420px] md:min-h-[580px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      data-cursor-type="DRAG"
      aria-label="Interactive 3D Technological Core. Drag to rotate 360 degrees."
    >
      {/* 360 INTERACTIVE HINT BADGE */}
      <div
        className={`absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-elevated/80 backdrop-blur-md border border-white/10 text-xs font-mono text-muted uppercase tracking-wider pointer-events-none transition-all duration-500 z-10 ${
          hasInteracted ? "opacity-30 hover:opacity-100" : "opacity-90 animate-bounce"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-accent-cyan animate-ping" />
        <span className="text-foreground">Explore 360°</span>
        <span className="text-muted/70 hidden sm:inline">| Drag to inspect</span>
      </div>

      {!webglSupported && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface/50 backdrop-blur-md rounded-2xl border border-border-subtle p-8 text-center">
          <div>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan">
              ✦
            </div>
            <h4 className="text-foreground font-display font-medium text-lg mb-1">
              AI Monolith Architecture
            </h4>
            <p className="text-sm text-muted">
              Interactive 3D representation active in supported WebGL browsers.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
