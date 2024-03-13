import React from 'react'

import './TryAgain.css' 

const TryAgain = ({
    words,
    characters,
    wpm ,
    startAgain

}) => {
    const url = "abhiimali.github.io";
    return (
        <>

            <div className="try-again-cont" data-aos="fade-up">
                <h1> Test Result </h1>

                <div className="result-container">

                    <p>
                        <b> Characters : {characters} </b>
                    </p>

                    <p>
                        <b> Words  : {words} </b>
                    </p>
                    <p>
                        <b> Speed  :  {wpm} wpm </b> 
                    </p>

                </div>
                  

            </div>

            <div>
                <button
                    onClick={() => startAgain()}
                    className="end-buttons start-again-btn"
                >
                    Re-try
                </button>
                <button
                    onClick={() =>
                        window.open(
                            "https://www.facebook.com/sharer/sharer.php?u=" +
                                url,
                            "facebook-share-dialog",
                            "width=800,height=600"
                        )
                    }
                    className="end-buttons share-btn"
                >
                    Share
                </button>
                <button
                    onClick={() =>
                        window.open(
                            "https://twitter.com/intent/tweet?text=Check%20this%20out%20" +
                                url,
                            "Twitter",
                            "width=800,height=600"
                        )
                    }
                    className="end-buttons tweet-btn"
                >
                    Tweet
                </button>
            </div>


        </>
    )
}

export default TryAgain;