import React from 'react'
import Image from "next/image";

export default function Host({host}) {
  return (
    <div className=''>
      <Image
      src={'/' + host + '.png'}
      width={150}
      height={150}
      alt={host + ' as a Host'}
      className='absolute bottom-[9%] right-[77%] animate-hostFadeIn'
    />
    </div>
  )
}
