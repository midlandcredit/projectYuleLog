'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function FadeInWords({text}) {
  const words = text.split(/[\s\u00A0]+/);
  const [visibleWords, setVisibleWords] = useState([]);
  const targetDivRef = useRef(null);
  let topCss = 120;

  // const handleCssScroll = () => {
  //   if (targetDivRef.current) {
  //     // console.log('not sure if i am targeting the div if i am scrolling: ', targetDivRef.current.style)
  //     targetDivRef.current.style.top = Math.max(topCss - 0.7*window.scrollY, 0) + "px";
  //   }
  // };

  // useEffect(() => {
  //   let timeoutIds = [];
  //   words.forEach((word, index) => {
  //     const timeoutId = setTimeout(() => {
  //       setVisibleWords((prev) => [...prev, word]);
  //     }, index * 300); // Adjust the delay as needed
  //     timeoutIds.push(timeoutId);
  //   });

  //   return () => {
  //     timeoutIds.forEach(clearTimeout);
  //   };
  // }, [words]);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleCssScroll);
  // }, []);


  return (
    <div ref={targetDivRef} className="relative flex justify-center flex-col items-center">
    <div className='text-[40px] animate-fadeIn'>Let's play...</div>
    <div>
      {words.map((word, index) => (
        <span 
        key={index}
        className="opacity-0 animate-fadeIn mr-[15px] text-[70px] text-[#FAA53B]"
        style={{ animationDelay: `${index * 0.5}s`, animationFillMode: 'forwards' }}
        >
          {word}
        </span>
      ))}
    </div>
    
    <div className="transition-opacity duration-300 ease-in-out">
      
    </div>
  </div>
  )
} 
 