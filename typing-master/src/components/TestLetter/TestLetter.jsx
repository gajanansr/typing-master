import React from 'react'
import './TestLetter.css' 


const TestLetter = ( { indivisualLetterInfo }) => {

        const { status } = indivisualLetterInfo ;
        // let classStatus ; 

        // if(status === "correct")
        // {
        //     classStatus="test-letter-correct" ;
        // }
        // else if(status==="incorrect")
        // {
        //     classStatus="test-letter-incorrect";
        // }
        // else
        // {
        //     classStatus="test-letter-not-attempted" ;

        // }

        const classStatus = {
            correct: "test-letter-correct",
            incorrect: "test-letter-incorrect",
            notAttempted: "test-letter-not-attempted",
        }[status];


  return (
  
    
    <span className={`test-letter  ${classStatus}` } >{indivisualLetterInfo.testLetter}</span>
    
    
 
  )
}

export default TestLetter