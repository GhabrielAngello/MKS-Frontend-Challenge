import React, { useContext } from 'react';
import './CartCard.scss';
import { motion } from 'framer-motion';
import { SelectedItemContext } from '../Context/SelectedItemContext';

function CartCard({ selectItem }) {
  const { selectItems, setSelectItems } = useContext(SelectedItemContext);

  const formatPrice = (price) => {
    return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
  };

  const removeItem = (id) => {
    const updatedItems = selectItems.filter((item) => item.id !== id);
    setSelectItems(updatedItems);
  };

  const addItem = (item) => {
    setSelectItems((prevState) => [...prevState, item]);
  };

  const removeItem2 = (itemId) => {
    setSelectItems((prevState) => {
      const indexToRemove = prevState.findIndex((item) => item.id === itemId);
      if (indexToRemove !== -1) {
        const updatedItems = [...prevState];
        updatedItems.splice(indexToRemove, 1);
        return updatedItems;
      }
      return prevState;
    });
  };

  const itemCount = selectItems.filter(
    (item) => item.id === selectItem.id
  ).length;

  return (
    <motion.div 
    className='cart-card'
    initial={{ opacity: 0, x: 100}}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
    >
      <button className='delete-button' onClick={() => removeItem(selectItem.id)}>X</button>
      <div className="box1">
        <img src={selectItem.photo} alt={selectItem.title} />
        <span className='item-text'>{selectItem.name}</span>
      </div>
      <div className="box2">
        <div className='quantity-counter'>
          <span className='quantity-label'>Qtd:</span>
          <div className='counter-qtd'>
            <button className='quantity-button' onClick={() => removeItem2(selectItem.id)}>-</button>
            <span>
              <div className='divider'></div>
              {itemCount}
              <div className="divider"></div>
            </span>
            <button className="quantity-button" onClick={() => addItem(selectItem)}>+</button>
          </div>
        </div>
        <span className="cart-price">
          R${formatPrice(Number(selectItem.price) * itemCount)}
        </span>
      </div>  
    </motion.div>
  );
}

export default CartCard;