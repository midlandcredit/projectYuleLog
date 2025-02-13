'use client';
import localFont from "next/font/local";
// import {Mulish } from next/font/google;
import "./globals.css";
import React, { createContext, useState } from "react";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// const mulish = Mulish({
//   weight: '400',
//   subsets: ['latin'],
// })

// export const metadata = {
//   title: "Yule Log",
//   description: "Generated by create next app",
// };

export const GameContext = createContext(null);



export default function RootLayout({ children }) {
  const [step, setStep] = useState(1);
  function nextStep() {
    setStep(step + 1);
  }
  return (

    <html lang="en">
      <body
        className={`h-screen antialiased bg-island bg-no-repeat bg-contain bg-bottom`}
      >
        <GameContext.Provider value={{step, nextStep}}>
        {children}
        </GameContext.Provider>
  
      </body>
    </html>
  );
}
