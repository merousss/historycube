import React from "react";

import { RoleTag } from "./RoleTag";
import { Status } from "./Status";


export const ProfileInfo = ({username, role, status, skin}) => {
  // const user_skin = `https://mc-heads.net/avatar/${skin}/100`
  const user_skin = `https://starlightskins.lunareclipse.studio/render/ultimate/${skin}/face`

  return(
    <>
    <div className="pr-info-data">
      <div>
        <img src={user_skin} alt="Аватарка" style={{width: 100, height: 96, borderRadius: 90}}/>
      </div>

      <div style={{display: 'inline-block', marginLeft: 12}}>
        <div style={{display: "flex", alignItems: 'center'}}>
          <div className="pr-username-ph">
            {username}
          </div>
          <RoleTag role={role}/>
        </div>
        <Status status={status}/>
      </div>
    </div>
    </>
  );
}