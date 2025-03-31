import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import './style.css'
import { Mousewheel, FreeMode } from 'swiper/modules';
import { useState } from 'react';
import { motion } from "framer-motion";

import { RecieveModal } from './RecieveModal';

const reward_color = {
  common: '#404046',
  uncommon: '#b5b5c2',
  rare: '#5555FF',
  epic: '#FF55FF',
  legendary: '#FFAA00'

};



const RenderRewards = (props) => {
  const rewards = props.rewards
  return(
    <>
      {rewards.map((reward, ind)=>(
        <motion.div className='bp-reward-card' key={`reward-${ind}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div 
            style={{
              width: '100%',
              height: '10%',
              background: reward_color[reward.rareness],
              position: 'absolute',
              bottom: 0,
              borderRadius: '0px 0px 10px 10px',
              right: 0.1,
              boxShadow: `0px 0px 7px 0px ${reward_color[reward.rareness]}`

            }}/>
          <div className="bp-reward-amount">{reward.amount > 1 ? 'x'+ reward.amount : ''}</div>
        </motion.div>
      ))}
    </>
  ); 

};


const BattlePassBlock = () => {
  const [levels, setLevels] = useState([
    {'level': 1, rewards:[{'item_id':1, 'name': 'Вещь 1', 'rareness': 'common', 'amount': 3},{'item_id':1, 'name': 'Вещь 1', 'rareness': 'uncommon', 'amount': 3},{'item_id':2, 'name': 'Вещь 2', 'rareness': 'rare', 'amount': 10},{'item_id':3, 'name': 'Вещь 3', 'rareness': 'epic', 'amount': 1},{'item_id':4, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 25}]},
    {'level': 2, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'common', 'amount': 12}, {'item_id':1, 'name': 'Ключик', 'rareness': 'uncommon', 'amount': 1}]},
    {'level': 3, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'common', 'amount': 3}]},
    {'level': 4, rewards:[]},
    {'level': 5, rewards:[]},
    {'level': 6, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'common', 'amount': 3}]},
    {'level': 7, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'common', 'amount': 3}]},
    {'level': 8, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'common', 'amount': 3}]},
    {'level': 9, rewards:[]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 11, rewards:[]},
    {'level': 12, rewards:[]},
    {'level': 12, rewards:[]},
    {'level': 12, rewards:[]},
    {'level': 12, rewards:[]},
    {'level': 12, rewards:[]},
    {'level': 12, rewards:[]},
    {'level': 12, rewards:[]},
    {'level': 12, rewards:[]},
    {'level': 12, rewards:[]},
    {'level': 12, rewards:[]},
    {'level': 12, rewards:[]},
    {'level': 12, rewards:[]},
    {'level': 12, rewards:[]},
    {'level': 12, rewards:[]},
    {'level': 12, rewards:[]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    {'level': 10, rewards:[{'item_id':1, 'name': 'Ключик', 'rareness': 'legendary', 'amount': 2}]},
    

  ]
  );
  const [openModal, setOpenModal] = useState(false);
  const [modalItems, setModalItems] = useState([]);

  function ModalData(items){
    setModalItems(items);
    setOpenModal(true);
  };

  const RenderLevelContainer = (props) => {
    const level = props.level
    const rewards = props.rewards
    const empty = 'bp-base-empty'
    const complete = 'bp-base-complete'
  
    if(level.rewards.length === 0){
      return(
        <div className='bp-base bp-base-complete'>
          <div className='bp-level-contaner bp-level-empty'>{level.level}</div>
        </div>
      )
    }
    return(
      <div className='bp-base'>
        <motion.div className='bp-level-contaner' onClick={()=>ModalData(rewards)}
          whileHover={{scale: 1.02}}
          >
          {level.level}
        </motion.div>
      </div>
    );
  };

  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={1}
        mousewheel={true}
        freeMode={true}
        modules={[Mousewheel, FreeMode]}
        className="mySwiper"
        style={{maxWidth: '190vh'}}
        initialSlide={0}
      >
        {levels.map((item, index)=>(
          <>
            <SwiperSlide key={index}>
              <div className='bp-reward-container'>
                <RenderRewards rewards={item.rewards}/>
              </div>
              <div>
                <RenderLevelContainer level={item} rewards={item.rewards}/>
              </div>
            </SwiperSlide>
          </>
        ))}
        
      </Swiper>
      <RecieveModal open={openModal} items={modalItems} setOpen={setOpenModal}/>
    </>
  );
}

export default BattlePassBlock;