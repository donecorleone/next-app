import React, { useRef } from 'react';


export default function CircularButton() {
    const textRef = useRef(null);
    const circleRef = useRef(null);
    const innerTextRef = useRef(null);
    const arrowButtonRef = useRef(null);

    React.useEffect(() => {
        const text = textRef.current;
        text.innerHTML = text.innerText.split('').map(
            (char, i) => `<span style="transform:rotate(${i * 8.3}deg)" >${char}</span>`
        ).join('');
    }, []);

    const handleMouseOver = () => {
        innerTextRef.current.style.color = "black";
        arrowButtonRef.current.style.transform = "rotate(-30deg)";
        arrowButtonRef.current.style.color = "green";
        circleRef.current.style.backgroundColor = "#f0e15c";
    };

    const handleMouseOut = () => {
        innerTextRef.current.style.color = "#fff";
        arrowButtonRef.current.style.transform = "";
        arrowButtonRef.current.style.color = "#fff";
        circleRef.current.style.backgroundColor = "#000";
    };

    return (
        <div className="circularDiv">
            <div className="circle" ref={circleRef} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div className="text" ref={innerTextRef}>
                    <p className='animation-text' ref={textRef}>&nbsp;LET'S WORK TOGETHER &nbsp; LET'S WORK TOGETHER&nbsp;</p>
                </div>
                <div className="arrowButton" ref={arrowButtonRef}>
                    <button className="heroArrowButton"><img src='white-globe.jpeg'></img></button>
                </div>
            </div>
        </div>
    );
}
