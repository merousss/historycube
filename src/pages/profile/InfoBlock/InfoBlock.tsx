import React from "react";

import { LevelProgress } from "./LevelProgress";
import { ProfileInfo } from "./ProfileInfo";
import { ControlPanel } from "./ControlPanel";
import { Dropdown } from "./Dropdown";

export const InfoBlock = ({data}) => {
  const progress = data.progress;
  const user = data.user


  return(
    <div className="pr-info-block glass">
      <div style={{display: 'flex', height: 118}}>
        <LevelProgress level={progress.level} exp={progress.exp} percent={progress.percent}/>
        <ProfileInfo username={user.username} role={user.role} status={user.status} skin={user.skin}/>
      </div>
      
      <ControlPanel decency={user.decency} skills={user.stats}/>
      <Dropdown />
      
    </div>
  );
}