import React, { useRef, useEffect } from 'react';
import { gsap, Elastic } from 'gsap';
import './Layout.css'
const MagneticButton = () => {
  const buttonRef = useRef(null);
  const childrenRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const children = childrenRef.current;

    const handleMouseMove = (e) => {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = button;
      const left = e.pageX - offsetLeft;
      const top = e.pageY - offsetTop;
      const centerX = left - offsetWidth / 2;
      const centerY = top - offsetHeight / 2;
      const d = Math.sqrt(centerX ** 2 + centerY ** 2);

      gsap.to(button, {
        x: centerX / 1.5,
        y: centerY / 1.5,
        ease: Elastic.easeOut,
        duration: 0.5,
      });

      children.style.transform = `
        translate3d(${centerX / 4}px, ${centerY / 4}px, 0)
        rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 10}deg)
      `;
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        ease: Elastic.easeOut.config(1, 0.1),
        duration: 1.2,
      });
      children.style.transform = '';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <a className='magneticButton' ref={buttonRef} style={{ display: 'inline-block', position: 'relative' }}>
      <span ref={childrenRef}>Hover me!</span>
    </a>
  );
};

export default MagneticButton;