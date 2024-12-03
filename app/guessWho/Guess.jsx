'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Guess({questionList, nextQuestion}) {
  const names = [{
    'char' :'babypeach',
    'name' : 'Louisa'
    }, 
    {
    'char' :'bowser',
    'name' : 'Sami'
    }, 
    {
    'char' :'donkey',
    'name' : 'Jack'
    }, 
    {'char' :'mario',
    'name' : 'Jason'
  }];

  const [bgColor, setBgColor] = useState('bg-[#FFFFFF]');
  const [ansIndex, setAnsIndex] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [displayButton, setDisplayButton] = useState(false);


  const handleClick = (text, index) => {
    if (text === questionList.answer) {
      //if correct, set it to bright green
      setBgColor('bg-[#34d351]')
    } else {
      //set it to red if wrong
      setBgColor('bg-[#dc2626]')
     }
    //set the index to be match
    setAnsIndex(index);
    setDisplayButton(true);
    setOpacity(0.5);
  };

  const restart = () => {
    setOpacity(1);
    setDisplayButton(false);
    setBgColor('bg-[#FFFFFF]');
    nextQuestion();
    setAnsIndex(false)
  }
  

  return (
    <div>
    <div className='text-[60px] text-center mb-[50px]'>{questionList.fact}</div>
    <div className='animate-buttonFadeIn flex flex-row gap-[20px] m-[auto] font-bold'>
      {names.map((img, index) => (
        <button key={index} onClick={() => handleClick(img.name, index)} className={`animate-buttonFadeIn flex flex-col items-center justify-between h-[250px] w-[300px] border-2 rounded-[50%] text-white p-4 text-[40px] m-[auto] ${questionList.answer !== img.name ? opacity : 'opacity-[1]'} ${(ansIndex || ansIndex === 0) ? (img.name === questionList.answer ? 'bg-[#34d351]' : ansIndex === index ? bgColor : 'bg-[#FFFFFF]') : 'bg-[#FFFFFF]'} hover:bg-[#b9e0c0]`}>
          <Image 
          className='m-[auto]'
            src={'/' + img.char + '.png'}
            alt={img}
            width={100}
            height={150}
          />
          <span className='text-[#000000] text-[20px]'>{img.name}</span>
        </button>

      ))}
    </div>
    <div className={`${!displayButton ? 'invisible' : 'visible'} w-[20%] m-[auto] mt-[50px]`}>
        <button onClick={restart} className='rounded-lg w-full border-2 bg-[#6DA477] text-white p-4 text-[15px] w-[10%] font-bold'>Next</button>
    </div>
      
    </div>
  )
}
