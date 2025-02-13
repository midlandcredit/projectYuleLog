'use client';
import React, { useState, useEffect } from 'react';
import Host from '../components/Host';
import FadeInWords from '../components/FadeInWords';
import LoadingBar from './LoadingBar';
import Trivia from './Trivia';

export default function Kahoot() {
  const [startLoading, setStartLoading] = useState(false);
  const [displayQuestion, setDisplayQuestion] = useState(false);
  const [removeButton, setRemoveButton] = useState(false);
  //need to display i list of questions and answers and pass it down to Question Component

  const handleComplete = () => {
    setStartLoading(false);
    setDisplayQuestion(true)
  };
  
  const handleClick = () =>  {
    setStartLoading(true); 
    setRemoveButton(true)
  };

  return (
    <div className='flex flex-col justify-center content-center flex-wrap w-[80%] m-[auto]'>
      <Host host='louisa'/> 
      {!removeButton && <div className='mt-[50px] pt-[50px]'>
        <FadeInWords text="Kahoot!" /> 
        <div className='mt-6 flex justify-center'>
        <button onClick={handleClick} className='animate-buttonFadeIn rounded-lg w-full border-2 bg-[#6DA477] text-white p-4 text-[40px] w-[80%]'>Start</button>
        </div>
      </div>}
      
      { startLoading && 
      <div className='mt-[50px] pt-[50px]'>
        <h1 className='text-[60px]'>5 questions.. are you ready?</h1>
        <LoadingBar duration={3} start={startLoading} onComplete={handleComplete} />
      </div>
      }
      { displayQuestion &&
        <Trivia />
      }
    </div>
  )
};
 