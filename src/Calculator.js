import Screen from './Components/Screen.js';
import ButtonBox from './Components/ButtonBox.js';
import './globals.css'
import { useState } from 'react';

export default function Calculator() {

  const [onScreen, setOnScreen] = useState("");

  return (
    <div>
      <Screen onScreen={onScreen}/>
      <ButtonBox setOnScreen={setOnScreen}/>
    </div>
  );
}

