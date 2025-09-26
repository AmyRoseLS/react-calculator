// PAGE
import './globals.css'
import { useState } from 'react';

// COMPONENTS
import Screen from './Components/Screen.js';
import ButtonBox from './Components/ButtonBox.js';

// FUNCTIONS
import { doMath } from './doMath.js';


export default function Calculator() {

  const [screen, setScreen] = useState("");

  let newScreen = ""; //check with someone about how you're declaring and changing this variable
 
  function handleClick(label,buttonDoes) {
     switch (buttonDoes) {
      case 'back':
        newScreen = screen.substring(0,screen.length-1);
        setScreen(newScreen);
        break;
      case 'clear':
        setScreen("");
        break;
      case 'input':
        newScreen=screen+label;
        setScreen(newScreen);
        break;
      case 'equals':
        let answer = doMath(screen);
        setScreen(answer);
        break;
    }
  }
  return (
    <div>
      <Screen screen={screen}/>
      <ButtonBox handleClick={handleClick}/>
    </div>
  );
}

export { doMath };
