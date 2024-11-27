'use client';
// components/LoadingBar.js
import { useEffect, useState } from 'react';

const LoadingBar = ({ start, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            onComplete();
            return 100;
          }
          return prev + 2;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [start, onComplete]);

  return (
    <div class="w-full bg-gray-300 rounded-md h-[40px]">
  <div class="bg-green-600 h-[40px] rounded-md transition-all" style={{width: `${progress}%`}}></div>
</div>
  );
};

export default LoadingBar;
