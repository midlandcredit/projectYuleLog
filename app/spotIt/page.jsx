'use client';
import React, { useState } from 'react'
import Host from '../components/Host';
import { useRouter } from 'next/navigation';
import './spotIt.css';
import FadeInWords from '../components/FadeInWords';


export default function SpotIt() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);
  const [buttonText, setButtonText] = useState("Check Answer");

  function nextStep() {
    setStep(step + 1);
    hide();
  }

  function show() {
    if (buttonText == "Check Answer") {
      setShowAnswer(true);
      if (step == 4) {
        setButtonText("Back Home");
      } else {
        setButtonText("Next Question");
      }
    } else {
      if (step == 4) {
        router.push('/');
      } else {
        nextStep();
        setButtonText("Check Answer");
      }
    }
  }

  function hide() {
    setShowAnswer(false);
  }

  return (
    <div className="spotit">
      {step == 1 && 
      <div className="">
        <h3>Let's Play...</h3>
        <FadeInWords  text='Spot It!' />
        <Host host='louisa' />
        
        <button onClick={nextStep}>Start Game</button>
      </div>}

      {step == 2 &&
      <div>
        <h3>Level: Easy</h3>
        <h1>Spot the mistake in this code!</h1>
        <div className="images">
          <img className="" src={showAnswer ? "/spotitEasyAnswer.png" : "/spotitEasy1.png"} alt="" />
          <img className="" src="/spotitEasy2.png" alt="" />
        </div>
        <button onClick={show}>{buttonText}</button>        
      </div>
      }

      {step == 3 &&
      <div>
        <h3>Level: Medium</h3>
        <h1>Spot the mistake in this code!</h1>
        <div className="images">
          <img className="" src={showAnswer ? "/spotitMediumAnswer.png" : "/spotitMedium1.png"} alt="" />
          <img className="" src="/spotitMedium2.png" alt="" />
        </div>
        <button onClick={show}>{buttonText}</button>
      </div>
      }
      
      {step == 4 &&
      <div>
        <h3>Level: Hard</h3>
        <h1>Spot the mistake in this code!</h1>
        <div className="images">
          <img className="" src={showAnswer ? "/spotitHardAnswer.png" : "/spotitHard1.png"} alt="" />
          <img className="" src="/spotitHard2.png" alt="" />
        </div>
        <button onClick={show}>{buttonText}</button>
      </div>
      }
    </div>
    
  )
}
