import React from "react";
import MainCanvas from "./MainCanvas";
import { useState } from "react";
import { InfoPanel } from "./InfoPanel";

export const Leveling = ({}) => {
  const levels = useState({
    vitality:
    ["v1", "v2", "v3"]
  })

  return(
    <div>
      <MainCanvas />
      <InfoPanel points={5}/>
    </div>
  );
}