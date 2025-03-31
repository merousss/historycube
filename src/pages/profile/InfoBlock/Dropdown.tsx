import React from "react";
import { motion} from "framer-motion";
import { useState } from "react";


const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0.00%, 100.00%)"
    strokeLinecap="round"
    {...props}
  />
);


const list = { closed: {scale: 0}, open: {scale: 1}}


export const Dropdown = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <>
    {isOpen ? <div style={{background: "transparent", height: '100%', width: "100%", position: 'fixed', top: 0, right: 0, zIndex: 6}} onClick={()=>setIsOpen(false)}/> : null}
    <motion.div animate={isOpen ? "open" : "closed"} className='pr-dropdown-container' initial={false}
      variants={{closed: {background: "rgba(0, 0, 0, 0)", width: 130}, open: {background: "#292d33", zIndex: 7, width: 130}}}

    >
      <button className='pr-dropdown-toggle' onClick={() => setIsOpen(!isOpen)}>
      <svg width="20" height="20" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" }
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" }
            }}
          />
        </svg>
      </button>

      <motion.ul variants={list} initial={false} className="pr-dropdown-ul">
        <motion.li className="pr-dropdown-li" style={{color: "#f04f43"}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        > Пожаловаться </motion.li>
        <motion.li className="pr-dropdown-li"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        > 123 </motion.li>
        <motion.li className="pr-dropdown-li"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        > 123 </motion.li>
      </motion.ul>

    </motion.div>
    </>
  )
}