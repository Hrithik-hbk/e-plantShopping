import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
  };

  const styleObjUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
  };

  const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
  };

  const plantsArray = [
    {
      category: '🌿 Indoor Plants',
      plants: [
        {
          name: 'Areca Palm',
          image: 'https://nurserylive.com/cdn/shop/products/nurserylive-plants-areca-palm-dypsis-lutescens-plant-16969055105036_512x512.jpg',
          description: 'Air purifier and pet-friendly.',
          cost: '₹350',
        },
        {
          name: 'Snake Plant',
          image: 'https://m.media-amazon.com/images/I/61aD0rBCFeL._SX679_.jpg',
          description: 'Low light tolerant and great for oxygen.',
          cost: '₹250',
        },
      ],
    },
    {
      category: '🌞 Outdoor Plants',
      plants: [
        {
          name: 'Bougainvillea',
          image: 'https://www.plantshop.me/cdn/shop/files/BougainvilleaPlant4_600x.jpg',
          description: 'Colorful flowering plant, drought resistant.',
          cost: '₹450',
        },
        {
          name: 'Hibiscus',
          image: 'https://m.media-amazon.com/images/I/61M2D2s5YEL._SX679_.jpg',
          description: 'Bright tropical flowers, attracts butterflies.',
          cost: '₹300',
        },
      ],
    },
    {
      category: '🪴 Succulents',
      plants: [
        {
          name: 'Echeveria',
          image: 'https://m.media-amazon.com/images/I/61MH1VpGvTL._SX679_.jpg',
          description: 'Cute and compact, minimal water needed.',
          cost: '₹180',
        },
        {
          name: 'Jade Plant',
          image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/309401445/BF/LT/GH/95868889/jade-plant-500x500.jpg',
          description: 'Symbol of good luck and wealth.',
          cost: '₹220',
        },
      ],
    },
  ];

  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt="logo"
              style={{ height: '50px', marginRight: '10px' }}
            />
            <a href="/" onClick={handleHomeClick} style={{ textDecoration: 'none' }}>
              <div>
                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div style={styleObjUl}>
          <div><a href="#" onClick={handlePlantsClick} style={styleA}>Plants</a></div>
          <div>
            <a href="#" onClick={handleCartClick} style={styleA}>
              <h1 className='cart'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="48" width="48">
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                    fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  </path>
                </svg>
              </h1>
            </a>
          </div>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1>{category.category}</h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-cost">{plant.cost}</div>
                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added ✔' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;

