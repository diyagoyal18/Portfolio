import { useEffect, useState } from 'react';
import styles from './Greeting.module.css';
import Header from '../Header'
const languages = [
  'Hello', // English
  'Bonjour', // French
  'Hola', // Spanish
  'नमस्ते', // Hindi
];

const Greeting = ({ onAnimationEnd }) => {
  const [index, setIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    // Indicate that the component has been rendered on the client
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const interval = setInterval(() => {
        if (index === languages.length - 1) {
          setAnimationPlayed(true);
          clearInterval(interval);
          onAnimationEnd(); // Notify parent component when animation ends
        } else {
          setIndex((prevIndex) => prevIndex + 1);
        }
      }, 1000); // Change the language every 1 second

      return () => clearInterval(interval);
    }
  }, [isClient, index]);

  if (!animationPlayed) {
    return (
      <div className={styles.helloContainer}>
        <h1 className={styles.helloText}>{languages[index]}</h1>
      </div>
    );
  }

  // Optionally, render nothing after the animation is played
  return (
    <div className={styles.landingPage}>
     <Header/>
    </div>
  );

};

export default Greeting;
