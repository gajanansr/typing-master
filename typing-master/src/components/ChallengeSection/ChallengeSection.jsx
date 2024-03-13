import React from 'react'
// import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import TestContainer from '../TestContainer/TestContainer'

import './ChallengeSection.css'
const ChallengeSection = (props) => { 

  // console.log(props.words);
  return (
    <>
    
    <div className="challenge-section-container">

        <h1 className='challege-section-header' data-aos="fade-down" >  Take A Speed Test Now  </h1>
        <TestContainer words={props.words} characters={props.characters} wpm={props.wpm}  
            timeRemaining ={props.timeRemaining}  
            timeStarted = {props.timeStarted}
            selectedParagraph={props.selectedParagraph}
            testInfo = {props.testInfo} 
            onInputChange={props.onInputChange}
            startAgain={props.startAgain}

        />
    </div>
        
    </>
  )
}

export default ChallengeSection