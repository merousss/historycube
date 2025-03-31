import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";

import "./styles.css";

export const Header = () => {
  return (
    <div className="header-container">
      <motion.header className="header-panel">
        <Navigation />
      </motion.header>
    </div>
  );
};
