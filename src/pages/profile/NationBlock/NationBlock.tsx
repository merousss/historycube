import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingFlag } from "@fortawesome/free-solid-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";


import { NationHeader } from "./NationHeader";
import { NationStats } from "./NationStats";


export const NationBlock = ({data}) => {
  const nation = data.nation;
  const progress = data.progress
  const stats = data.stats

  return(
    <div className="pr-nation-block glass">
      <div>
        <FontAwesomeIcon icon={faHouseUser} style={{fontSize: 20, color: "#0e70f1"}}/>
        <span style={{fontSize: 20, marginLeft: 8, fontWeight: "bold", color: "gray"}}>Государство игрока</span>

        <div className="pr-nation-body">
          <NationHeader nation={nation} progress={progress}/>
          <NationStats stats={stats}/>
        </div>


      </div>
    </div>
  );
}