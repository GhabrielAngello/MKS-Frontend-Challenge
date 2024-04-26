import React from 'react';
import { motion } from 'framer-motion';
import './Card.scss';
import ShoppingBag from '../assets/shopping-bag.svg';

function Card({addItem, item }) {
  const formatPrice = (price) => {
    return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
  };

  return (
    <motion.div whileHover={{scale: 1.1}} className="card">
      <div className="card-content">
        <img src={item.photo} alt={item.name} className="card-image" />
        <div className="price-button">
            <h2 className="card-title">{item.name}</h2>
            <span className="buy-button">R${formatPrice(Number(item.price))}</span>
        </div>
        <p className="subtitle">{item.description}</p>
      </div>
      <motion.div onClick={()=>{addItem(item)}} whileTap={{ scale: 0.9 }} className="full-width-button">
        <img src={ShoppingBag}/>
        <p>COMPRAR</p>
      </motion.div>
    </motion.div>
  );
}

export default Card;
