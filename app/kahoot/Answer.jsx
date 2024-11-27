'use client';
import React, { useState, useEffect } from 'react';

//here we will give them 30 seconds and display 4 options for them to choose from
//once they click on button timer will stop AND will check if it is the right answer
    //if wrong, display wrong and show the right answer
    //if correct, display they got it right
//display next button then that will call a function that will show the next question
export default function Answer({question, answer, nextQuestion}) {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft === 0) return;
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000)

    return () => clearInterval(timerId);

  }, [timeLeft])


  return (
    <div>
    <div>{answer}</div>
      {timeLeft}
    </div>
  )
}
