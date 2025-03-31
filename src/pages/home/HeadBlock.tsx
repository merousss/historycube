import React, {useRef} from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import LogoText from "../../images/LogoText.png"
import Text2 from "../../images/text2.png"
import HeadBG from "../../images/headbg.png"

import { MouseParallax } from 'react-just-parallax';
// import { HeadBackground } from "../../utils/HeadBackground";
import Balatro from "../../utils/HB";

export const HeadBlock = () => {
  const { scrollYProgress } = useScroll({
  })
  const logo_scale = useTransform(
    scrollYProgress,
    [0, 0.49, 0.5, 1],
    [1, 1, 0.8, 0.3]
  )
  return(
    <>
    
    <div className="home-top-block"
    >

    <Balatro
      isRotate={true}
      mouseInteraction={false}
      pixelFilter={3000}
      spinSpeed={5}
      spinAmount={0.3}
      spinRotation={0.5}
      color1="#000000"
      color2="#0065b3"
    />
      <motion.div style={{position: "relative", scale: logo_scale}} className="logo-container-head"
      >
        <MouseParallax strength={-0.1} lerpEase={0.02}>
          <motion.img className="logo-text" src={LogoText} 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition: {delay: 0.2}}}
          />
        </MouseParallax>
        
        <MouseParallax strength={-0.13} lerpEase={0.02}>
          <motion.img className="text-2" src={Text2} 
            animate={{
              y: 1000,
              rotate: '15deg',
              transition: {delay: 0.666}
            }}
            whileHover={{scale: 1.5, transition: {delay: 0}}}
          />
        </MouseParallax>
      </motion.div>
      
    </div>
    </>
  )
}