import Screen from './Components/Screen.js';
import ButtonBox from './Components/ButtonBox.js';
import './globals.css'
import { useState } from 'react';

export default function Calculator() {

  const [screen, setScreen] = useState("");

  let newScreen = ""; //check with someone about how you're declaring and changing this variable
  let calc; //eeeee check with someone about how you're declaring this! It will be a match object later.


  function doMath (screen) {
    // tokenise & label screen string 
    // that means: break string into an array that looks like, e.g. [ 12, {operator:1}, 34 ]
    calc=screen.match(/\d+|[+\-*/]/g).map(token => {
      if(/^\d+$/.test(token)){
        return Number(token);
      } else {
        // storing the operator as its place in the precedence order BIDMAS
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

   // do the math!
   let precedence = 1;

   const basicOps = {
     // links precedence number to the operation
      "1": (a,b) => a/b,
      "2": (a,b) => a*b,
      "3": (a,b) => a+b,
      "4": (a,b) => a-b
    };

    const numOfBasicOps = Object.keys(basicOps).length; // equivalent to the number of operators the calculator can currently handle
   
    let index;
    let result;

    // loop through the calc array doing the math in precedence order
    while (calc.length>1) {
      console.log('in first while loop');
      while (precedence <= numOfBasicOps){ //change 4 to basicOps.length
        console.log('in second while loop');
        index = calc.findIndex( i=> i.op == precedence)
        while (index>-1) {
          console.log('in third while loop');
          result = basicOps[precedence.toString()](calc[index-1], calc[index+1])
          
          // replace inner calculation with the result in calc
          calc = [...calc.slice(0,index-1),
            result,
            ...calc.slice(index+2)
          ];

          //check for another inner calculation with the current precedence
          index = calc.findIndex( i => i.op == precedence)

          console.log(calc);
        }
      precedence += 1;
      }  
    }
    return calc[0].toString();
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

