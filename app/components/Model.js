import React, { useEffect, useState, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshTransmissionMaterial } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';


export default function Kuboid({ modelRef }) {
  const { scene } = useGLTF('./globe2.gltf');
  const materialRef = useRef();
  const { size } = useThree();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const responsiveScale = size.width < 768 ? 0.8 : 1.4;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (scene && materialRef.current) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material = materialRef.current;
        }
      });
    }
  }, [scene, materialRef.current]);

  useEffect(() => {
    if (modelRef.current) {
      // Use GSAP animation to move and rotate the model
      gsap.to(modelRef.current.position, {
        y: 0,
        duration: 3,
        ease: 'power2.out',
      });

      gsap.to(modelRef.current.rotation, {
        y: Math.PI * 2,
        duration: 3,
        ease: 'power2.out',
      });
    }
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.x = mouse.y * 0.2;
      modelRef.current.rotation.y = mouse.x * 0.2;
    }
  });

  return (
    <>
      <MeshTransmissionMaterial ref={materialRef}
       thickness={0.02}
       chromaticAberration={0.1}
       anisotropicBlur={0.01}
       iridescence={1}
       iridescenceIOR={1}
       iridescenceThicknessRange={[0, 1400]}
       clearcoatRoughness={0}
       clearcoat={1} />         
      {scene && (
        <primitive
          ref={modelRef}
          object={scene}
          scale={responsiveScale}
          position={[0, -5, 1]}
        />
      )}
    </>
  );
}
