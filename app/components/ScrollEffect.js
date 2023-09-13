import React, { useEffect } from 'react';

function ScrollEffect() {
    useEffect(() => {
        // Dynamically import the libraries
      

            // Split and animate text
             handleTextAnimation(gsap, ScrollTrigger);

            // Handle hero animations
             handleHeroAnimations(gsap, ScrollTrigger);

            // Handle service animations
            // handleServiceAnimations(gsap, ScrollTrigger);

            // Handle portfolio animations
            // handlePortfolioAnimations(gsap, ScrollTrigger);

            // Handle background color change
            handleBackgroundColorChange(gsap, ScrollTrigger);

            // handleInfotextAnimation(gsap, ScrollTrigger);
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



// function handleInfotextAnimation(gsap, ScrollTrigger) {
//   const splitTypeText = document.querySelectorAll('.info-text')

//       splitTypeText.forEach((char, i) => {
//         const textAnimation = new SplitType(char, {types: 'chars'})

//         gsap.from(textAnimation.chars, {
//           scrollTrigger: {
//             trigger: char,
//             start: 'top 80%',
//             end: 'top 30%',
//             scrub: true,
//             once: true
//           },
//           opacity: 0.2,
//           stagger: 0.1
//         })
//       })
// }

// function handleServiceAnimations(gsap, ScrollTrigger) {
//     const serviceContainerTimeline = gsap.timeline({ paused: true });
//     serviceContainerTimeline.to(".service-border", {
//         width: "100%",
//         duration: 2,
//         ease: "power4.out",
//     });

//     const serviceItemTimeline = gsap.timeline({ paused: true });
//     serviceItemTimeline.to(".service-item-border", {
//         width: "100%",
//         duration: 1.5,
//         ease: "power4.out",
//     });

//     ScrollTrigger.create({
//         trigger: ".service-container",
//         start: "top 80%",
//         onEnter: () => {
//             serviceContainerTimeline.play();
//         },
//     });

//     serviceContainerTimeline.call(() => {
//         serviceItemTimeline.play();
//     });
// }

// function handlePortfolioAnimations(gsap, ScrollTrigger) {
//     const portfolioAnimations = [
//         { selector: "#portfolio-1, #portfolio-4", y: -50 },
//         { selector: "#portfolio-2, #portfolio-5", y: -100 },
//         { selector: "#portfolio-3, #portfolio-6", y: -150 }
//     ];

//     portfolioAnimations.forEach(animation => {
//         gsap.from(animation.selector, {
//             duration: 2,
//             y: animation.y,
//             yPercent: 0,
//             scrollTrigger: {
//                 trigger: '.work-container',
//                 start: 'top center',
//                 end: 'bottom center',
//                 scrub: 1.5
//             }
//         });
//     });
// }

function handleBackgroundColorChange(gsap, ScrollTrigger) {

        // ScrollTrigger for background color change
        const textContainer = document.querySelector(".text-containerr");
        const portfolioContainer = document.querySelector(".portfolio-container");
  
        ScrollTrigger.create({
          trigger: textContainer,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to("main", { backgroundColor: "#121212", color: "#fff" });
          },
          onLeave: () => {
            gsap.to("main", { backgroundColor: "#fff", color: "#121212", duration: 1 });
          },
          onEnterBack: () => {
            gsap.to("main", { backgroundColor: "#121212", color: "#fff", duration: 1 });
          },
        });
  
        ScrollTrigger.create({
          trigger: portfolioContainer,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to("main", { backgroundColor: "#fff", color: "#121212", duration: 1 });
          },
          onLeaveBack: () => {
            gsap.to("main", { backgroundColor: "#121212", color: "#fff", duration: 1 });
          },
        });
}



export default ScrollEffect;
