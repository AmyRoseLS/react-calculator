import Screen from './Components/Screen.js';
import ButtonBox from './Components/ButtonBox.js';
import './globals.css'
import { useState } from 'react';

export default function Calculator() {

  const [screenHistory, setScreenHistory] = useState([""]);

  function handleClick(label) {
    const newScreenHistory = [...screenHistory,label]//have no idea whether this needs a const or a let at the beginning
    setScreenHistory(newScreenHistory);
  }


  return (
    <div>
      <Screen screenHistory={screenHistory}/>
      <ButtonBox handleClick={handleClick}/>
    </div>
  );
}

