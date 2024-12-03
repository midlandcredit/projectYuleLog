'use client';
import React, {useState, useEffect} from 'react';
import FadeInWords from "./components/FadeInWords";
import Spinner from "./components/Spinner/Spinner";
import Host from './components/Host';
import Wheel from "./components/Wheel/Wheel";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function Home() {
  var name = 'Project Yule Log';
  // const [title, setTitle] = useState(name.split(/[\s\u00A0]+/));
  const [dotLottie, setDotLottie] = useState(null);
  const [display, setDisplay] = useState(true);

  useEffect(() => {

    // This function will be called when the animation is completed.
    function onComplete() {
      console.log('Animation completed');
      setDisplay(false)
    }

    function onFrameChange({currentFrame}) {
      console.log('Current frame: ', currentFrame);
    }

    // Listen to events emitted by the DotLottie instance when it is available.
    if (dotLottie) {
      dotLottie.addEventListener('complete', onComplete);
      dotLottie.addEventListener('frame', onFrameChange);
    }

    return () => {
      // Remove event listeners when the component is unmounted.
      if (dotLottie) {
        dotLottie.removeEventListener('complete', onComplete);
        dotLottie.removeEventListener('frame', onFrameChange);
      }
    };
  }, [dotLottie]);


  const dotLottieRefCallback = (dotLottie) => {
    setDotLottie(dotLottie);
  };



  return (
      <div className="page">
       {display ?   
       <DotLottieReact
      src="/intro.lottie"
      loop={false}
      autoplay={true}
      dotLottieRefCallback={dotLottieRefCallback}
      />:
     <div className="center animate-buttonFadeIn">
        <Host host='jason' />
          <FadeInWords text='Project Yule Log' />
          <div className="text">
            (Yule understand logical engineering, let's officiate games)
          </div>
          <div className="spinner">
            {/* <Spinner /> */}
            <Wheel />
          </div>
        </div>}
      </div>

  );
}
