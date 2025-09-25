import Screen from './Components/Screen.js';
import ButtonBox from './Components/ButtonBox.js';
import './globals.css'
import { useState } from 'react';

export default function Calculator() {

  const [screenHistory, setScreenHistory] = useState("");

  let newScreenHistory = ""; //check with someone about how you're declaring and changing this variable
  let nums = [];
  let ops = [];
  let have = "";

  function updateScreen(label){
    newScreenHistory=screenHistory+label;
    setScreenHistory(newScreenHistory);
    return;
  }

  function doMath (screenHistory,label) {
    if(label=="=") {
      console.log(`yup, you hit the equals sign`)
      return;
    } else {
      // nextNumber = //compare screen history with nums+operator. store the bit of screen history that isn't already held in nums+operator
      nums.push(screenHistory); //.push screenHistory MINUS the bits that we already have - ie any previous numbers entered or operators clicked
      ops.push(label);
      console.log(`doMath got called, you now have nums ${nums} and ops ${ops}`);
    }
    return;
  }

  function handleClick(label,func) {
     switch (func) {
      case 'back':
        newScreenHistory = screenHistory.substring(0,screenHistory.length-1);
        setScreenHistory(newScreenHistory);
        break;
      case 'clear':
        setScreenHistory("");
        break;
      case 'input':
        updateScreen(label);
        break;
      case 'math':
        //DRY it out bitch
        doMath(screenHistory,label);
        updateScreen(label);
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

