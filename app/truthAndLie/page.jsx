'use client';
import React, { useState, useEffect } from 'react';
import Host from '../components/Host';
import FadeInWords from '../components/FadeInWords';
import Choices from './Choices';

export default function TrueLie() {
  const [displayChoices, setDisplayChoices] = useState(false)

  return (
    <div className='flex justify-center flex-col h-2/4 flex-wrap w-[80%] m-[auto]'>
    <FadeInWords text="2 Truths 1 Lie" />
      <Host host={'louisa'} />
      <div className='animate-buttonFadeIn'>2 Truths and 1 Lie... Which one’s the lie?</div>
    </div>
  )
}
