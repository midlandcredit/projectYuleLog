'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Answer from './Answer';
import LoadingBar from './LoadingBar';

export default function Trivia() {
  const router = useRouter();
  //create an array of quetsions
  const triviaQAndA = [
    {'question': 'What does PIE stand for?',
     'answer' : ['Payment Integration Enrichment', 'Payment Interaction Expansion', 'Payment Interface Enhancement', 'Payment Is Everything'], //Payment Interface Enhancement
     'correct' : 'Payment Interface Enhancement',
     'image' : '/pie.svg'
    },
    {'question': 'What was the hardest part about mobile offers account summary update?',
     'answer' : ['Multi-phase releases', 'Responsive design', 'Blackberry support', 'Pega Web Embed'],
     'correct' : 'Multi-phase releases',
     'image' : ['/offers-bau.gif' ,'/offers-new.gif']
    },
    {'question': 'How many new tools have we all learned to use since working at MCM?',
     'answer' : [33,27, 16, 12], //27
     'correct' : 27,
     'image': '/newskills.lottie'
    },
    {'question': 'How many possible combinations were there in project bread when it first launched',
     'answer' : ['22,000', '30,000', '47,000', '6,000'],
     'correct' : '22,000',
     'image': '/bread.svg'
    },
    {'question': 'What is not a project name?',
     'answer' : ['Peaches', 'Margarine', 'Pizza', 'Jam'],
     'correct' : 'Pizza',
     'image' : ['/bread.svg', '/pie.svg', '/pizza.svg']
    },
    // {'question': 'Who built this Kahoot game?',
    //  'answer' : ['Jason', 'Louisa', 'Sami', 'Jack'],
    //  'correct' : 'Louisa'
    // },
    // {'question': 'How long did it take to build this game?',
    //  'answer' : ['Less than a week', '2 weeks', '1 month', '2 months'],
    //  'correct' : 'Less than a week'
    // }, 
    
  ];

  const [num, setNum] = useState(0);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [QAndA, setQAndA] = useState(triviaQAndA[0]);
  const [startLoading, setStartLoading] = useState(true);
  

  //create a function that will display the list of answers
  const nextQuestion = () => {
    if (num === 4) {
      //this will take us back to the spinner
      router.push('/');
      return;
    }
    setNum(num + 1);
    setQAndA(triviaQAndA[num + 1])
    setStartLoading(true);
    setDisplayAnswer(false);
  };

  const handleComplete = () => {
    setStartLoading(false);
    setDisplayAnswer(true)
  };


  //display how many quetsions left with num,
  //loading bar
  //question 

  //displaying quetsion 
  //displaying answers 
  //timer 
  //when timer goes off or when you click on the answer the timer will go off and check if your answer is right
  return (
    <div className='w-full flex flex-col text-center mt-[0px] pt-[50px]'>
      {!displayAnswer &&
    <>
      <div className='text-[50px]'>Question {num + 1} of 5</div>
      <LoadingBar duration={3} start={startLoading} onComplete={handleComplete} />
      <div className='text-[50px]'>{QAndA.question}</div>
    </>}
    
      {displayAnswer && <Answer question={QAndA.question} answer={QAndA.answer} correct={QAndA.correct} image={QAndA.image} nextQuestion={nextQuestion} />} 
    </div>
  )
}
