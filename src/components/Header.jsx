import React from 'react';
import './Header.scss';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cartIcon from '../assets/button-card.svg';
import Cart from './Cart';

function Header({ selectItems }) {
  const [openCar, setOpenCar] = useState(false);

  return (
    <>
      <AnimatePresence>
        {openCar && <Cart selectItems={selectItems} onClose={() => { setOpenCar(false) }} />}
      </AnimatePresence>
      <div className="header">
        <div className="header-title">
          <h1>MKS</h1>
          <h2>Sistemas</h2>
        </div>
        <motion.button
          onClick={() => { setOpenCar(!openCar) }}
          className="cart-button"
          whileHover={{ scale: 1.1 }}
        >
          <img src={cartIcon} alt="Cart" className="cart-icon" />
          <AnimatePresence>
            {selectItems && (
              <motion.span
                key={selectItems.length}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="item-count"
              >
                {selectItems.length}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  )
}

export default Header;
