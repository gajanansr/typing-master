import React from 'react'
import TestLetter from '../TestLetter/TestLetter'

import './TypingChallenge.css'

const TypingChallenge = ({ selectedParagraph , timeRemaining , timeStarted , testInfo , onInputChange }) => {

    //console.log(testInfo)
    return (

        <>
            
            <div className="typing-challenge">

                <div className="timer-container">

                    <p className='timer'> 00:
                       {
                           timeRemaining >=  10 ? timeRemaining : `0${timeRemaining}`
                       }  
                     </p>

                    <p className='timer-info' > 
                    {  !timeStarted  && " Start Typing To Start Test " }  
                    </p>


                </div>

                <div className="textarea-container">

                    <div className="textarea-left">
                        <div className="textarea text-paragraph">
                            {/* {selectedParagraph} */}

                            {/* Hey Sush !  We Are Gonne Use Map Function Here  */}

                            {
                                testInfo.map((indivisualLetterInfo , index ) => {
                                        return <TestLetter key={index} indivisualLetterInfo={indivisualLetterInfo} />

                                })
                            }
                        </div>
                    </div>
                    <div className="textarea-right">

                    
                        <textarea 
                            onChange={ (e) => {
                                
                                onInputChange(e.target.value);
                            }}
                        name="" id="text-ar" cols="30" rows="10" className="textarea" placeholder='start Typing Here'></textarea>

                    </div>
                </div>



            </div>



        </>


    )
}

export default TypingChallenge