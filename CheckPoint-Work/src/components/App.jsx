
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const firstName = ""; 

  const [selectedItems, setSelectedItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Produit 1',
      price: 10.99,
      description: 'Description du Produit 1',
      imageUrl: 'URL_de_l_image_1',
    },
    {
      id: 2,
      name: 'Produit 2',
      price: 19.99,
      description: 'Description du Produit 2',
      imageUrl: 'URL_de_l_image_2',
    },
    {
        id: 3,
        name: 'Produit 1',
        price: 10.99,
        description: 'Description du Produit 1',
        imageUrl: 'URL_de_l_image_1',
      },
      {
        id: 4,
        name: 'Produit 1',
        price: 10.99,
        description: 'Description du Produit 1',
        imageUrl: 'URL_de_l_image_1',
      },
      {
        id: 5,
        name: 'Produit 1',
        price: 10.99,
        description: 'Description du Produit 1',
        imageUrl: 'URL_de_l_image_1',
      },
      {
        id: 6,
        name: 'Produit 1',
        price: 10.99,
        description: 'Description du Produit 1',
        imageUrl: 'URL_de_l_image_1',
      },
  ];

  const addToCart = (product) => {
    setSelectedItems((prevItems) => [...prevItems, product]);
  };

  const buyItems = () => {
    console.log('Articles achetés :', selectedItems);
    resetCart();
  };

  const resetCart = () => {
    setSelectedItems([]);
    setShowCart(false);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const getUniqueItemsCount = (items) => {
    const uniqueItems = new Map();
    items.forEach((item) => {
      const key = `${item.id}-${item.name}`;
      if (uniqueItems.has(key)) {
        uniqueItems.get(key).quantity += 1;
      } else {
        uniqueItems.set(key, { ...item, quantity: 1 });
      }
    });
    return Array.from(uniqueItems.values());
  };

  const ProductCard = ({ product }) => (
    <div className="product">
      <img src={product.imageUrl} alt="Product" className="product-image" />
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>Prix : {product.price} €</p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Ajouter au panier</button>
      </div>
    </div>
  );

  return (
    <div>
      <div className="navbar-top">
        <div className="navbar-container">
          <button onClick={toggleCart}>
            Voir le panier
            {selectedItems.length > 0 && (
              <span className="cart-indicator">{getUniqueItemsCount(selectedItems).length}</span>
            )}
          </button>
        </div>
      </div>

      <div className="app-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {/* <p className="greeting">Bonjour {firstName || 'à tous'} !</p>
        {firstName && <img src="image_url" alt="" className="user-image" />} */}
      </div>

      {showCart && (
        <div className="cart">
          <h3>Panier</h3>
          {getUniqueItemsCount(selectedItems).map((item, index) => (
            <div key={index}>
              <p>
                {item.name} - {item.price} € - Quantité: {item.quantity}
              </p>
              <img
                src={item.imageUrl}
                alt={item.name}
                className="product-image"
                style={{ maxWidth: '50px', maxHeight: '50px' }}
              />
            </div>
          ))}
          <button onClick={buyItems}>Acheter</button>
          <button onClick={resetCart}>Réinitialiser le panier</button>
          <button onClick={toggleCart}>Fermer le panier</button>
        </div>
      )}
    </div>
  );
};

export default App;
