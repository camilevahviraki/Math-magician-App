import React, { Component } from 'react';
import '../styles/Calculator.css';

export default class Calculator extends Component {
  render() {
    return (
      <div className="mainCalculator">
        <div className="calculator">
          <input type="text" value="0" />
          <div className="integers">
            <button className="buttonInt" type="button">AC</button>
            <button className="buttonInt" type="button">+/-</button>
            <button className="buttonInt" type="button">%</button>
            <button className="buttonInt op" type="button">/</button>
            <button className="buttonInt" type="button">7</button>
            <button className="buttonInt" type="button">8</button>
            <button className="buttonInt" type="button">9</button>
            <button className="buttonInt op" type="button">x</button>
            <button className="buttonInt" type="button">4</button>
            <button className="buttonInt" type="button">5</button>
            <button className="buttonInt" type="button">6</button>
            <button className="buttonInt op" type="button">-</button>
            <button className="buttonInt" type="button">1</button>
            <button className="buttonInt" type="button">2</button>
            <button className="buttonInt" type="button">3</button>
            <button className="buttonInt op" type="button">+</button>

          </div>
          <div className="buttonsDown">
            <button className="buttonInt" id="bigButton" type="button">0</button>
            <button className="buttonInt" type="button">.</button>
            <button className="buttonInt op" type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}
