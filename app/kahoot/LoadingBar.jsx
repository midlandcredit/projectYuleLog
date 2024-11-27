'use client';
// components/LoadingBar.js
import { useEffect, useState } from 'react';

const LoadingBar = ({ start, onComplete }) => {
  const [progress, setProgress] = useState(0);

  const updateOnComplete = () => {
    onComplete();
  }

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [start, onComplete]);


  useEffect(() => {
    if (progress >= 100) {
      onComplete();
    }
  }, [progress, onComplete]);

  return (
    <div className="w-full bg-gray-300 rounded-lg h-[40px]">
  <div className="bg-green-600 h-[40px] rounded-lg transition-all" style={{width: `${progress}%`}}></div>
</div>
  );
};

export default LoadingBar;
