import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id, name, description, image, price}) => {

    // const [itemCount, setItemCount] = useState(0);
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className="food-item">
        <div className="food-item-image-container">
            <img src={image} alt="" className='food-item-image'/>  
            {!cartItems[id] 
                ? <button className="add" onClick={() => addToCart(id)}>+</button>
                : <div className="food-item-counter">
                    <button className="remove-button" onClick={() => removeFromCart(id)}>-</button>
                    <p>{cartItems[id]}</p>
                    <button className="add-button" onClick={() => addToCart(id)}>+</button>
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-description">
                {description}
            </p>
            <p className="food-item-price">
                ${price}
            </p>
        </div>
    </div>
  )
}

export default FoodItem