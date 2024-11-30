'use client';
import React, { useState, useEffect } from 'react';
import Host from '../components/Host';
import FadeInWords from '../components/FadeInWords';
import LoadingBar from './LoadingBar';
// import Question from './Question';
import Trivia from './Trivia';

export default function Kahoot() {
  const [loading, setLoading] = useState(false);
  const [startLoading, setStartLoading] = useState(false);
  const [displayQuestion, setDisplayQuestion] = useState(false)
  //need to display i list of questions and answers and pass it down to Question Component

  const handleComplete = () => {
    setLoading(false);
    setDisplayQuestion(true)
  };
  
  const handleClick = () =>  {
    setLoading(true);
    setStartLoading(true);
  };

  return (
    <div className='flex flex-col justify-center content-center h-2/4 flex-wrap w-[80%] m-[auto]'>
      <Host host='sami'/> 
      <FadeInWords text="Let's Play Kahoot!" />
      <div className='mt-6 flex justify-center'>
       <button onClick={handleClick} className='animate-buttonFadeIn rounded-lg w-full border-2 bg-green-500 text-white p-4 text-[40px] w-[80%]'>Start</button>
      </div>
      { loading && 
      <div>
        You will be given 1 min to answer 5 question.. are you ready?
        <LoadingBar start={startLoading} onComplete={handleComplete} />
      </div>
      }
      { displayQuestion &&
        <Trivia />
      }
    </div>
  )
};
