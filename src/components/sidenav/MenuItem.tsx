import * as React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faBuildingFlag } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { Whisper, Popover } from "rsuite";


const variants = {
  open: {
    y: -12,
    x: -6,
    transition: {
      y: { stiffness: 400}
    }
  },
  closed: {
    y: -25,
    x: -6,
    transition: {
      y: { stiffness: 1000}
    }
  }
};

const text_variants = {
  open: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0
    },
    width: "auto",
    height: "auto"

  },
  closed: {
    x: 0,
    y: 0,
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0
    },
    width: 0,
    height: 0
  }
}



const colors = ["#7d11e8", "#6d31e6", "#5e52e4", "#4e72e2", "#3f93df", "#2fb3dd", "#20d4db", "#10f4d9"];
const pages = ["Главная", "Боевой пропуск", "Государства", "Друзья", "Карта мира", "Магазин", "???", "Правила"]
const links = ["home", "battlepass", "nations", "friends", "map", "store", "123", "rules"]

const icons = [
  <FontAwesomeIcon icon={faHouse} />, 
  <FontAwesomeIcon icon={faTrophy} />, 
  <FontAwesomeIcon icon={faBuildingFlag} />, 
  <FontAwesomeIcon icon={faUserGroup} />, 
  <FontAwesomeIcon icon={faMapLocationDot} />,
  <FontAwesomeIcon icon={faShop} />,
  <FontAwesomeIcon icon={faQuestion} />,
  <FontAwesomeIcon icon={faClipboard} />,

]

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` , color: `${colors[i]}`};

  return (
    <div style={{display: "flex"}}>
    <motion.li className="side-li"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Whisper
        speaker={
          <Popover arrow={false} style={{color: 'white', background: 'transparent', boxShadow: 'none'}}>
            <motion.div variants={{open: {opacity: 0}, closed: {background: "#292d33", padding: 8, borderRadius: 8, x: -12}}}>
              {pages[i]}
            </motion.div>
          </Popover>
        }>
      <div className="icon-placeholder" style={style} onClick={()=>window.location.replace(`/dashboard/${links[i]}`)}>
        {icons[i]}
      </div>
      </Whisper>
        <motion.div
          variants={text_variants}
        >
          <div className="text-placeholder">{pages[i]}</div>
      </motion.div>
    </motion.li>
    
    </div>
  );
};

