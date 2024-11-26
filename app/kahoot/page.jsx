'use client';
import React, { useState, useEffect } from 'react';
import Host from '../components/Host';
import FadeInWords from '../components/FadeInWords';

export default function Kahoot() {
  const [nextButton, setNextButton] = useState(false)
  return (
    <div className='flex flex-col justify-center content-center h-2/4 flex-wrap'>
      <Host host='sami'/> 
      <FadeInWords text="Let's Play Kahoot!" />
      <div className='mt-6'>
       <button className='animate-buttonFadeIn rounded-lg w-full border-2 bg-green-500 text-white p-4 text-[40px]'>Start</button>
      </div>
    </div>
  )
}
