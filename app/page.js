'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import FadeInWords from "./components/FadeInWords";
import Spinner from "./components/Spinner/Spinner";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home() {
  var name = 'Project Yule Log';
  // name = name
  const [title, setTitle] = useState(name.split(/[\s\u00A0]+/));
  const [dotLottie, setDotLottie] = useState(null);
  const [displaySpinner, setDisplaySpinner] = useState(false)

  useEffect(() => {
    
  
      // This function will be called when the animation is completed.
      function onComplete() {
        console.log('Animation completed');
        setDisplaySpinner(true)
      }
  
      // Listen to events emitted by the DotLottie instance when it is available.
      if (dotLottie) {
        dotLottie.addEventListener('complete', onComplete);
      }
  
      return () => {
        // Remove event listeners when the component is unmounted.
        if (dotLottie) {
          dotLottie.removeEventListener('complete', onComplete);
        }
      };

  }, [dotLottie]);

  const dotLottieRefCallback = (dotLottie) => {
    setDotLottie(dotLottie);
  };

//flex flex-col gap-8 row-start-2 items-center sm:items-start
  return (
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="">
        <div>
          {displaySpinner && <div className='absolute transform translate-x-177p translate-y-90p'><Spinner /></div> }
          {/* <FadeInWords text='Project Yule Log' /> */}
          <DotLottieReact src={'/intro.lottie'} loop={false} autoplay={true} dotLottieRefCallback={dotLottieRefCallback} />
          <div className="">
            (Yule understand logical engineering, let's officiate games)
          </div>
        </div>
        </main>
      </div>
  );
}
