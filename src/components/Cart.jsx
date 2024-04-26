import React, { useContext, useState } from 'react';
import './Cart.scss';
import CartCard from './CartCard';
import { motion, AnimatePresence } from 'framer-motion';
import { SelectedItemContext } from '../Context/SelectedItemContext';
import Modal from 'react-modal';


const ShoppingCart = ({ onClose }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { selectItems, setSelectItems } = useContext(SelectedItemContext);

  const formatPrice = (price) => {
    return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectItems.forEach(item => {
      totalPrice += parseFloat(item.price);
    });
    return totalPrice;
  };

  const itemMap = new Map();
  selectItems.forEach(item => {
    if (itemMap.has(item.id)) {
      itemMap.set(item.id, itemMap.get(item.id) + 1);
    } else {
      itemMap.set(item.id, 1);
    }
  });

  const openModal = () => {
    if (selectItems.length > 0) {
      setIsOpen(true);
    }
  }
  
  const closeModal = () => {
    setIsOpen(false);
    setSelectItems([])
  }

  return (
    <>
      <motion.div 
      initial={{ opacity: 0, x: 100}}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      className="cart-container"
      >
        <div className="wrapper">
          <div className="cart-header">
            <h2>Carrinho<br/> de compras</h2>
            <button onClick={onClose}>X</button>
          </div>
          <div className="cart-wrapper">
          <AnimatePresence>
              {Array.from(itemMap.keys()).map(itemId => (
                <CartCard
                  key={itemId}
                  selectItem={selectItems.find(item => item.id === itemId)}
                  quantity={itemMap.get(itemId)}
                />
              ))}
          </AnimatePresence> 
          </div>    
        </div>  
        <div className="cart-footer">
          <p>Total: <span>R$ {formatPrice(calculateTotalPrice())}</span></p>
          <button onClick={openModal}>Finalizar Compra</button>
        </div>
      </motion.div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
        closeTimeoutMS={200}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Compra Concluída! ✅</h2>
          <hr/>
          <p>
            Parabéns! Sua compra foi efetuada com sucesso. Agradecemos por escolher nossa loja.
          </p>
          <button onClick={closeModal}>Fechar</button>
        </motion.div>
      </Modal>
    </>
  );
};

export default ShoppingCart;
