'use client';
// components/LoadingBar.js
import { useEffect, useState } from 'react';

const LoadingBar = ({ start, onComplete, duration = 5 }) => {
  const [progress, setProgress] = useState(0);

  const updateOnComplete = () => {
    onComplete();
  }

  useEffect(() => {
    if (start) {
      const intervalTime = (duration * 1000) / 100; // Convert duration to milliseconds and divide by 100
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [start, onComplete]);


  useEffect(() => {
    if (progress >= 100) {
      onComplete();
    }
  }, [progress, onComplete]);

  return (
    <div className="w-full bg-gray-300 rounded-lg h-[30px]">
  <div className="bg-[#6DA477] h-[30px] rounded-lg transition-all duration-100" style={{width: `${progress}%`}}></div>
</div>
  );
};

export default LoadingBar;
