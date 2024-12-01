'use client';
import React, { useState, useEffect } from 'react';
import Host from '../components/Host';
import FadeInWords from '../components/FadeInWords';
import Choices from './Choices';

export default function TrueLie() {

  const options = [
    {
      'topic' : 'Mobile UI/UX Offers',
      'choices': ['Up to 18% payer rate', '3 months worth of development', 'POC created march of 2023'],
      'answer' : '3 months worth of development'
    },
    {
      'topic': 'MLP1',
      'choices': ['Introduced reusable components', 'Reduced development time from months to days', 'Converting cabot to pega'],
      'answer' : 'Converting cabot to pega'
    },
    {
      'topic' : 'random',
      'choices': ['TBH', 'TBH', 'LIE'],
      'answer' : 'LIE'
    },
  ];

  const [removeButton, setRemoveButton] = useState(false);
  const [nextOptions, setNextOption] = useState(options[0]);
  const [num, setNum] = useState(0)


  const handleClick = () =>  {
    setRemoveButton(true)
  };

  const nextQuestion = () => {
    if (num === 2) {
      //this will take us back to the spinner home page
      return;
    } else {
      setNum(num + 1)
      setNextOption(options[num + 1])
    }
    
  };

  return (
    <div className='flex justify-center flex-col h-2/4 w-[80%] m-[auto] mt-[30px]'>
    
      <Host host={'louisa'} />
      {removeButton ?
      <>
       <div className='animate-buttonFadeIn text-center text-[45px] m-[30px]'>2 Truths and 1 Lie... Which one’s the lie?</div>
       <Choices nextQuestion={nextQuestion} options={nextOptions} />
      </>
      :
      <>
        <FadeInWords text="2 Truths 1 Lie" />
        <button onClick={handleClick} className='animate-buttonFadeIn rounded-lg border-2 bg-[#6DA477] text-white p-4 text-[40px] w-[50%] ml-[auto] mr-[auto]'>Start</button>
      </>
      }

    </div>
  )
}
