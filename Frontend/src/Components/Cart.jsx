import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    setCart(stored ? JSON.parse(stored) : []);
  }, []);

  const removeFromCart = (id) => {
    const updated = cart.filter(item => item._id !== id);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <div className="glass p-10 rounded-2xl shadow-glass border border-primary/10 max-w-md w-full">
          <h2 className="text-3xl font-bold mb-4 text-primary">Your Cart is Empty</h2>
          <p className="mb-6 text-gray-500">Looks like you haven't added any books yet.</p>
          <Link to="/genre">
            <button className="btn btn-accent px-8 py-2 text-lg font-semibold">Browse Books</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-24 mb-12 p-6 glass rounded-2xl shadow-glass border border-primary/10">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Your Cart</h2>
      <ul className="divide-y divide-primary/10">
        {cart.map(item => (
          <li key={item._id} className="flex items-center py-4 gap-4">
            <img src={item.image ? `/` + item.image : '/default-book-cover.jpg'} alt={item.name} className="w-20 h-28 object-cover rounded-xl shadow mr-4 border border-primary/10" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-primary drop-shadow-glow">{item.name}</h3>
              <p>{item.title}</p>
              <div className="text-accent font-bold mt-2">Rs. {item.price}</div>
            </div>
            <button onClick={() => removeFromCart(item._id)} className="ml-4 btn btn-primary px-4 py-1 text-sm">Remove</button>
          </li>
        ))}
      </ul>
      <div className="flex justify-end mt-8">
        <button className="btn btn-accent px-8 py-3 rounded-full font-semibold text-lg">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart; 