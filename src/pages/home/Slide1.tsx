import React from "react";
import launcher from "../../images/launcher_download.png"
import science from "../../images/science.png"
import culture from "../../images/culture.png"
import gold from "../../images/income.png"
import { motion } from "framer-motion";
import { MouseParallax } from 'react-just-parallax';
import ScrollFloat from "../../utils/Text/ScrollFloat";
import ScrollReveal from "../../utils/Text/ScrollReveal";
import GradientText from "../../utils/Text/GradientText";


export const Slide1 = () => {

  return(
    <div className="slide-container">
      <div style={{textAlign: "center"}}>
        <ScrollFloat
        scrollStart = "center bottom+=30%"
        scrollEnd="bottom bottom-=50%"
        >
        HistoryCube
        </ScrollFloat>
        <ScrollReveal
        >
          Лучший РП политический сервер по майнкрафту!
        </ScrollReveal>
      </div>
      <div className="mini-block-container">
        <MiniBlock>
          <h3>Государства</h3>
          <p>Создавай свое государство или же вступи в уже существующие!</p>
          <p style={{color: "gray"}}>
            Ты можешь прокачивать свое государство при помощи разных веток развития. 
            Вкладывайся в науку{<img src={science} width={24} height={24}/>}, чтобы получить доступ к различным
            технологиям, и зданиям. Или может ты хочешь развивать культуру {<img src={culture} width={24} height={24}/>}, 
            чтобы открыть новые функции по управлению государством? Торгуйся с другими нациями при помощи своей валюты
            {<img src={gold} width={24} height={24}/>}и собирай налоги с населения своей империи!
          </p>
          <p style={{marginTop: 8}}>
            При помощи нашей интеллектуальной системы ты способен удобно управлять государством и 
            назначать людей на разные роли прямо на сайте!
          </p>
        </MiniBlock>
        <MiniBlock>
          <h3>Свой лаунчер</h3>
          <p>Новая эра</p>
          <p style={{color: "gray"}}>
            Мы создали собственный лаунчер! Быстрая установка, готовая сборка. Присоединяйся к нам!
          </p>
          <motion.div style={{float: "left", fontSize: 32, marginTop: 12}}
            whileHover={{scale: 1.05}}
          >
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={10}
              showBorder={false}
              className="custom-class"
            >
              Подробнее
            </GradientText>
          </motion.div>
        </MiniBlock>
        <MiniBlock>
          <h3>Моды</h3>
          <p>Самые интересные и полезные моды собраны у нас!</p>
            <ul style={{color: "gray", marginTop: 8}}>
              <li>
                <img src="https://visage.surgeplay.com/head/512/bdfcee8306e0434a747710e2bdc2558c5a222e9b693477909f10d6cc220f6764.png?no=shadow&y=70" width={50} height={50} />
                <a href="https://www.createmod.tech/" target="_blank" rel="noopener noreferrer">Create</a>
              </li>
              <li>
                <img src="https://visage.surgeplay.com/head/512/f3c958c56cb4a7084a877808cda12c0077711b0242ef250044de0b8e9c046213.png?no=shadow&y=70" width={50} height={50}/>
                <a href="https://modrinth.com/mod/farmers-delight/version/1.20.1-1.2.3" target="_blank" rel="noopener noreferrer">Farmer's Delight</a>
              </li>
              <li>
                <img src="https://visage.surgeplay.com/head/512/bdfcee8306e0434a747710e2bdc2558c5a222e9b693477909f10d6cc220f6764.png?no=shadow&y=70" width={50} height={50}/>
                <a href="" target="_blank" rel="noopener noreferrer">meowmeow</a>
              </li>
              <li>
                <img src="https://visage.surgeplay.com/head/512/bdfcee8306e0434a747710e2bdc2558c5a222e9b693477909f10d6cc220f6764.png?no=shadow&y=70" width={50} height={50}/>
                <a href="" target="_blank" rel="noopener noreferrer">Create</a>
              </li>
            </ul>
          <p>
            При помощи нашей интеллектуальной системы ты способен удобно управлять государством и 
            назначать людей на разные роли прямо на сайте!
          </p>
        </MiniBlock>
        <MiniBlock>
          <h3>Государства</h3>
        </MiniBlock>
      </div>
    </div>
  )
}

const MiniBlock = ({children}) => {
  return(
    <motion.div
      className="slide1-mini-block"
    >
      <PathDrawing />
      <motion.div
        initial={{x:100, opacity: 0}}
        whileInView={{x:0,opacity:1, transition: {delay: 0.2, duration: 0.5}}}
        viewport={{ once: true }}
        className="slide1-mini-block-after-svg"
      >
      {children}
      </motion.div>
    </motion.div>
  )
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
        pathLength: { delay: 0.5, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: 0.5, duration: 0.01 },
    },
  },
}

const PathDrawing=()=> {
  return (
      <motion.svg
          width="40"
          height="100"
          viewBox="0 0 40 100"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          style={shape}
      >
        <motion.line
          x1="20"
          y1="4"
          x2="20"
          y2="80"
          stroke="rgb(101, 5, 156)"
          custom={3.5}
          variants={draw}
          style={shape}
        />
      </motion.svg>
  )
}

const shape: React.CSSProperties = {
  strokeWidth: 8,
  strokeLinecap: "round",
  fill: "transparent",
}