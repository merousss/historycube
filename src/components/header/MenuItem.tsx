import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { faBuildingUser } from "@fortawesome/free-solid-svg-icons";
import { Whisper, Popover } from "rsuite";

const pages = [
  "Личный кабинет",
  "Моё государство",
  "Профиль",
  "Моё государство",
  "???",
  "Профиль",
];
const links = ["123", "nation/", "123", "123", "123", "profile/"];
const colors = [
  "#7d11e8",
  "#6d31e6",
  "#5e52e4",
  "#4e72e2",
  "#3f93df",
  "#2fb3dd",
];
const icons = [
  <FontAwesomeIcon icon={faTableColumns} />,
  <FontAwesomeIcon icon={faBuildingUser} />,
  <FontAwesomeIcon icon={faCoins} />,
  <FontAwesomeIcon icon={faCoins} />,
  <FontAwesomeIcon icon={faCube} />,
  <FontAwesomeIcon icon={faUser} />,
];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}`, color: `${colors[i]}` };

  return (
    <motion.li
      className="li-header"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Whisper
        placement="bottom"
        speaker={
          <Popover
            style={{
              color: "white",
              background: "#292d33",
              borderRadius: 8,
              padding: 8,
            }}
          >
            <div>{pages[i]}</div>
          </Popover>
        }
      >
        <div
          className="hd-icon-placeholder"
          style={style}
          onClick={() => window.location.replace(`/dashboard/${links[i]}`)}
        >
          {icons[i]}
        </div>
      </Whisper>
    </motion.li>
  );
};
