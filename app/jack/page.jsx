'use client';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import './jack.css';
import FadeInWords from '../components/FadeInWords';
import Host from '../components/Host';


export default function Jack() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  function nextStep() {
    if (step == 2) {
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
    <div className="pie">
      <FadeInWords  text='Jack and his ads :)' />
      <Host host='jack' />

      {
        step == 1 && 
        <div className="images">
          <img className="" src="/jack1.png" alt="" />
        </div>
      }
      {
        step == 2 && 
        <div className="images">
          <img className="" src="/jack2.png" alt="" />
        </div>
      }

      <div className="navButtons">
        <button onClick={back}><img src="/backArrow.png" alt="" /></button>
        <button onClick={nextStep}><img src="/nextArrow.png" alt="" /></button>
      </div>
      
    </div>
    
  )
}
