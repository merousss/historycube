import React from "react";
import ReactSkinview3d from "react-skinview3d"
import { WalkingAnimation } from "skinview3d";
import { motion } from "framer-motion";
import { StatItem } from "./StatItem";

export const CharacterBlock = ({data}) => {
  const skin = data.skin;
  const stats = data.stats;
  const username = data.name;
  console.log(stats)
  return(
    <div className="pr-character-block glass">
      <div style={{cursor: 'grab', width: 400, height: 400}}>
        <ReactSkinview3d
            className="sk-viewer"
            skinUrl={`https://starlightskins.lunareclipse.studio/render/skin/${skin}/default`}
            height="400"
            width="400"
            options={({
              animation: new WalkingAnimation()
              
            })
          }
        
          />
      </div>
      <div className="pr-ch-stats-container">
        <motion.ul>
          <StatItem value={stats.vitality} stat="vitality"/>
          <StatItem value={stats.agility} stat="agility"/>
          <StatItem value={stats.strength} stat="strength"/>
          <StatItem value={stats.intelligence} stat="intelligence"/>
        </motion.ul>
      </div>
    </div>
  );
}

