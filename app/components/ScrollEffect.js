import React, { useEffect } from 'react';

function ScrollEffect() {
    useEffect(() => {
        // Dynamically import the libraries
      

            // Split and animate text
             handleTextAnimation(gsap, ScrollTrigger);

            // Handle hero animations
             handleHeroAnimations(gsap, ScrollTrigger);

            // Handle service animations
            handleServiceAnimations(gsap, ScrollTrigger);

            // Handle portfolio animations
            handlePortfolioAnimations(gsap, ScrollTrigger);

            // Handle background color change
            handleBackgroundColorChange(gsap, ScrollTrigger);

            handleInfotextAnimation(gsap, ScrollTrigger);
        });

    return null;
}

 function handleTextAnimation(gsap, ScrollTrigger) {
     const splitText = new SplitType('#split-text');
     gsap.to('.char', {
         y: 0,
         stagger: 0.02,
         delay: 0.1,
         duration: .01,
         scrollTrigger: {
             trigger: '.service-overview',
             start: 'top center',
             toggleActions: "play none none reverse"
         }
     });
 }

 function handleHeroAnimations(gsap, ScrollTrigger) {
     const heroTimeline = gsap.timeline({
         scrollTrigger: {
             trigger: '.service-overview',
             start: 'top center',
             toggleActions: "play none none reverse"
         }
     });

     heroTimeline.to("img", {
         clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
         scale: 1.1,
         duration: 0.7
     });
 }



function handleInfotextAnimation(gsap, ScrollTrigger) {
  const splitTypeText = document.querySelectorAll('.info-text')

      splitTypeText.forEach((char, i) => {
        const textAnimation = new SplitType(char, {types: 'chars'})

        gsap.from(textAnimation.chars, {
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            once: true
          },
          opacity: 0.2,
          stagger: 0.1
        })
      })
}

function handleServiceAnimations(gsap, ScrollTrigger) {
    const serviceContainerTimeline = gsap.timeline({ paused: true });
    serviceContainerTimeline.to(".service-border", {
        width: "100%",
        duration: 2,
        ease: "power4.out",
    });

    const serviceItemTimeline = gsap.timeline({ paused: true });
    serviceItemTimeline.to(".service-item-border", {
        width: "100%",
        duration: 1.5,
        ease: "power4.out",
    });

    ScrollTrigger.create({
        trigger: ".service-container",
        start: "top 80%",
        onEnter: () => {
            serviceContainerTimeline.play();
        },
    });

    serviceContainerTimeline.call(() => {
        serviceItemTimeline.play();
    });
}

function handlePortfolioAnimations(gsap, ScrollTrigger) {

  if (window.innerWidth < 768){
    return;
  }
    const portfolioAnimations = [
        { selector: "#portfolio-1, #portfolio-4", y: 0 },
        { selector: "#portfolio-2, #portfolio-5", y: -150 },
        { selector: "#portfolio-3, #portfolio-6", y: -250 }
    ];

    portfolioAnimations.forEach(animation => {
        gsap.from(animation.selector, {
            y: animation.y,
            yPercent: 0,
            scrollTrigger: {
                trigger: '.work-container',
                start: 'top top',
                end: 'top center',
                scrub: 1
            }
        });
    });
}

function handleBackgroundColorChange(gsap, ScrollTrigger) {

  const animationSettings = {
    'portfolio-1': { start: -50, end: 0 },
    'portfolio-4': { start: -50, end: 0 },
    'portfolio-2': { start: -150, end: 0 },
    'portfolio-5': { start: -150, end: 0 },
    'portfolio-3': { start: -250, end: 0 },
    'portfolio-6': { start: -250, end: 0 }
};

// Iterate over each portfolio ID and create the animation
for (let id in animationSettings) {
    let element = document.getElementById(id);
    if (element) {
        gsap.from(element, {
            y: animationSettings[id].start,
            scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "top top",
                scrub: true
            },
            y: animationSettings[id].end
        });
    }
}
}


export default ScrollEffect;
