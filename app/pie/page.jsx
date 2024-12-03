'use client';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import './pie.css';
import FadeInWords from '../components/FadeInWords';

export default function Pie() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  function nextStep() {
    if (step == 3) {
      router.push('/');
    } else {
      setStep(step + 1);
    }
  }

  function back() {
    if (step != 1) {
      setStep(step - 1);
    }
  }

  return (
    <div className="">
      <FadeInWords  text='Project PIE' />
      <p className='text-center'>Payment Interface Enhancement</p>

      {
        step == 1 && 
        <div className="images">
          <img className="" src="/pies.png" alt="" />
        </div>
      }
      {
        step == 2 && 
        <div className="images">
          <img className="" src="/pie2.png" alt="" />
        </div>
      }
      {
        step == 3 && 
        <div className="images">
          <img className="" src="/pie1.png" alt="" />
        </div>
      }

      <div className="navButtons">
        <button onClick={back}><img src="/backArrow.png" alt="" /></button>
        <button onClick={nextStep}><img src="/nextArrow.png" alt="" /></button>
      </div>
      
    </div>
    
  )
}
