import React from "react";
import { motion } from "framer-motion";
import { NationProgress } from "./NationProgress";

export const NationHeader = ({nation, progress}) => {
  const { level, exp, percent } = progress;
  const { name, nation_id } = nation;

  return(
    <div className="pr-nation-header">
        <NationProgress level={level} exp={exp} percent={percent}/>
        <motion.h4
          style={{cursor: "pointer", color: "#dadbdf"}}
          whileHover={{scale: 1.02, color: "#3f8ee7"}}
          whileTap={{scale: 0.99}}
          onClick={()=>window.location.replace(`/dashboard/nation/${nation_id}`)}
        >
          {name}
        </motion.h4>
    </div>
  );
}