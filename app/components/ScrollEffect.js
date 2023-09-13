import React, { useEffect } from 'react';

function ScrollEffect() {
  useEffect(() => {
    // Dynamically import the libraries
    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger')
    ]).then(([gsapModule, scrollTriggerModule]) => {
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

     // Use split-type to split text
      const splitText = new SplitType('#split-text')
      console.log(splitText)
     
      
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

    const serviceContainerTimeline = gsap.timeline({
      paused: true,
    });

    serviceContainerTimeline.to(".service-border", {
      width: "100%",
      duration: 2,
      ease: "power4.out",
  });

  // Create a new timeline for the service item border animation
  const serviceItemTimeline = gsap.timeline({
      paused: true,
  });

  // Add the border animation to the timeline, with a delay to start after the service border is complete
  serviceItemTimeline.to(".service-item-border", {
      width: "100%",
      duration: 1.5,
      ease: "power4.out",
  });

    // Add a scroll trigger to the service container
    ScrollTrigger.create({
      trigger: ".service-container",
      start: "top 80%",
      onEnter: () => {
          serviceContainerTimeline.play();
      },
  });
   
  // When the service container animation completes, start the service item border animation
  serviceContainerTimeline.call(() => {
      serviceItemTimeline.play();
  });

  gsap.from("#portfolio-1, #portfolio-4", {
    duration: 2,
    y: -50,
    yPercent: 0,
    scrollTrigger: {
        trigger: '.work-container',
        start: 'top center',
        end: 'bottom center',
        scrub: 1.5
    }
});

gsap.from("#portfolio-2, #portfolio-5", {
    duration: 2,
    y: -100,
    yPercent: 0,
    scrollTrigger: {
        trigger: '.work-container',
        start: 'top center',
        end: 'bottom center',
        scrub: 1.5
       
    }
});

gsap.from("#portfolio-3, #portfolio-6", {
    duration: 2,
    y: -150,
    yPercent: 0,
    scrollTrigger: {
        trigger: '.work-container',
        start: 'top center',
        end: 'bottom center',
        scrub: 1.5
       
    }
});

      // ScrollTrigger for background color change
      const portfolioContainer = document.querySelector(".portfolio-container");
      const infoContainer = document.querySelector(".service-overview");

      ScrollTrigger.create({
        trigger: portfolioContainer,
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
        trigger: infoContainer,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to("main", { backgroundColor: "#fff", color: "#121212", duration: 1 });
        },
        onLeaveBack: () => {
          gsap.to("main", { backgroundColor: "#121212", color: "#fff", duration: 1 });
        },
      });

    });
  }, []);

  return null;
}

export default ScrollEffect;
