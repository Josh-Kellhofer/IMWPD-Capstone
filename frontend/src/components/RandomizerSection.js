import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ButtonLink } from './ButtonLink';


function RandomizerSection() {

 
  return (
    <div className='hero-container'>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>IMWPD</h1>
      <p>Decisions made easy</p>
      <div className="hero-btns">
       
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'> 
          Click for a Random Day!
          
        </Button>
      </div>
    </div>
  );
}

export default RandomizerSection;