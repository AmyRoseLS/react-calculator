import Screen from './Components/Screen.js';
import ButtonBox from './Components/ButtonBox.js';
import './globals.css'
import { useState } from 'react';

export default function Calculator() {

  const [screenHistory, setScreenHistory] = useState("");

  function doMath (screenHistory,label) {
    console.log(`doMath got called, the preceding number was ${screenHistory} and the operator was ${label}`);
    return;
  }

  function handleClick(label,func) {

    let newScreenHistory = ""; //check with someone about how you're declaring and changing this variable

     switch (func) {
      case 'clear':
        newScreenHistory = screenHistory.substring(0,screenHistory.length-1);
        setScreenHistory(newScreenHistory);
        break;

      case 'input':
        newScreenHistory = screenHistory+label;
        setScreenHistory(newScreenHistory);
        break;

      case 'math':
        //DRY it out bitch
        newScreenHistory = screenHistory+label;
        doMath(screenHistory,label);
        setScreenHistory(newScreenHistory);
        break;
    }
  
  }


  return (
    <div>
      <Screen screenHistory={screenHistory}/>
      <ButtonBox handleClick={handleClick}/>
    </div>
  );
}

