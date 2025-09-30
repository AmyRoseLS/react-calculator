function doMath(screen) {

    let calc; //eeeee check with someone about how you're declaring this! It will be a match object in a few lines time.

    // tokenise & label screen string 
    // that means: break string into an array that looks like, e.g. [ 12, {operator:1}, 34 ]
    calc=screen.match(/\d+.\d+|\d+|[+\-÷x]/g).map(token => {
      if(/\d+.\d+|\d+/.test(token)){
        return Number(token);
      } else {
        // storing the operator as its place in the precedence order BIDMAS
        switch(token) {
          case "÷":
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
    while (calc.length>1) { //first while
      console.log('in first while loop');
      while (precedence <= numOfBasicOps){ //second while
        console.log('in second while loop');
        index = calc.findIndex( i=> i.op == precedence)
        while (index>-1) { //third while
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
        } //end third while
      precedence += 1;
      }  //end second while
    } //end first while

    result = calc[0].toString();

    return result;
}

export { doMath };