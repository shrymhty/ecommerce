import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="header-content">
            <h2>
                Order your favourite food here
            </h2>
            <p>
                Choose from a diverse menu featuring a variety of cuisines, freshly prepared and delivered straight to your door. Enjoy fast, reliable service and delicious meals anytime, anywhere!
            </p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header