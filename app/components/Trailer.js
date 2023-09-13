import React, { useEffect, useRef } from 'react';

const Trailer = () => {
  const trailerRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const trailer = trailerRef.current;
    const icon = iconRef.current;

    const animateTrailer = (e, interacting) => {
      const x = e.clientX - trailer.offsetWidth / 2,
            y = e.clientY - trailer.offsetHeight / 2;

      const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
      }

      trailer.animate(keyframes, { 
        duration: 800, 
        fill: "forwards" 
      });
    }

    const getTrailerClass = type => {
      switch(type) {
        case "video":
          return "fa-solid fa-play";
        default:
          return "fa-solid fa-arrow-up-right"; 
      }
    }

    const handleMouseMove = e => {
      const interactable = e.target.closest(".interactable"),
            interacting = interactable !== null;

      animateTrailer(e, interacting);

      trailer.dataset.type = interacting ? interactable.dataset.type : "";

      if(interacting) {
        icon.className = getTrailerClass(interactable.dataset.type);
      }
    }

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <>
      <div id="trailer" ref={trailerRef}></div>
      <div id="trailer-icon" ref={iconRef}></div>
      {/* ... rest of your component */}
    </>
  );
}

export default Trailer;
