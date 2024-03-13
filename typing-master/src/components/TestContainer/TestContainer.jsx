import React from 'react'
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'

import './TestContainer.css'

const TestContainer = ({
    words,
    characters,
    wpm ,
    timeRemaining ,
    timeStarted ,
    selectedParagraph ,
    testInfo ,
    onInputChange ,
    startAgain

    // Props 

}) => {


   

    return (
        <>

            <div className="test-container">
                {timeRemaining > 0 ? (<div data-aos="fade-up" className="typing-challenge-container">
                    <TypingChallengeContainer
                        words={words}
                        characters={characters}
                        wpm={wpm}
                        timeRemaining={timeRemaining}
                        timeStarted={timeStarted} 
                        selectedParagraph={selectedParagraph}
                        testInfo={testInfo}
                        onInputChange={onInputChange}
                        

                    />

                </div>) : (<div className="try-again-container">



                    <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain} />

                </div>)}




            </div>


        </>
    )
}

export default TestContainer