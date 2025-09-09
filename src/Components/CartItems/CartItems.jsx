import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

function CartItems() {
  const { all_product, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext);
  console.log(getTotalCartAmount)
  return (
    <div className="cartItems">
      {/* Header Row */}
      <div className="cartItems-format-main">
        <p className="pp">Products</p>
        <p className="pp">Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {/* Cart Items */}
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartItems-format">
                {/* Product Image */}
                <img
                  src={e.image}
                  alt={e.name}
                  className="cartItem-product-icon"
                />
                {/* Product Title */}
                <p>{e.name}</p>
                {/* Price */}
                <p>${e.new_price}</p>
                {/* Quantity */}
                <button className="cartItem-quantity">{cartItems[e.id]}</button>
                {/* Total */}
                <p>${e.new_price * cartItems[e.id]}</p>
                {/* Remove Button */}
                <img
                  src={remove_icon}
                  alt="remove"
                  className="cartItem-remove-icon"
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
       <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartItems-total-item">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartItems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartItems-promobox">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
