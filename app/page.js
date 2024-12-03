'use client';
import React, {useState} from 'react';
import FadeInWords from "./components/FadeInWords";
import Spinner from "./components/Spinner/Spinner";
import Host from './components/Host';


export default function Home() {
  var name = 'Project Yule Log';
  // const [title, setTitle] = useState(name.split(/[\s\u00A0]+/))
  return (
      <div className="page">
        <Host host='jason' />

        <div className="center">
          <FadeInWords text='Project Yule Log' />
          <div className="text">
            (Yule understand logical engineering, let's officiate games)
          </div>
          <div className="spinner">
            <Spinner />
          </div>

        </div>
      </div>

  );
}
