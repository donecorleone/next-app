// pages/index.js
'use client'

import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import InfoScene from '@/app/components/InfoScene';
import CircularButton from '@/app/components/CircularButton';
import Trailer from '@/app/components/Trailer';
import ServiceOverview from '@/app/components/ServiceOverview';
import Link from 'next/link';
import Lenis from '@studio-freight/lenis'
import { Suspense } from 'react';
const HeroScene = React.lazy(() => import('@/app/components/HeroScene'));
const ScrollEffect = React.lazy(() => import('@/app/components/ScrollEffect'));

export default function Home() {
  
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  

  return (
    <>
      <Trailer />
      <Suspense fallback={null}>
        <ScrollEffect />
      </Suspense>
      <main className='w-full'>
        <div className='sticky-wrapper'>
        <div className='sticky-container'>
          <div className='hero-section'>

            <div className='absolute w-full h-screen z-10 bg-transparent flex justify-between items-end px-[4vw] py-[4vh] sm:py-[3vh]'>
              <div className='hero-text max-w-[400px]'>
                <p>A creative recruitment companythat specialises in unknown talent & unknown opportunity.</p>
                <button>View our Service</button>
              </div>
              <CircularButton />
            </div>



            <div className='h-screen z-0'>
              <Canvas 
                camera={{
                  fov: 45,
                  near: 0.1,
                  far: 200
                }}
                >

                <color args={['#121212']} attach="background"/>
                  <Suspense fallback={null}>
                    <HeroScene />
                  </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      <div className='sticky-container'>
        <div className='text-container w-full h-fit rounded-t-[35px]'>
          <h2 className=' pb-8'>ABOUT RACENCY</h2>
          <p className='info-text w-full'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </div>

        <div className='portfolio-section w-full px-[4vw] '>
          <div className='portfolio-text w-full h-[20vh] flex items-center'>
            <h2 className='text-2xl'>our recent work</h2>
          </div>
          <div className="portfolio-container w-full grid grid-cols-1 md:grid-cols-3 gap-12 py-[10vh]">
          <Link href="/path-to-your-page" legacyBehavior>
          <a className="interactable min-h-[90vh]" id='portfolio-1'>
            <div className='w-full h-[90%] bg-red-500 rounded-xl mb-[10px] p-0' id='pvpictures'></div>
            <div className='portfolio-text text-xl '>
              <span className='px-2 bg-green-300 rounded-md text-xl mr-2'>APP</span>
              BUFFL - ONE OF THE GREATEST FLASHCARDS APP
            </div>
          </a>
    </Link>
            <div className="interactable min-h-[90vh]" id='portfolio-2'>
              <div className='w-full h-[90%] bg-blue-500 rounded-xl mb-[10px] p-0'></div>
              <div className='portfolio-text text-xl '><span className='px-2 bg-green-300 rounded-md text-xl mr-2'>APP</span>BUFFL - ONE OF THE GREATEST FLASHCARDS APP</div>
            </div>
            <div className="interactable min-h-[90vh]" id='portfolio-3'>
              <div className='w-full h-[90%] bg-green-500 rounded-xl mb-[10px] p-0'></div>
              <div className='portfolio-text text-xl '><span className='px-2 bg-green-300 rounded-md text-xl mr-2'>APP</span>BUFFL - ONE OF THE GREATEST FLASHCARDS APP</div>
            </div>
            <div className="interactable min-h-[90vh]" id='portfolio-4'>
              <div className='w-full h-[90%] bg-purple-500 rounded-xl mb-[10px] p-0'></div>
              <div className='portfolio-text text-xl '><span className='px-2 bg-green-300 rounded-md text-xl mr-2'>APP</span>BUFFL - ONE OF THE GREATEST FLASHCARDS APP</div>
            </div>
            <div className="interactable min-h-[90vh]" id='portfolio-5'>
              <div className='w-full h-[90%] bg-yellow-500 rounded-xl mb-[10px] p-0'></div>
              <div className='portfolio-text text-xl '><span className='px-2 bg-green-300 rounded-md text-xl mr-2'>APP</span>BUFFL - ONE OF THE GREATEST FLASHCARDS APP</div>
            </div>
            <div className="interactable min-h-[90vh]" id='portfolio-6'>
              <div className='w-full h-[90%] bg-orange-500 rounded-xl mb-[10px] p-0'></div>
              <div className='portfolio-text text-xl '><span className='px-2 bg-green-300 rounded-md text-xl mr-2'>APP</span>BUFFL - ONE OF THE GREATEST FLASHCARDS APP</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='relative w-full'>
     <div className='sticky-container'>
        <div className='service-overview w-full relative'>
          {/* <div className='top-headline grid place-items-center text-[26px] mb-[5vh]'>OUR SERVICE</div> */}
               {/* <ServiceOverview /> */}
              <div className='grid items-center my-[10vh] border rounded-2xl px-[40px] py-[20px]'>
                <button>Button</button>
              </div>
           </div>   
        </div>
      
      
      <div className='sticky-container'>
        <div className='info-container w-full max-h-screen bg-white'>
          <div className='w-full sm:w-1/2 h-screen'>
          <Canvas camera={{ fov: 45, near: 0.1, far: 200 }}
          
          >
              <InfoScene />
              <color args={['#fff']} attach="background"/>
            </Canvas>
          </div>
          <div className='w-full sm:w-1/2 h-screen'></div>
        </div>
      </div>
    </div>
      
        <div className='w-full h-screen bg-white'></div>
  
    
  </main>
    </>
  );
}
