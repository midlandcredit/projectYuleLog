'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Host from '../components/Host';
import FadeInWords from '../components/FadeInWords';
import { Barriecito } from 'next/font/google';
// import HtmlContent from './HtmlContent';

const barriecito = Barriecito({
  subsets: ['latin'],
  weight: '400', // Adjust the weight if needed
});

export default function Pega() {
  const [currentColumn, setCurrentColumn] = useState(-1);
  const router = useRouter();
  
  const showNextColumn = () => {
    const table = document.getElementById("dynamicTable");
    const rows = table.rows;
    if (currentColumn === 3) {
      //return back to the spinner
      console.log('going back')
      router.push('/');
      return;
    };
    if (currentColumn < rows[0].cells.length - 1) {
      
      for (let i = 0; i < rows.length; i++) {
        setTimeout(() => {
          const cell = rows[i].cells[currentColumn + 1];
          if (cell) {
            cell.classList.add("visible");
            setTimeout(() => {
              cell.classList.add("shift");
            }, 1000);
          }
        }, i * 1000);
      }

      setCurrentColumn(currentColumn + 1);
    }
  };

  return (
    <div className='pega'>
     <Host host='jason' />
     <FadeInWords text="PEGA" topic="topic" />
      <table  className={barriecito.className}  id="dynamicTable" onClick={showNextColumn}>
        <thead>
          <tr style={{ fontWeight: 'bold' }}>
            <td className="cell">MLP1</td>
            <td className="cell">MLP2</td>
            <td className="cell">MLP3</td>
            <td className="cell">MLP4</td>
          </tr>
        </thead>
        <tbody>
          <tr className='tableRow' style={{ textDecoration: 'underline' }}>
            <td className="cell">Email</td>
            <td className="cell">SSC Web Embed</td>
            <td className="cell">Chat</td>
            <td className="cell">Quadient</td>
          </tr>
          <tr className='tableRow'>
            <td className="cell">Jack</td>
            <td className="cell">Louisa</td>
            <td className="cell">Jason</td>
            <td className="cell">Jason</td>
          </tr>
          <tr className='tableRow'>
            <td className="cell">Louisa</td>
            <td className="cell">Jason</td>
            <td className="cell"></td>
            <td className="cell">Louisa</td>
          </tr>
          <tr className='tableRow'>
            <td className="cell">Jason</td>
            <td className="cell"></td>
            <td className="cell"></td>
            <td className="cell">Sami</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
