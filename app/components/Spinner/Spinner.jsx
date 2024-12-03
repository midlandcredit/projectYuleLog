"use client"; // Enables client-side rendering in Next.js

import React from 'react';
import { useEffect, useState, useContext } from "react";
import { useRouter } from 'next/navigation'

import wheel from './spinner.js';
import myChart from './spinner.js';
import './Spinner.css';
import {GameContext} from '../../layout.jsx';


export default function Spinner() {
  const { step, nextStep } = useContext(GameContext);
  const router = useRouter();
  var str = "wheel" + step.toString();



  const myFunction = () => {
    console.log(step);
    var path = '/';
    switch (step) {
      case 1:
        path = '/truthAndLie';
        break;
      case 2:
        path = '/pega';
        break;
      case 3:
        path = '/kahoot';
        break;
      case 4:
        path = '/jack';
        break;
      case 5:
        path = '/guessWho';
        break;
      case 6:
        path = '/pie';
        break;
      case 7:
        path = '/spotIt';
        break;
      case 8:
        path = '/contentful';
        break;

    }
    console.log(path);
    router.push(path);
    nextStep();
  };
  
  useEffect(() => {
    // if (step == 1) {
      wheel(str);

    // }

    // return () => {
    //   if(myChart) {
    //     myChart.destroy();
    //   }
    // }
  }, [])


  useEffect(() => {
    // Expose the function to the global scope
    window.myFunction = myFunction;

    // Clean up the function when the component unmounts
    return () => {
      delete window.myFunction;
    };
  }, []);
 
    return (
        <div >
          <div className="container">
            <canvas id={str}></canvas>
            <button id="spin-btn">Spin</button>
            <img className="arrow" src="/cute_arrow.png" alt="spinner arrow" />
          </div>
        <div id="final-value">
          <p>Click On The Spin Button To Start</p>
        </div>
      </div>
    );
  }
