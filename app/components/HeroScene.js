import { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Html, Text, Sparkles, OrbitControls } from '@react-three/drei';
import Kuboid from './Model';
import { MeshBasicMaterial, MeshStandardMaterial } from 'three';



export default function HeroScene() {
  const { size } = useThree();
  const modelRef = useRef();
  const responsiveSize = size.width < 768 ? 0.235 : 0.7;
  const responsiveMaxWidth = size.width < 768 ? 2 : 6;





  return (
    <>

      <directionalLight intensity={10} />
      <ambientLight intensity={100} />

      <Text 
        fontSize={responsiveSize} 
        maxWidth={responsiveMaxWidth} 
        textAlign='center'
        color={"#FFF"}
        material-toneMapped={false}
        >
        Digital experience that resonate
      </Text>
      
      {/* <mesh>
        <sphereGeometry />
        <meshStandardMaterial color={"white"}/>
      </mesh> */}
    

      <Kuboid modelRef={modelRef} />

      <Sparkles
        size={2}
        scale={[5, 5, 5]}
        position-y={0}
        speed={0.5}
        count={20}
      />
    </>
  );
}
