import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

export const Navigation = () => (
  <motion.ul className="ul-header">
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4, 5];
