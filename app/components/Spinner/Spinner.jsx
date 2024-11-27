"use client"; // Enables client-side rendering in Next.js

import React from 'react';
import { useEffect } from "react";

import wheel from './spinner.js';
import './Spinner.css';


export default function Spinner() {
  useEffect(() => {
    wheel();
  }, [])

 
    return (
      <div >
        <div className="container">
          <canvas id="wheel"></canvas>
          <button id="spin-btn">Spin</button>
          <img src="/cute_arrow.png" alt="spinner arrow" />
        </div>
      <div id="final-value">
        <p>Click On The Spin Button To Start</p>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.1.0/chartjs-plugin-datalabels.min.js"></script>
    </div>
    );
  }
