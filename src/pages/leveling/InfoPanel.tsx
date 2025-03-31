import React from 'react';
import { motion } from 'framer-motion';

import LevelPoint from "../../images/items/level_point.png"


export const InfoPanel = ({points}) => {

  return(
    <motion.div className="lv-info-panel glass">
      <img src={LevelPoint} style={{width: 50, height: 50, transform: "scale(2)"}}/>
      <span style={{fontSize: 36, marginLeft: 8}}>{points}</span>
    </motion.div>
  )
}