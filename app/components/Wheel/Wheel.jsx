"use client";

import React, { useRef, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { GameContext } from "../../layout";
import styles from "./Wheel.module.css";

const wheelItems = [
  "🦄 Pega",
  "🤥 2 T & 1 L",
  "😃 Contentful",
  "👩‍💻 Spot It",
  "🥧 PIE",
  "❓ Guess Who",
  "🤖 Ads and AI",
  "🎉 Kahoot",
];

const routeMap = {
  1: "/truthAndLie",
  2: "/pega",
  3: "/kahoot",
  4: "/jack",
  5: "/guessWho",
  6: "/pie",
  7: "/spotIt",
  8: "/contentful",
};

const Wheel = () => {
  const { step, nextStep } = useContext(GameContext); // Consume step and nextStep from context
  const wheelRef = useRef(null);
  const router = useRouter();
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    const totalItems = wheelItems.length;
    const sliceAngle = 360 / totalItems;
    const offset = 240; // Align winning slice on the right side
    const targetAngle = (step - 1) * sliceAngle + sliceAngle / 2 - offset; // Adjusted target angle
    const spins = 5 * 360; // Total spins (10 full rotations)
    const finalRotation = spins + targetAngle;

    // Start the animation
    const animation = wheelRef.current.animate(
      [
        { transform: `rotate(0deg)` },
        { transform: `rotate(${finalRotation}deg)` },
      ],
      {
        duration: 10000, // 10 seconds
        easing: "cubic-bezier(0.440, -0.205, 0.000, 1.130)",
        fill: "forwards",
      }
    );

    animation.onfinish = () => {
      setIsSpinning(false);
    
      // Wait an additional 3 seconds before navigating
      setTimeout(() => {
        router.push(routeMap[step]);
        nextStep(); // Increment step after navigation
      }, 3000); // 3-second delay
    };
  };

  return (
    <fieldset className={styles.wheelOfFortune}>
      <ul ref={wheelRef}>
        {wheelItems.map((item, index) => (
          <li key={index} style={{ "--_idx": index + 1 }}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleSpin} disabled={isSpinning}>
        SPIN
      </button>
    </fieldset>
  );
};

export default Wheel;
