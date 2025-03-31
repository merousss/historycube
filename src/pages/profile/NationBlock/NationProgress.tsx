import React from "react";
import { Progress } from 'rsuite';


export const NationProgress = ({level, exp, percent}) => {


  return(
    <div>
      <Progress.Circle percent={percent} showInfo={false} style={{width: 90, position: "absolute"}} strokeColor="#23a573"/>
      <div className='pr-nation-level-text'>{level}</div>
    </div>
  );
}