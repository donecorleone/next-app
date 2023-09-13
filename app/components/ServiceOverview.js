import React, { useRef } from 'react';

export default function ServiceOverview() {

    return (
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
    );
}