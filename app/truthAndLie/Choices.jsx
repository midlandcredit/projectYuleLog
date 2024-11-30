'use client';
import React from 'react';

export default function Choices({options}) {
  return (
    <div className='flex flex row'>
      {options.map((sentence, index) => {
        <div key={index}>
            {sentence}
        </div>
      })}
    </div>
  )
}
