'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import FadeInWords from "./components/FadeInWords";
import Spinner from "./components/Spinner/Spinner";

export default function Home() {
  var name = 'Project Yule Log';
  name = name.split(/[\s\u00A0]+/)
  const [title, setTitle] = useState(name)
  return (
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <FadeInWords text='Project Yule Log' />
          <div className="">
            (Yule understand logical engineering, let's officiate games)
          </div>
        </div>
        <Spinner />
        </main>
      </div>
  );
}
