import React from "react";
import CountUp from "../../utils/Text/CountUp";
import GradientText from "../../utils/Text/GradientText";
import ScrollVelocity from "../../utils/Text/ScrollVelocity";

export const Slide2 = ({}) => {

  return(
    <div className="slide-container">
      <div className="mod-counter" 
        style={{
        }}
      >
        <div>БОЛЕЕ</div>
        <GradientText colors={["#40a9ff", "#b940ff", "#5340ff", "#4079ff", "#b940ff"]}>
          <CountUp
            from={0}
            to={52}
            separator=","
            direction="up"
            duration={1}
            className="sl2-count-up"
          />
      </GradientText>
        <div>МОДОВ</div>
      </div>
      <p style={{marginTop: 48}}/>
        <ScrollVelocity
          texts={["CREATE · SKIN · MEOW ·", "FARMER'S DELIGHT · MOD · SEASONS ·"]} 
          className="custom-scroll-text"
          velocity={52}
        />
      <div style={{height: 1000}}>

      </div>
    </div>
  );
}