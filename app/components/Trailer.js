import React, { useState, useEffect, useRef } from 'react';

export default function Trailer() {
  const [trailerTextContent, setTrailerTextContent] = useState('');
  const [isInteracting, setIsInteracting] = useState(false);
  const trailerRef = useRef(null);
  const trailerTextRef = useRef(null);

  const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailerRef.current.offsetWidth / 2;
    const y = e.clientY - trailerRef.current.offsetHeight / 2;

    const transformValue = `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1})`;

    trailerRef.current.style.transform = transformValue;
  };

  const handleMouseMove = (e) => {
    const interactable = e.target.closest(".interactable");
    const interacting = interactable !== null;

    setIsInteracting(interacting);
    animateTrailer(e, interacting);

    if (interacting) {
      if (interactable.classList.contains("cta-action")) {
        setTrailerTextContent("Contact");
      } else {
        setTrailerTextContent("View");
      }
    } else {
      setTrailerTextContent('');
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="trailer" ref={trailerRef} style={{ opacity: '1' }}>
        {/* ... other content inside the trailer ... */}
      </div>
      <div id="trailer-text" ref={trailerTextRef}>
        {trailerTextContent}
      </div>
    </>
  );
}
