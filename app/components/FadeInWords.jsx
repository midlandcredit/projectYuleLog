'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function FadeInWords({text}) {
  const words = text
  const [visibleWords, setVisibleWords] = useState([]);
  const targetDivRef = useRef(null);
  let topCss = 120;

  const handleCssScroll = () => {
    if (targetDivRef.current) {
      // console.log('not sure if i am targeting the div if i am scrolling: ', targetDivRef.current.style)
      targetDivRef.current.style.top = Math.max(topCss - 0.7*window.scrollY, 0) + "px";
    }
  };

  useEffect(() => {
    let timeoutIds = [];
    words.forEach((word, index) => {
      const timeoutId = setTimeout(() => {
        setVisibleWords((prev) => [...prev, word]);
      }, index * 300); // Adjust the delay as needed
      timeoutIds.push(timeoutId);
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [words]);

  useEffect(() => {
    window.addEventListener('scroll', handleCssScroll);
  }, []);


  return (
    <div>
      
    </div>
  )
}
