import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshTransmissionMaterial } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';

export default function Raven() {
  const { scene } = useGLTF('./raven.gltf');
  const materialRavenRef = useRef();
  const modelRavenRef = useRef();  // Initialize the ref within the component
  const { size } = useThree();
  
  const responsiveScale = size.width < 768 ? 6 : 8;

  useEffect(() => {
    if (scene && materialRavenRef.current) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material = materialRavenRef.current;
        }
      });
    }
  }, [scene, materialRavenRef.current]);

  // Rotate the model on its own axis
  useFrame(() => {
    if (modelRavenRef.current) {
      modelRavenRef.current.rotation.y += 0.02;  // Adjust the value to change rotation speed
    }
  });

  return (
    <>
      <MeshTransmissionMaterial ref={materialRavenRef}
       thickness={2}
       backside backsideThickness={7}
       chromaticAberration={0.2}
       anisotropicBlur={0.05}
       iridescence={1}
       iridescenceIOR={1}
       iridescenceThicknessRange={[0, 1400]}
       clearcoatRoughness={0.5}
       clearcoat={0.9} />         
      {scene && (
        <primitive
          ref={modelRavenRef}
          object={scene}
          scale={responsiveScale}
          position={[0, 0, 1]}
        />
      )}
    </>
  );
}
