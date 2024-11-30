'use client';
import React from 'react'
import Host from '../components/Host';
import FadeInWords from '../components/FadeInWords';

export default function TrueLie() {
  return (
    <div className='flex justify-center flex-col h-2/4 flex-wrap w-[80%] m-[auto]'>
    <FadeInWords text="2 Truths 1 Lie" />
      <Host host={'louisa'} />
      
      <div className='animate-buttonFadeIn'>2 Truths and 1 Lie... Which one’s the lie?</div>
    </div>
  )
}
