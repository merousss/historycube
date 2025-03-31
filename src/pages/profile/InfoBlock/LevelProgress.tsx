import React from "react";
import { Progress } from 'rsuite';


export const LevelProgress = ({level, exp, percent}) => {


  return (
    <div>
      <Progress.Circle percent={percent} showInfo={false} style={{width: 180, position: "absolute"}} strokeColor="#ffc107"/>
      <div className='pr-level-text'>{level}</div>
    </div>
  );
}