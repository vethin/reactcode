import { useState } from 'react'

function ShoppingCart() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const removeFromCart = () => {
    setCartCount(prev => prev - 1);
  };
  const clearAll = () => {
    setCartCount(0);
  }
  

  return (
    <div className="shoppingcart">
      <p>Cart Items: {cartCount}</p>
      <button onClick={addToCart}>Add Item</button>
      <button onClick={removeFromCart}>Remove Item</button>
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
}

export default ShoppingCart;