import React, {useState} from 'react';
import './Navbar.scss';
import Object from '../SplineObject/Spline';
import {motion, AnimatePresence} from "framer-motion";
import MagneticButton from '../Layout'; 
import Parallax from '../Parallax/Parallax';
function Navbar() {

  const [open, setOpen] = useState(false);

  const isOpen = ()=>{
    setOpen(true);
  }

  const closeMenu = ()=>{
    setOpen(false);
  }
  
  //lets start animation
  const item={
    exit:{
      opacity:0,
      height:0,
      transition:{
        ease:"easeInOut",
        duration:0.3,
        delay:1.2
      }
    }
  }

  return (
    <div className="container">
      <header>
        <div className="menu" onClick={isOpen}>
          {/* <i className="fa fa-bars"></i> */}
          <MagneticButton></MagneticButton>
        </div>       
      </header>
      <section>

      <div className="content_wrapper">
     {/* <img alt='diya' src={MyImage}></img> */}
     <Object></Object>
     </div>
      <AnimatePresence>
        {
          open &&(
            <motion.div className="menu_container"
            variants={item}
            initial={{height:0,opacity:0}}
              animate={{height:"100vh", opacity:1}}
              transition={{duration:.5}}
              exit="exit"
              >
              <div className="btn_close" onClick={closeMenu}>X</div>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.8}}
                 exit={{
                   opacity:0,
                   y:90,
                   transition:{
                     ease:"easeInOut",
                     delay:1
                    }
                  }}
                  >Home</motion.a>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.7}}
                 exit={{
                   opacity:0,
                   y:90,
                   transition:{
                     ease:"easeInOut",
                     delay:.8
                    }
                  }}
                  >About</motion.a>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.6}}
                 exit={{
                   opacity:0,
                   y:90,
                   transition:{
                     ease:"easeInOut",
                     delay:.6
                    }
                  }}
                  >Portfolio</motion.a>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.5}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.4
                    }
                  }}
                  >Blog</motion.a>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.4}}
                 exit={{
                   opacity:0,
                   y:90,
                   transition:{
                     ease:"easeInOut",
                     delay:.2
                    }
                  }}
                  >Contact</motion.a>
            </motion.div>
          )
        }    
      </AnimatePresence>  
    
        </section>
     <section>
      <Parallax></Parallax>
     </section>
    </div>

  );
}

export default Navbar;