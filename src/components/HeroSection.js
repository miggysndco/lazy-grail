import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return(
        <div class="hero-container">
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted></video> */}
            <h1>DISCOVER LIMITED SNEAKERS <br></br>WITHOUT LIMITATION</h1>
            <div class="hero-btns">
                <Button 
                class="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                >
                 BUY NOW
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;