'use client';
import React, { useState } from 'react'
import Answer from './Answer';
import LoadingBar from './LoadingBar';

export default function Trivia() {
  //create an array of quetsions
  const triviaQAndA = [
    {'question': 'What does PIE stand for?',
     'answer' : ['Payment Interface Enhancement', 'Payment Integration Improvement', 'Payment Infrastructure Innovation', 'Payment Interaction Improvement']
    },
    {'question': 'What was the hardest part about mobile offers account summary update?',
     'answer' : 'Multi-phase releases'
    },
    {'question': 'How many new tools have we all learned to use since working at MCM?',
     'answer' : ['27', '30', '10', '100']
    },
    {'question': 'How many possible combinations were there in project bread when it first launched',
     'answer' : ['22,000', '30,000', '22', '30']
    },
    {'question': 'QUESTION HERE',
     'answer' : 'ANSWER HERE'
    },
  ];

  const [num, setNum] = useState(0);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [QAndA, setQAndA] = useState(triviaQAndA[0]);
  const [startLoading, setStartLoading] = useState(true);
  

  //create a function that will display the list of answers
  const nextQuestion = () => {
    setNum(num + 1)
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
    <div className='w-full flex flex-col text-center'>
      {!displayAnswer &&
    <>
      <div className='text-[50px]'>Question {num + 1} of 5</div>
      <LoadingBar duration={3} start={startLoading} onComplete={handleComplete} />
      <div className='text-[50px]'>{QAndA.question}</div>
    </>}
    
      {displayAnswer && <Answer question={QAndA.question} answer={QAndA.answer} nextQuestion={nextQuestion} />} 
    </div>
  )
}
