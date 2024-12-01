'use client';
import React, { useState } from 'react';

export default function Choices({options, nextQuestion}) {
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [displayButton, setDisplayButton] = useState(false);
  const [ansIndex, setAnsIndex] = useState(false);
  const [opacity, setOpacity] = useState(1);



const handleClick = (text, index) => {
  if (text === options.answer) {
    setBgColor('#34d351')
  } else {
    //if wrong, change to red
    setBgColor('#dc2626')
  }
  setAnsIndex(index);
  setOpacity(0.5);
  setDisplayButton(true);
};

const restart = () => {
  setOpacity(1);
  setDisplayButton(false);
  setBgColor('#FFFFFF')
  nextQuestion();
}

  return (
    <div>
    <div className='flex justify-around mt-[50px]'>
      {options.choices.map((sentence, index) => (
        <button onClick={() => handleClick(sentence, index)}  style={{ opacity: sentence !== options.answer ? opacity : 1, backgroundColor: (ansIndex || ansIndex === 0) ? (ansIndex === index ? bgColor : '#FFFFFF') : '#FFFFFF'}}  className='m-[20px] p-[40px] w-[361px] h-[191px] text-black text-[30px] rounded-[15px] text-center flex items-center justify-center' key={index}>
           <span className='animate-buttonFadeIn'>{sentence}</span> 
        </button>
      ))}

    </div>
      <div style={{visibility : !displayButton ? 'hidden' : 'visible'}} className='w-[20%] m-[auto] mt-[50px]'>
        <button onClick={restart} className='rounded-lg w-full border-2 bg-[#6DA477] text-white p-4 text-[15px] w-[10%] font-bold'>Next</button>
      </div>
    </div>
    
  )
}
