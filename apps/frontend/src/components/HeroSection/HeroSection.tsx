import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './HeroSection.scss';
import { DynamicHeading, DynamicLayout, DynamicParagraph } from '@my-portfolio/react-components';

export const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const particleCount = window.innerWidth < 768 ? 300 : 500; // Adjust particle count for smaller screens
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x61dafb,
      size: 0.05,
    });

    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10; // Spread particles randomly
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const mouse = { x: 0, y: 0 };
    window.addEventListener('mousemove', (event) => {
      if (window.innerWidth >= 768) { // Disable mouse interaction on smaller screens
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      }
    });

    const animate = () => {
      particles.rotation.y += 0.002;
      particles.rotation.x = mouse.y * 0.5;
      particles.rotation.z = mouse.x * 0.5;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', () => null);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="hero-canvas" />
      <div id="home" className="hero-section">
        <DynamicLayout direction="column" gap={20} className="hero-content">
            <DynamicHeading level={1} className="hero-title">
              Luis Arias
            </DynamicHeading>
            <DynamicParagraph className="hero-subtitle">
              Crafting modern web solutions with cutting-edge tech and a focus on cybersecurity.
            </DynamicParagraph>
        </DynamicLayout>
      </div>
    </>
  );
};