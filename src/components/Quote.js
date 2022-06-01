import React, { useState } from 'react';
import Header from './Header';
import '../styles/Quote.css';

function Quote() {
  const [links] = useState([
    { status: false, link: '../calculator' },
    { status: false, link: '../' },
    { status: true, link: '../quote' },
  ]);

  return (
    <div className="quote">
      <Header obj={links} />
      <p className="william">
        Math Magician is not about numbers, equations, computations or
        algorithms; It&apos;s about understanding. _William Paul Thurston
      </p>
    </div>
  );
}

export default Quote;
