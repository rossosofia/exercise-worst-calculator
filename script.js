"use strict"
console.log('hello world');

// ---------- SETTING UP ----------



// ---------- CALCULATE ------------
// 1 - Read first and second number
// Add event listener 'input" to input tags. The input event fires when the value of an <input>, <select>, or <textarea> element has been changed. Call the function updateValue to read the new one. When reading the number (use both .target and .value). The target property returns the element where the event occured. 
function getInputValue(){
    document.querySelector("input#firstnumber").addEventListener('input', updateValue);
    document.querySelector("input#secondnumber").addEventListener('input', updateValue);
    // document.querySelector('button#calculate').addEventListener('click', addNumbers);
    document.querySelector('button#calculate').addEventListener('click', makeOperation);
}

function updateValue(x) {
    console.log(x.target.value);
    }

// the variables are LOCAL (inside the function) and not global. Then is just copy paste of new values.
// function addNumbers(){
//     const firstNumber = document.querySelector('input#firstnumber').value;
//     const secondNumber = document.querySelector('input#secondnumber').value;
//     document.querySelector("input#firstnumber").value =  Number(firstNumber) + Number(secondNumber);
//     document.querySelector('input#secondnumber').value = "";
//     // querySelector('').value not getElementById
// }

function addNumbers(){
        const firstNumber = document.querySelector('input#firstnumber').value;
        const secondNumber = document.querySelector('input#secondnumber').value;
        document.querySelector("input#firstnumber").value =  Number(firstNumber) + Number(secondNumber);
        document.querySelector('input#secondnumber').value = "";
        // querySelector('').value not getElementById
    }

getInputValue();

// read operator from a drop down
const chosenOperator = document.getElementById("operator");
const value = chosenOperator.value;
console.log(value);








//  check if the result should be rounded
// if yes, round up

// write results into first number field
// append result to end of list
// scroll list to the bottom



// clear list of results
