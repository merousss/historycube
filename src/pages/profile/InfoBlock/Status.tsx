import React from "react";


const colors = {
  inGame: "green",
  online: "green",
  offline: "gray",
  afk: "#a3540a"
}

const statusText = {
  inGame: "В игре",
  online: "Онлайн",
  offline: "Не в сети",
  afk: "Нет на месте"
}

export const Status = ({status}) => {

  return(
    <div style={{display: 'flex', alignItems: 'center', marginTop: 12}}>
      <div style={{background: `${colors[status]}`, width: 16, height: 16, borderRadius: 90, border: "3px solid black"}}/>
      <span style={{marginLeft: 4, fontSize: 16}}>{statusText[status]}</span>
    </div>
  );

}