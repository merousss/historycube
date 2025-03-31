import React from "react";
import { motion } from "framer-motion";


const page_dict = {
  battlepass: 'Боевой пропуск',
  home: 'Главная',
  nations: 'Государства',
  store: 'Магазин',
  map: 'Карта мира',
  friends: 'Друзья',
  rules: 'Правила',
  profile: 'Профиль',
  balance: 'Баланс',
  nation: 'Государство'
}
export const PageIndicator = () => {
  const current_page = window.location.pathname.split('/')
  const text_page = page_dict[current_page[2]]
  

  return(
    <motion.h1 className="page_info"
      variants = {{open: {x: 232}, closed: {x:0}}}
    >
      {text_page}
    </motion.h1>
  );
}