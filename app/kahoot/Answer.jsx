'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

//here we will give them 30 seconds and display 4 options for them to choose from
//once they click on button timer will stop AND will check if it is the right answer
    //if wrong, display wrong and show the right answer
    //if correct, display they got it right
//display next button then that will call a function that will show the next question
export default function Answer({question, answer, nextQuestion, correct, image}) {
  const [timeLeft, setTimeLeft] = useState(10);
  const [displayButton, setDisplayButton] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [ansIndex, setAnsIndex] = useState(false);
  const [bgColor, setBgColor] = useState('#6DA477')

  const showButton = (text, index) => {
    setDisplayButton(true)
  };

  const handleClick = (text, index) => {
    if (text === correct) {
      //if correct, set it to bright green
      setBgColor('#34d351')
    } else {
      //set it to red if wrong
      setBgColor('#dc2626')
     }
    //set the index to be match
    setAnsIndex(index)
    setDisplayButton(true)
    setOpacity(0.5)
    setTimeLeft(0)
  };

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
   <div className='animate-buttonFadeIn'>
      <div className='text-[60px]'>{question}</div>
      <div className='flex justify-between flex-row-reverse items-center'>
        <div className='w-full'>
        {correct === 27 ? 
       <div className='bg-[#896749] rounded-[20px] m-[auto] p-[20px] mb-[20px] w-[50%]'><DotLottieReact src={image} loop={true} autoplay={true} /> </div> 
       : 
         <div className="flex flex-row">
          {(correct === 'Pizza' || correct === 'Multi-phase releases') ? image.map((img, index) => (
            <Image 
            key={index}
            className={`m-[auto] mt-[40px] mb-[20px] ${(img === '/offers-new.gif' || img === '/offers-bau.gif') ? null : 'pie'}`}
              src={img}
              alt={img}
              width={150}
              height={150}
            />
          )) : <Image 
            className={`m-[auto] mt-[40px] mb-[20px] ${(image.img === '/offers-new.gif' || image.img === '/offers-bau.gif') ? null : 'pie'}`}
              src={image}
              alt={image}
              width={200}
              height={150}/>}
            </div>}
          
          <div className='grid grid-rows-2 grid-cols-2 gap-[20px] w-[70%] m-[auto] font-bold'>
            {answer.map((ans, index) => (
                <button  
                  style={{ opacity: ans !== correct ? opacity : 1, backgroundColor: (ansIndex || ansIndex === 0) ? (ans === correct ? '#34d351' : ansIndex === index ? bgColor : '#6DA477') : '#6DA477'}} 
                  className={`rounded-lg w-full border-2 text-white p-4 text-[20px]`} onClick={() => handleClick(ans, index)} key={index}>
                    {ans}
                </button>
            ))}
          </div>
        </div>
        <div className='text-[60px]'>{timeLeft} </div>
      </div>

      <div style={{visibility : !displayButton ? 'hidden' : 'visible'}} className='w-[20%] m-[auto] mt-[50px]'>
        <button onClick={nextQuestion} className='rounded-lg w-full border-2 bg-[#6DA477] text-white p-4 text-[15px] w-[10%] font-bold'>{correct === 'Pizza' ? 'Finish' : 'Next' }</button>
      </div>
    </div>
  )
}
