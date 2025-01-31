import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './HeroSection.scss';
import { DynamicHeading, DynamicLayout, DynamicParagraph } from '@my-portfolio/react-components';

export const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phrases = ['Full-Stack Developer 🧑‍💻', 'Cybersecurity Enthusiast 🌐', 'Music Curator 🎛️', 'Biker 🚵', 'Trilingual 🇪🇦 🇬🇧 🇩🇪'];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /** ✅ Initialize Scene, Camera, Renderer */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 0.1;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    /** ✅ Create Particles */
    const particleCount = window.innerWidth < 768 ? 10000 : 13000;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({ color: 0x61dafb, size: 0.03 });

    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    /** ✅ Mouse Move Listener */
    const mouse = { x: 0, y: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      if (window.innerWidth >= 768) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    /** ✅ Animation Loop */
    let animationFrameId: number;

    const animate = () => {
      particles.rotation.y += 0.002;
      particles.rotation.x = mouse.y * 0.5;
      particles.rotation.z = mouse.x * 0.5;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    /** ✅ Handle Window Resize */
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    /** ✅ Text Transition Effect */
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setFade(false);
      }, 500);
    }, 4000);

    /** ✅ Cleanup Function */
    return () => {
      // 🛑 Remove event listeners properly
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      // 🛑 Stop animation loop
      cancelAnimationFrame(animationFrameId);
      
      // 🛑 Dispose of Three.js objects to free memory
      scene.remove(particles);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      
      // 🛑 Clear interval for text animation
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="hero-canvas" />
      <div id="home" className="hero-section">
        <DynamicLayout direction="column" gap={20} className="hero-content">
          <DynamicHeading level={1} className="hero-title">Luis Carlos Arias</DynamicHeading>
          <DynamicHeading level={2} className={`hero-carousel ${fade ? 'fade-out' : 'fade-in'}`}>
            {phrases[currentPhraseIndex]}
          </DynamicHeading>
          <DynamicParagraph className="hero-subtitle">
            Crafting modern web solutions with cutting-edge technologies and a focus on cybersecurity.
          </DynamicParagraph>
        </DynamicLayout>
      </div>
    </>
  );
};
