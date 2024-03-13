import React from 'react'
import './ChallengeDetailsCard.css' 


const ChallengeDetailsCard = ( { 
    cardname , 
    cardvalue 

}) => {
  return (
    <>
    
    <div className="detailscard-container">

                <div className="card-name"> {cardname}  </div>
                <div className="card-value">  {cardvalue } </div> 
                

    </div>
    
    </>
  )
}

export default ChallengeDetailsCard