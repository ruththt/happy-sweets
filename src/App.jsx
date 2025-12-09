import { useState } from 'react';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css';
function Calculator() {
const [value, setValue] = useState("");
const handleClick = (symbol) => {
    setValue(value + symbol);}

const Calculate = () => {
    try {
      setValue(eval(value));
    } catch {
      setValue("Error");
    }
  };

  const Reset = () => {
    setValue("");
  };


    
  return(
    <div>
      <h1>Mini Calculator</h1>
       <h2>{value}</h2>

      <button onClick={() =>Reset("C")}>C</button>
      <br/>
      <button onClick={() => handleClick("1")}>1</button>
      <button onClick={() => handleClick("2")}>2</button>
      <button onClick={() => handleClick("3")}>3</button>
      <button onClick={() => handleClick("/")}>/</button>
      <br/>
      <button onClick={() => handleClick("4")}>4</button>
      <button onClick={() => handleClick("5")}>5</button>
      <button onClick={() => handleClick("6")}>6</button>
      <button onClick={() => handleClick("*")}>*</button>
      <br/>
      <button onClick={() => handleClick("7")}>7</button>
      <button onClick={() => handleClick("8")}>8</button>
      <button onClick={() => handleClick("9")}>9</button>
      <button onClick={() => handleClick("-")}>-</button>
      <br/>
      <button onClick={() => handleClick(".")}>.</button>
      <button onClick={() => handleClick("0")}>0</button>
      <button onClick={() =>Calculate()}>=</button>
      <button onClick={() => handleClick("+")}>+</button>

    </div>
  )
  
  
}
  

export default Calculator;