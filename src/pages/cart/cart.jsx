import React, { useContext } from 'react'
import { PRODUCTS } from '../../productsList'
import {ShopContext} from '../../context/shop-context';
import { CartItem } from './cart-item'
import './cart.css'
import { useNavigate } from 'react-router-dom'; //used to navigate to ur desired page instead of useHistory
import { NumberWithCommas } from '../../NumberWithCommas';

export const Cart = () => {
  const {cartItems, getCartTotalAmount} = useContext(ShopContext);
  const totalAmount = getCartTotalAmount()
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0){
            return <CartItem data={product} />
          }
        })}
      </div>
      { totalAmount > 0 ?
        <div className="checkout">
        <p>Subtotal: ₦<NumberWithCommas number ={totalAmount} /></p>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      : <h1>Your Cart is Empty</h1>
       }
    </div>
  )
}
