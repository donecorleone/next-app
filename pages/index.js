// pages/index.js
'use client'

import React from 'react';
import { Canvas } from '@react-three/fiber';
import HeroScene from '@/app/components/HeroScene';
import InfoScene from '@/app/components/InfoScene';
import CircularButton from '@/app/components/CircularButton';
import Trailer from '@/app/components/Trailer';
import ScrollEffect from '@/app/components/ScrollEffect';


export default function Home() {
  
  return (
    <>
      {/* <Trailer /> */}
      <ScrollEffect />

      <main className='w-full'>
        
        <div className="header absolute w-full h-[8vh] z-10 bg-transparent text-white">
          <span>ART</span>
          <span>ABOUT</span>
          <span>VISIT</span>
          <span>SHOP</span>
        </div>

        <div className='meddl absolute w-full h-screen z-10 bg-transparent flex justify-end items-end px-[2vw] py-[1vh] sm:py-[3vh]'>
          <CircularButton />
        </div>

        <div className='h-screen z-0'>
          <Canvas 
            camera={{
              fov: 45,
              near: 0.1,
              far: 200
            }}
            antialias="true"
          >
            <color args={['#121212']} attach="background"/>
            <HeroScene />
          </Canvas>
        </div>

        <div className='w-full px-[2vw]'>
          <div className='work-container w-full h-[20vh] flex items-center'>
            <h2 className='text-2xl text-white'>our recent work</h2>
          </div>
          <div className="portfolio-container w-full grid grid-cols-1 md:grid-cols-3 gap-12 py-[10vh]">
            <div className="interactable min-h-[90vh]" id='portfolio-1'>
              <div className='w-full h-[90%] bg-red-500 rounded-xl mb-[10px] p-0'></div>
              <div className='portfolio-text text-xl '><span className='px-2 bg-green-300 rounded-md text-xl mr-2'>APP</span>BUFFL - ONE OF THE GREATEST FLASHCARDS APP</div>
            </div>
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

      <div className='service-overview w-full h-screen'>
        <div className='top-headline grid place-items-center text-[26px] mb-[5vh]'>OUR SERVICE</div>
      <div class="service-headline">
            <h2>
                <div class="headline-item" >
                    <span id="split-text">3D DESIGN</span><img src="./1.jpg" alt="" class="expand-image" id="img-1" />
                </div> 
                <div class="headline-item">
                    <img src="./3.jpg" alt="" class="expand-image" id="img-2" /><span id="split-text">DEVELOPMENT</span>
                </div>
                <div class="headline-item" >
                    <span id="split-text">UI / UX</span><img src="./2.jpg" alt="" class="expand-image" id="img-3" />
                </div>
                <div class="headline-item">
                    <img src="./4.jpg" alt="" class="expand-image" id="img-2" /><span id="split-text">WEBDESIGN</span>
                </div>
            </h2>
        </div>   
      </div>   

      <div className='w-full min-h-screen'>
      <div className="service-container">
      <div className="service-border"></div>
      <div className="service-title">
        <div className="sticky-box">OUR SERVICE</div>
      </div>
      <div className="service-content">
        <div className="service-item">
          <h3 data-type="link">01. Branding</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nam
            reiciendis unde magni eligendi excepturi maxime nulla adipisci,
            veniam officiis, explicabo commodi laboriosam blanditiis repellendus
            quidem debitis ab! Aliquid, facere. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
        </div>

        <div className="service-item">
          <div className="service-item-border"></div>
          <h3>02. Webdesign</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nam
            reiciendis unde magni eligendi excepturi maxime nulla adipisci,
            veniam officiis, explicabo commodi laboriosam blanditiis repellendus
            quidem debitis ab! Aliquid, facere. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
        </div>

        <div className="service-item">
          <div className="service-item-border"></div>
          <h3>03. Online Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nam
            reiciendis unde magni eligendi excepturi maxime nulla adipisci,
            veniam officiis, explicabo commodi laboriosam blanditiis repellendus
            quidem debitis ab! Aliquid, facere. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
        </div>

        <div className="service-item">
          <div className="service-item-border"></div>
          <h3>04. Werbetechnik</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nam
            reiciendis unde magni eligendi excepturi maxime nulla adipisci,
            veniam officiis, explicabo commodi laboriosam blanditiis repellendus
            quidem debitis ab! Aliquid, facere. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  </div> 


        <div className='info-container w-full'>
          <div className='w-full sm:w-1/2 h-screen'>
          <Canvas camera={{ fov: 45, near: 0.1, far: 200 }}
          antialias="true">
              <InfoScene />
              <color args={['#fff']} attach="background"/>
            </Canvas>
          </div>
          <div className='w-full sm:w-1/2 h-screen'></div>
        </div>
      </main>
    </>
  );
}
