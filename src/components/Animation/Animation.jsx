import React, { useEffect, useState } from 'react';
import './Animation.css';
import Navbar from '../Navbar';

const languages = [
  'Hello', // English
  'Bonjour', // French
  'Hola', // Spanish
  'नमस्ते', // Hindi
];

const Animation = () => {
  const [index, setIndex] = useState(0);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === languages.length - 1) {
        setAnimationPlayed(true);
        clearInterval(interval);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 1000); // Change the language every 1 second

    return () => clearInterval(interval);
  }, [index]);

  if (!animationPlayed) {
    return (
      <div className="hello-container">
        <h1 className="hello-text">{languages[index]}</h1>
      </div>
    );
  }

  // Once animation is played, render the landing page
  return <Navbar />;
};

export default Animation;
