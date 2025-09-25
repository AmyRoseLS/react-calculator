import Screen from './Components/Screen.js';
import ButtonBox from './Components/ButtonBox.js';
import './globals.css'
import { useState } from 'react';

export default function Calculator() {

  const [screen, setScreen] = useState("");

  let newScreen = ""; //check with someone about how you're declaring and changing this variable
  let calc; //eeeee check with someone about how you're declaring this! It will be a match object later.


  function doMath (screen,label) {
    console.log(`doMath got called`);

    // tokenise & label screen string 
    // that means: break string into an array that looks like [ {number:12}, {operator:+}, {number:34} ]
    calc=screen.match(/\d+|[+\-*/]/g).map(token => {
      if(/^\d+$/.test(token)){
        return {num:Number(token)};
      } else {
        // storing the operator as their place in the precedence order BIDMAS
        switch(token) {
          case "/":
            return {op:1};
          case "x":
            return {op:2};
          case "+":
            return {op:3};
          case "-":
            return {op:4};
        }
      };
    })
    console.log(`calc looks like`);
    console.log(calc);

    return "uwu";
  }

  function handleClick(label,func) {
     switch (func) {
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
        let answer = doMath(screen,label);
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

