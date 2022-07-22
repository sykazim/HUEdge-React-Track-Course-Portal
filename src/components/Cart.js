import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

const Cart = ({cartItems, removeFromCart, isCoursePage}) => {

  const[modalIsOpen,setModalIsOpen] = useState(false);

  function clickHandler(){
    setModalIsOpen(true);
    console.log('click');
  }

  function closeModalHandler(){
    setModalIsOpen(false);
}


  const totalCartPrice = () => {
    return cartItems.reduce((total, item) => (total + parseFloat(item.actual_price)),0)
  }

  let price = totalCartPrice();

  return (
    <div className="card my-2">
        <div className="card-header text-uppercase fw-bold text-center">
            your cart details
        </div>
        <div className="card-body" style={{ 'minHeight': '40vh'}}>
            {cartItems && cartItems.length === 0 ? 
            ( <p>Your cart is empty right now. Please add course in the cart from the list</p> )
            : (cartItems.map((item) => (
              <div key={item.id} className='d-flex flex-row justify-content-between my-2 border-bottom'> 
                <p>{item.title}</p>
                <p>Rs {item.actual_price}</p>
                {!isCoursePage &&
                  <button className='btn btn-danger' onClick={() => removeFromCart(item)}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                }
              </div>
            )))}
        </div>
        <div className="card-footer">
            Your Cart Value
            <h3>
                Rs. {totalCartPrice()}
            </h3>
            {isCoursePage && price > 0 && <h5>
              <Link className="nav-link" to="/cart"><button className="btn btn-danger">GO TO CHECKOUT</button></Link>
            </h5>
            }
            {!isCoursePage && price > 0 && <h5>
              <button className="btn btn-danger" onClick={clickHandler}>CHECKOUT</button>
            </h5>
            }
        </div>
        {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null}
        {modalIsOpen ? <Backdrop onClick={closeModalHandler}/> : null}
    </div>


  );
}

export default Cart