import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, addToCart, removeFromCart, deleteFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <React.Fragment key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p className="cart-count">
                    <button onClick={() => removeFromCart(item._id)}>-</button>
                    <span style={{ margin: "0 10px" }}>{cartItems[item._id]}</span>
                    <button onClick={() => addToCart(item._id)}>+</button>
                  </p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => deleteFromCart(item._id)} className="cross">x</p>
                </div>
                <hr />
              </React.Fragment>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Cart;