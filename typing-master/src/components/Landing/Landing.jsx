import React from 'react'
import './Landing.css';
import flashImg from './../../assets/flash.png'
import Typewriter from 'typewriter-effect';

const Landing = () => {
  return (
    <>

      <div className="landing-container">
        <div className="landing-left" data-aos="fade-right">
          <h1 className='landing-header' > Can you Type ... ? </h1>
          <div className="tywriter-container">
            <p> <Typewriter
              options={{
                strings: ['Quick ?', 'Fast ?', 'Correct ?'],
                autoStart: true,
                loop: true,
              }}
            /></p>


          </div>
        </div>
        <div className="landing-right">
          <img data-aos="fade-left" className='flash-img' src={flashImg} alt="flash" />
        </div>

      </div>


    </>
  )
}

export default Landing