import React from "react";


import Vitality from "../../../images/vitality.png"

const info = {
  vitality: [Vitality, "#e2510e", "Живучесть"], 
  agility: [Vitality, "#e28e0e", "Ловкость"],
  strength: [Vitality, "#e28e0e", "Сила"],
  intelligence: [Vitality, "#e28e0e", "Интеллект"]
}
const colors = ["#e28e0e"]

export const StatItem = ({stat, value}) => {

  return(
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div 
        style={{
          width: 60, height: 60, borderRadius: 90, 
          border: `1px solid ${info[stat][1]}`, 
          display: "flex", justifyContent: "center", alignItems: "center", 
          marginTop: 16,
          background: "rgb(48, 52, 63)"
        }}
      >
        <img src={info[stat][0]} width={60} height={60}/>
      </div>
      <span style={{fontSize: 24, marginTop: 15, marginLeft: 8}}>{value}</span>
    </div>
  )
}