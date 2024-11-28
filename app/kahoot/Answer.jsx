'use client';
import React, { useState, useEffect } from 'react';

//here we will give them 30 seconds and display 4 options for them to choose from
//once they click on button timer will stop AND will check if it is the right answer
    //if wrong, display wrong and show the right answer
    //if correct, display they got it right
//display next button then that will call a function that will show the next question
export default function Answer({question, answer, nextQuestion, correct}) {
  const [timeLeft, setTimeLeft] = useState(10);
  const [displayButton, setDisplayButton] = useState(false);
  const [opacity, setOpacity] = useState(1)

  const showButton = () => {
    setDisplayButton(true)
    setOpacity(0.5)
  }

  useEffect(() => {
    if (timeLeft === 0) {
      showButton();
      return;
    } 
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000)

    return () => clearInterval(timerId);

  }, [timeLeft])


  return (
   <div className='animate-buttonFadeIn mt-[50px] pt-[50px]'>
      <div className='text-[60px] mt-[50px]'>{question}</div>
      <div className='flex justify-between flex-row-reverse items-center'>
        <div className='w-full'>
          <div className='h-[200px] text-[30px] w-[50%] m-[30px] ml-[auto] mr-[auto]'>DISPLAY PIC HERE</div>
          <div className='grid grid-rows-2 grid-cols-2 gap-[20px] w-[70%] m-[auto] font-bold'>
            {answer.map((ans, index) => (
            <button  style={{ opacity: ans !== correct ? opacity : 1 }} className={`rounded-lg w-full border-2 bg-[#6DA477] text-white p-4 text-[20px]`} onClick={showButton} key={index}>
              {ans}
            </button>
            ))}
          </div>
        </div>
        <div className='text-[60px]'>{timeLeft} </div>
      </div>

      <div style={{visibility : !displayButton ? 'hidden' : 'visible'}} className='w-[20%] m-[auto] mt-[50px]'>
        <button onClick={nextQuestion} className='rounded-lg w-full border-2 bg-[#6DA477] text-white p-4 text-[15px] w-[10%] font-bold'>Next</button>
      </div>
    </div>
  )
}
