import React, { useState } from 'react';
import '../styles/Calculator.css';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [outputStr, setOutPutString] = useState('0');
  const [nextString, SetNextString] = useState(false);
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const dropValue = (e) => {
    const X = e.target.value.toString();

    if (X === '-' || X === '+' || X === '÷' || X === 'x' || X === '%') {
      SetNextString(!nextString);
      setOperation(X);
    } else if ((X.match(/^[0-9]+$/) !== null && nextString === false) || X === '.') {
      if (total === null) {
        setTotal(X);
        setOutPutString(X);
      } else {
        setTotal(`${total}${e.target.value}`);
        setOutPutString(total + X);
      }
    } else if ((X.match(/^[0-9]+$/) !== null && nextString === true) || X === '.') {
      if (next === null) {
        setNext(X);
        setOutPutString(X);
      } else {
        setNext(`${next}${e.target.value}`);
        setOutPutString(next + X);
      }
    } else if (X === 'AC') {
      setOutPutString('0');
      setTotal(null);
      setNext(null);
      setOperation(null);
      SetNextString(false);
    } else if (X === '+/-') {
      if (next !== null) {
        setNext(`${-1 * parseInt(next, 10)}`);
        setOutPutString(`${-1 * parseInt(outputStr, 10)}`);
      } else {
        setTotal(`${-1 * parseInt(total, 10)}`);
        setOutPutString(`${-1 * parseInt(outputStr, 10)}`);
      }
    }

    const obj = {
      total,
      next,
      operation,
    };

    if (calculate(obj, X).total && X === '=') {
      setOutPutString(calculate(obj, X).total);
      setNext(null);
      setTotal(calculate(obj, X).total);
      SetNextString(false);
      console.log('con', 'B');
    }
  };

  return (
    <div className="mainCalculator">
      <div className="calculator">
        <p className="screenClac">{outputStr}</p>
        <div className="integers">
          <button className="buttonInt" type="button" value="AC" onClick={dropValue}>AC</button>
          <button className="buttonInt" type="button" value="+/-" onClick={dropValue}>+/-</button>
          <button className="buttonInt" type="button" value="%" onClick={dropValue}>%</button>
          <button className="buttonInt op" type="button" value="÷" onClick={dropValue}>÷</button>
          <button className="buttonInt" type="button" value="7" onClick={dropValue}>7</button>
          <button className="buttonInt" type="button" value="8" onClick={dropValue}>8</button>
          <button className="buttonInt" type="button" value="9" onClick={dropValue}>9</button>
          <button className="buttonInt op" type="button" value="x" onClick={dropValue}>x</button>
          <button className="buttonInt" type="button" value="4" onClick={dropValue}>4</button>
          <button className="buttonInt" type="button" value="5" onClick={dropValue}>5</button>
          <button className="buttonInt" type="button" value="6" onClick={dropValue}>6</button>
          <button className="buttonInt op" type="button" value="-" onClick={dropValue}>-</button>
          <button className="buttonInt" type="button" value="1" onClick={dropValue}>1</button>
          <button className="buttonInt" type="button" value="2" onClick={dropValue}>2</button>
          <button className="buttonInt" type="button" value="3" onClick={dropValue}>3</button>
          <button className="buttonInt op" type="button" value="+" onClick={dropValue}>+</button>

          <button className="buttonInt" id="bigButton" type="button" value="0" onClick={dropValue}>0</button>
          <button className="buttonInt" type="button" value="." onClick={dropValue}>.</button>
          <button className="buttonInt op" type="button" value="=" onClick={dropValue}>=</button>

        </div>
        {/* <div className="buttonsDown"> </div> */}
      </div>
    </div>
  );
}
