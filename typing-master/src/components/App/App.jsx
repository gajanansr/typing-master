import React from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css'

import { SAMPLE_PARAGRAPHS } from './../../Data/SampleParagraphs' 


const totalTime = 60;

const apiURL = "http://metaphorpsum.com/paragraphs/1/8";

const DefaultState = {

    selectedParagraph: "",
    timeStarted: false,
    timeRemaining: totalTime,
    characters: 0,
    words: 0,
    wpm: 0,
    testInfo: []

};

class App extends React.Component {
    state = DefaultState;

     fetchNewParagraphFallback = () => {

            const data = SAMPLE_PARAGRAPHS [

                    Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
            ];

            const selectedParagraphArray = data.split("");
                // console.log(selectedParagraphArray);

                const testInfo = selectedParagraphArray.map((selectedLetter) => {

                    return {
                        testLetter: selectedLetter,
                        status: "notAttempted"

                    };

                });
                this.setState({ ...DefaultState , testInfo, selectedParagraph: data });




     }
      
    fetchNewParagraph = () => {
        fetch(apiURL).then(Response => Response.text())
            .then(data => {
                /// console.log(data)
                // this.setState({ selectedParagraph: data });
                const selectedParagraphArray = data.split("");
                // console.log(selectedParagraphArray);

                const testInfo = selectedParagraphArray.map((selectedLetter) => {

                    return {
                        testLetter: selectedLetter,
                        status: "notAttempted"

                    };

                });
                this.setState({ ...DefaultState , testInfo, selectedParagraph: data });
            })


    }
    componentDidMount() {

        this.fetchNewParagraphFallback();


    }


    startAgain = () => {
        this.fetchNewParagraphFallback();

    }

    // function for child to parent 

    handleUserInput = (inputValue) => {
        // this.startTimer();
        if (!this.state.timeStarted) {
            this.startTimer();
        }
        // console.log(inputValue) ;

        //  Algorithm 

        /* 

            1. Handle Overflow 
            2. handle BackSpace 
            3. Handle Underflow 

            


                Handle Backspace 
                - Mark the [Index + 1 ] As Not Attempted 
                
                
                But Don't Forgot To Check For Overflow 
                (index + 1 )   -> Overflow 

                4. update status 

                


        */

        const characters = inputValue.length;
        const words = inputValue.split(" ").length;
        const index = characters - 1;

        if (index < 0) {
            this.setState({

                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: "notAttempted"
                    },
                    ...this.state.testInfo.slice(1),
                ]
                , characters
                , words


            });
            return;

        }

        if (index > this.state.selectedParagraph.length) {
            this.setState({ characters, words });
            return;
        }

        // Handle BackSpace 

        const testInfo = this.state.testInfo;
        if (!(index === this.state.selectedParagraph.length - 1)) {
            testInfo[index + 1].status = "notAttempted";
        }

        // check For Correct  

        const isCorrect = inputValue[index] === testInfo[index].testLetter;

        // Update The testInfo 

        testInfo[index].status = isCorrect ? "correct" : "incorrect";

        // update the state 

        this.setState({
            characters,
            words,
            testInfo
        })




    };

    startTimer = () => {

        this.setState({ timeStarted: true })

        const timer = setInterval(() => {



            // Time Setting 0
            if (this.state.timeRemaining > 0) {
                // calculate wpm 

                const timeSpend = totalTime - this.state.timeRemaining;
                const wpm = timeSpend > 0 ? (this.state.words / timeSpend) * totalTime : 0;

                this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                    wpm: parseInt(wpm)

                });
            }

            else {

                clearInterval(timer);
            }


        }, 1000)
    }

    render() {


        // fetch(apiURL)
        //     .then(response => response.text())
        //     .then( (information) => {
        //         console.log(" Api Response " + information)
        //     });


        return (
            <>

                <div className="app">

                    {/* Nav Section   */}
                    <Nav />

                    {/* landing Page  */}
                    <Landing />
                    {/* Challenge section  */}
                    <ChallengeSection
                        selectedParagraph={this.state.selectedParagraph}
                        words={this.state.words}
                        characters={this.state.characters}
                        wpm={this.state.wpm}
                        timeRemaining={this.state.timeRemaining}
                        timeStarted={this.state.timeStarted}
                        testInfo={this.state.testInfo}
                        onInputChange={this.handleUserInput}
                        startAgain={this.startAgain}

                    />
                    {/* Footer  */}

                    <Footer />

                </div>

            </>
        )


    }
}

export default App;