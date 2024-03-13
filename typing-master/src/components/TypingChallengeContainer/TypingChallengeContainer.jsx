import React from 'react'
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import TypingChallenge from '../TypingChallenge/TypingChallenge'

import './TypingChallengeContainer.css'

const TypingChallengeContainer = ( {
  words,
  characters,
  wpm ,
  timeRemaining ,
  timeStarted ,
  selectedParagraph ,
  testInfo ,
  onInputChange ,


  // Props 

}) => {
  return (
    <>
    <div className="typing-challenge-container">
            {/* Detailed Section */}

            <div className="details-container">
                {/* Words Typed */}
                  <ChallengeDetailsCard   cardname="Words" cardvalue={words}  />


                {/*  Charcters Typed  */}

                <ChallengeDetailsCard  cardname="Characters" cardvalue={characters} />

                {/* Speed */}

                <ChallengeDetailsCard  cardname= "Speed "  cardvalue={wpm} />

            </div>
            {/* The Real Challenge  */}

            <div className="typewriter-container">
                 <TypingChallenge selectedParagraph={selectedParagraph} 
                 timeRemaining={timeRemaining} 
                 timeStarted={timeStarted} 
                 testInfo = {testInfo} 
                 onInputChange={onInputChange}
                  />
            </div>
    </div>
    
    
    </>
  )
}

export default TypingChallengeContainer