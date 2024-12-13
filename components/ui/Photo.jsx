"use client";

import {motion} from "framer-motion";
import Image from "next/image";



const Photo = () => {
  return <div className="w-full h-full relative">
 <motion.div
  initial= {{ opacity:0}}
  animate={{
    opacity:1,
    transition:{ delay:0.4, duration: 0.4, ease: "easeIn"},
  }}
  > 

  <motion.div
  initial= {{ opacity:0}}
  animate={{opacity:1}}
    transition={{ delay:0.4, duration: 0.5, ease: "easeInOut"}
  }
  className="w-[150px] xl:w-[290px] h-[150px] xl:h-[290px] mix-blend-lighten absolute">
    <Image 
  
  
  src="/assets/photo.png" 
  priority quality={100} 
  fill alt="" 
  className="object-contain block max-w-full" />
  </motion.div>
  <motion.svg className="w-[200px] xl:w-[400px] h-[200px] xl:h-[400px]"
  fill="transparent"
  viewBox="0 0 506 506"
  xmlns="http://www.w3.org/2000/svg"
  >
    <motion.circle 
    cx="200" 
    cy="200" 
    r="200" 
    stroke="pink" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    initial={{strokeDasharray: "24 10 0 0"}}
    animate={{ 
        strokeDasharray: ["15 120 25 25", "16 25 92 72","4 250 22 22"],
        rotate: [120, 360],
    }}
    transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
     }}
     />
  </motion.svg>
  </motion.div>

  </div>
 
}

export default Photo