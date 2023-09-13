import { useRef, useEffect } from 'react';

import Raven from './Ravency';




export default function InfoScene() {
  const modelRavenRef = useRef();
  





  return (
    <>

      <directionalLight intensity={5} />
      <ambientLight intensity={1} />

    

      <Raven modelRef={modelRavenRef} />

    
    </>
  );
}
