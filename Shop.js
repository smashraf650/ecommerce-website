import React, { useState } from 'react';
import { async } from './../../../node_modules/react-router/dist/development/data-D4xhSy90.d';

export default function CartSystem() {
  // প্রোডাক্টগুলোর তালিকা
  const products = [
    { id: 1, name: 'টি-শার্ট', price: 500 },
    { id: 2, name: 'জিন্স প্যান্ট', price: 1200 },
    { id: 3, name: 'ঘড়ি', price: 800 }
  ];

  // কার্ট স্টেট: এটি একটি অ্যারে যা কার্টে থাকা প্রোডাক্টগুলো জমা করবে
  const [cartItems, setCartItems] = useState([]);

  // কার্টে প্রোডাক্ট যোগ করার ফাংশন
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    alert(`${product.name} কার্টে যোগ করা হয়েছে!`);
  };

  // কার্টের মোট দাম বের করার লজিক 
  // reduce() ফাংশনটি ব্যবহার করে কার্টে থাকা প্রতিটি প্রোডাক্টের দাম যোগ করা হয়েছে
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={styles.container}>
      <h2>আমাদের প্রোডাক্টসমূহ</h2>
      
      {/* প্রোডাক্ট লিস্ট */}
      <div style={styles.productList}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <h3>{product.name}</h3>
            <p>মূল্য: ৳{product.price}</p>
            <button  style={styles.buyButton} onClick={() => addToCart(product)}>
              Buy Now
            </button>
          </div>
          
        ))}
      </div>

      {/* কার্ট সেকশন */}
      <div style={styles.cartSection}>
        <h2>আপনার কার্ট</h2>
        {cartItems.length === 0 ? (
          <p>কার্ট খালি আছে</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - ৳{item.price}
                </li>
              ))}
            </ul>
            <hr />
            <h3>মোট দাম: ৳{totalPrice}</h3>
           
          </div>
        )}
      </div>
    </div>
  );
}

// স্টাইলিং (ডিজাইনটি সুন্দর করার জন্য)
const styles = {
  container: { padding: '20px', fontFamily: 'Arial' },
  productList: { display: 'flex', gap: '20px', flexWrap: 'wrap' },
  card: { border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '200px' },
  buyButton: { backgroundColor: '#ff5722', color: '#fff', border: 'none', padding: '10px 15px', cursor: 'pointer', borderRadius: '4px' },
  cartSection: { marginTop: '40px', borderTop: '2px solid #000', paddingTop: '20px' }
};

 