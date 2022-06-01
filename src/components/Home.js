import React, { useState } from 'react';
import Header from './Header';
import '../styles/Home.css';

function Home() {
  const [links] = useState([
    { status: false, link: '../calculator' },
    { status: true, link: '../' },
    { status: false, link: '../quote' },
  ]);
  return (
    <div className="home">
      <Header obj={links} />
      <h2 className="h2Home">Welcome to the Math Magicians!</h2>
      <p className="first">
        A mathemagician is a mathematician who is also a magician. A great
        number of self-working mentalism tricks rely on mathematical
        principles.Math magician has All the tricks you need to become a math
        magician or math genuis by showing cool tricks to others. The “Math
        Magician Game” is a child-friendly math game featuring cartoon
        characters as numbers and allows users to test their skill with
        addition, subtraction, division and multiplication! As the timer runs
        down, you answer as many questions as you can with the questions
        becoming more difficult the more you play.
      </p>
      <p className="second">
        Math Magician is an educational and free app for educational purposes
        that helps learn to add, subtracting, multiplication, and dividing in a
        fun way. The best way to learn math is while playing. Enjoy the game and
        show your magic through the math app!
      </p>
    </div>
  );
}

export default Home;
