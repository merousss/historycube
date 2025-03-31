import React from "react";
import { Button, Whisper, Popover } from "rsuite";
import { motion, mix } from "framer-motion";
import { UserSkills } from "./UserSkills";

const FaSvgIcon = ({ faIcon, ...rest }) => {
  const { width, height, svgPathData } = faIcon;
  return (
    <svg {...rest} viewBox={`0 0 ${width} ${height}`} width="2em" height="2em" fill="currentColor">
      <path d={svgPathData}></path>
    </svg>
  );
};

const color_mixer = mix("#ac1308", "#20a50e")

const decency_level = (decency: number) => {
  if(decency >= 700){
    return "Высокий"
  }else if(decency >= 400){
    return "Приемлемый"
  }
  return "Низкий"
}

export const ControlPanel = ({decency, skills}) => {

  const speaker=(
    <Popover title={<div style={{fontWeight: "normal"}}>Порядочность: <span style={{color: color_mixer(decency/1000)}}>{decency}</span></div>}>
      <div style={{width: 250}}>
        <p>Уровень: <span style={{color: color_mixer(decency/1000)}}>{decency_level(decency)}</span></p>
        <p>
          Если игрок нарушает правила или не соблюдает РП на него можно <span style={{color: "#f04f43"}}>пожаловаться</span>.
          В этом случае уровень порядочности снизится.
        </p>

        <p>Если вам понравился игрок — его можно <span style={{color: "#43f068"}}>похвалить</span></p>
      </div>
    </Popover>
  );


  return(
    <div style={{display: "inline-block"}}>
      <div style={{display: "flex", alignItems: "center", marginLeft: 194}}>
        <Whisper
          placement="bottom"
          trigger="hover"
          controlId="control-id-hover-enterable"
          speaker={speaker}
          enterable
          delayOpen={500}
        >
          <motion.div className="pr-decency-outline"
            whileHover={{scale: 1.05, filter: "brightness(120%)"}}
          >
            <div className="pr-decency-inline" style={{width: `${decency/10}%`, background: color_mixer(decency/1000)}}/>
          </motion.div>
        </Whisper>
        <UserSkills skills={skills}/>
      </div>

      <div className="pr-decency-text">
        Порядочность: {decency}
      </div>

    </div>
  );
}