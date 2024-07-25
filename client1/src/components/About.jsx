 import Image from 'next/image';

import Background from '../../public/images/myImage.png';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

    return (
        <div
        ref={container} 
        className='relative flex items-center justify-center h-screen overflow-hidden'
        // style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
            
          
            <p className='w-[50vw] text-[2vw] self-end  mix-blend-difference font-mono italic text-indigo-700 '>I am Diya Goyal, a Software Developer majoring in Full Stack Web Development. I am passionate about innovative solutions in Web Development and DSA.</p>
            <p className='text-[5vw] uppercase mix-blend-difference'>Projects</p>
        </div>
        <div className='fixed top-[0vh] left-0 h-[120vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
            <Image src={Background} fill alt="image" style={{objectFit: "contain"}}/>
            </motion.div>
        </div>
        </div>
    )
}