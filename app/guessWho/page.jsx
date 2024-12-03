'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Host from '../components/Host';
import FadeInWords from '../components/FadeInWords';
import Guess from './Guess';

export default function GuessWho() {
  const list = [
    {
      'fact': 'Who has almost drowned in a water park?',
      'answer' : 'Louisa'
    },
    {
      'fact': 'Who was in Junior Theater for 4 years',
      'answer' : 'Jason'
    },
    {
      'fact': 'Who didn\'t learn how to ride a bike until they were 20?',
      'answer' : 'Jack'
    },
    {
      'fact': 'Who has previously owned a pig and a bulldog?',
      'answer' : 'Sami'
    },
    {
      'fact': 'Who cannot blow up a balloon?',
      'answer' : 'Jason'
    },
    {
      'fact': "Who won first place at a piano recital?",
      'answer' : 'Louisa'
    },
    {
      'fact': "Who can eat an Oreo off their forehead without touching it?",
      'answer' : 'Jack'
    },
    {
      'fact': "Who's childhood dream job was to be a 2nd grade teacher?",
      'answer' : 'Sami'
    }
  ]
  const [question, setQuestion] = useState(list[0]);
  const [num, setNum] = useState(0);
  const [displayButton, setDisplayButton] = useState(true);

  const handleClick = () => {
    setDisplayButton(false)

  };

  const nextQuestion = () => {
    if (num === 7) {
      //this will go back to the spinner
      return;
    } else {
      setNum(num + 1);
      setQuestion(list[num + 1]);

    }

  };

  return (
    <div className='m-[auto] mt-[50px] w-[80%]'>
      <Host host='louisa' />
     {displayButton ? <> <FadeInWords text="Guess Who" />
      <div className='mt-6 flex justify-center m-[auto] w-[50%]'>
        <button onClick={handleClick} className='animate-buttonFadeIn rounded-lg w-full border-2 bg-[#6DA477] text-white p-4 text-[40px]'>Start</button>
      </div> </>  :
      <Guess questionList={question} nextQuestion={nextQuestion} />
      }

    </div>
  )
}
