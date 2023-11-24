// components/App.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button, Pagination, Modal, Form, Navbar, Nav } from 'react-bootstrap';
import { FaShoppingCart, FaPlus } from 'react-icons/fa';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css';

const App = () => {
  const [firstName, setFirstName] = useState('Rudy');
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });
  const [products, setProducts] = useState([]);

  const productsPerPage = 1;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Fonction pour diviser les produits en lignes de 3
  const splitProductsIntoRows = (products) => {
    const rows = [];
    for (let i = 0; i < products.length; i += 3) {
      rows.push(products.slice(i, i + 3));
    }
    return rows;
  };

  // Diviser les produits en lignes de 3
  const productRows = splitProductsIntoRows(currentProducts);

  useEffect(() => {
    // Récupérer les produits existants dans les cookies ou utiliser les produits de base
    const storedProducts = JSON.parse(getCookie('storedProducts')) || getProducts();
    setProducts(storedProducts);

    // Récupérer les articles du panier depuis les cookies
    const storedCartItems = JSON.parse(getCookie('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    document.cookie = `cartItems=${JSON.stringify(updatedCart)}; path=/`;
  };

  // Sauvegarder les produits dans les cookies pour les réafficher après le redémarrage
  useEffect(() => {
    document.cookie = `storedProducts=${JSON.stringify(products)}; path=/`;
  }, [products]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const openCart = () => setShowCart(!showCart);

  // ... Autres fonctions existantes ...

  const handleAddItemClick = () => setShowAddItemModal(true);

  const handleAddItemClose = () => setShowAddItemModal(false);

  const handleAddItemSave = () => {
    const updatedProducts = [...products, newItem];
    setProducts(updatedProducts);
    setShowAddItemModal(false);
    setNewItem({
      name: '',
      price: '',
      description: '',
      image: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* ... Autres parties du composant ... */}

      {/* Modale pour ajouter un nouvel article */}
      <Modal show={showAddItemModal} onHide={handleAddItemClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un nouvel article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le nom"
                name="name"
                value={newItem.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            {/* ... Autres champs du formulaire ... */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddItemClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleAddItemSave}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;

// Fonction auxiliaire pour récupérer les cookies
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};
