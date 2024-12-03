'use client';
import { useEffect } from 'react';

const ImageContainer = () => {
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

  return <div id="image-container" style={{ position: 'relative', width: '1000px', height: '800px' }}></div>;
};

export default ImageContainer;