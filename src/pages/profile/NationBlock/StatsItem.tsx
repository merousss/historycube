import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Whisper, Popover } from "rsuite";


import Flask from "../../../images/science.png";
import Culture from "../../../images/culture.png";
import Income from "../../../images/income.png";
import Population from "../../../images/population.png";
import Vitality from "../../../images/vitality.png";


const colors = ["#139dc7", "#9f16c2", "#ece81d", "#e28e0e", "#acaba2"]
const icons = [Flask, Culture, Income, Vitality, Population]
const stat_info = [
  ["Наука", "Отображает получаемое количество очков науки в час"],
  ["Культура", "Отображает получаемое количество очков культуры в час"],
  ["Доход", "Отображает количество получаемого дохода от налогов и других способов заработка государства"],
  ["Основная налоговая ставка", 'Основная налоговая ставка (ОНС) — процент, который закладывается в стоимость товаров и услуг при оплате счетов или при переводе с пометкой "Покупка"'],
  ["Население", "Отображает количество населения государства"]
]



export const StatsItem = ({i, stat}) => {
  const style = {border: `2px solid ${colors[i]}`, color: colors[i], background: "rgb(48, 52, 63)"}

  const speaker=(
    <Popover title={<div style={{color: colors[i]}}>{stat_info[i][0]}</div>}>
      <div style={{width: 180}}>
        <img src={icons[i]} style={{width: 130, height: 130, marginLeft: 25}}/>
        <p style={{textAlign: "center"}}>{stat_info[i][1]}</p>
      </div>
    </Popover>
  )

  return(
    <div>
    <Whisper placement="bottom" trigger="hover" speaker={speaker}>
      <motion.div className="pr-nation-stats-ph" style={style}
        whileHover={{scale: 1.03, filter: "brightness(120%)"}}
      >
        {/* <FontAwesomeIcon icon={icons[i]} /> */}
        <img src={icons[i]} width={50} height={50} style={{borderRadius: 90}}/>
      </motion.div>

      <div style={{fontSize: 18, textAlign: "center", marginTop: 10}}>{stat}</div>
    </Whisper>
    </div>
  );

  
}