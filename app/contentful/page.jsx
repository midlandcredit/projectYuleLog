'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Host from '../components/Host';
import FadeInWords from '../components/FadeInWords';
// import ImageContainer from './ImageContainer';

export default function Offers() {
  const [display, setDisplay] = useState(false);
  const router = useRouter();
  //show comparison wordpress desktop and mobile with contentful desktop mobile (side by side)
  //why are we doing it 
  /**
   contentful reson is we want to rid ourselves of non entperise software and as we know wordpress a free product that 
   is used my bloggers, small ecom shops, other variety of websites. not suited for a corpration. 100-millsion worth of debt
   so we created a proof of concepts using industry standards for corprate enterprise level websites that offer functionality
   personalization, a/b testing, and developer friendly tools.
   */
  const onHandle = () => {
    if (display) {
      router.push('/');
      return;
    }
    setDisplay(true);
  };
  useEffect(() => {
    const imageContainer = document.getElementById('image-container');
    const imagePaths = [
      '/contentful/home0.png', '/contentful/home1.png', '/contentful/home2.png',
      '/contentful/home3.png', '/contentful/home4.png', '/contentful/home5.png',
      '/contentful/faq0.png', '/contentful/faq1.png', '/contentful/faq2.png',
      '/contentful/faq3.png', '/contentful/faq4.png', '/contentful/faq5.png',
      '/contentful/about0.png', '/contentful/about1.png', '/contentful/about2.png',
      '/contentful/about3.png', '/contentful/about4.png', '/contentful/about5.png'
    ];

    const maxWidth = 500;
    const maxHeight = 500;
    const containerWidth = 1000;
    const containerHeight = 800;
    const previousPositions = [];

    const isNearPreviousPositions = (left, top, width, height) => {
      const threshold = 100;
      return previousPositions.some(pos => {
        return Math.abs(pos.left - left) < threshold && Math.abs(pos.top - top) < threshold;
      });
    };

    imagePaths.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.classList.add('image', 'contentfulImage');
      img.onload = () => {
        let width = img.naturalWidth;
        let height = img.naturalHeight;

        if (width > maxWidth || height > maxHeight) {
          const scale = Math.min(maxWidth / width, maxHeight / height);
          width *= scale;
          height *= scale;
        }

        let left, top;
        do {
          left = Math.random() * (containerWidth - width);
          top = Math.random() * (containerHeight - height);
        } while (isNearPreviousPositions(left, top, width, height));

        previousPositions.push({ left, top });
        if (previousPositions.length > 2) previousPositions.shift();

        img.style.width = `${width}px`;
        img.style.height = `${height}px`;
        img.style.left = `${left}px`;
        img.style.top = `${top}px`;
        img.style.position = 'absolute';
        img.style.opacity = 0;
        imageContainer.appendChild(img);

        setTimeout(() => {
          img.style.opacity = 1;
        }, index * 1500);
      };
    });
  }, []);

  return (
    <div>
      {/* <Host host="louisa"  /> */}
      <span onClick={onHandle}>
      <FadeInWords text="Contentful" topic="topic" />
      </span>
      <div className='flex flex-row m-[auto] gap-[30px] justify-around animate-buttonFadeIn'>
        <div className='flex gap-[40px]'>
        <iframe  src="https://dev.atlanticcreditfinance.com/poc/" frameborder="0" allowFullScreen  height="700" width="375"  />
        <iframe  src="https://dev.atlanticcreditfinance.com/" frameborder="0" allowFullScreen  height="700" width="375" />
      </div>
        <div id="image-container" className={`${display ? 'visible' : 'invisible'}`} style={{ position: 'relative', width: '1000px', height: '800px' }}></div>
      </div>
      
    </div>
  )
}
