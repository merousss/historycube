import React from "react";
import { Modal } from "rsuite";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from "react";
import { motion, mix } from "framer-motion";



import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reward_color = {
  common: '#404046',
  uncommon: '#b5b5c2',
  rare: '#5555FF',
  epic: '#FF55FF',
  legendary: '#FFAA00'

};

export const RecieveModal = ({items, open, setOpen}) => {

  const handleClose = () => setOpen(false);

  return(
    <Modal open={open} onClose={handleClose} size={900}>
      <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} style={{height: 600}}>
        {items.map((item, index)=>(
          <SwiperSlide key={index} style={{display: "flex", justifyContent: "center"}}>
            <div style={{width: "100%"}}>
              {item.name}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </Modal>
  );
}