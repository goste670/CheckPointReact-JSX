// components/Name.jsx
import React from 'react';

const Name = ({ className }) => {
  return (
    <div className={className}>
      <h4>Nom du Produit</h4>
    </div>
  );
};

export default Name;

// components/Price.jsx
import React from 'react';

const Price = ({ className }) => {
  return (
    <div className={className}>
      <h4>Prix du Produit</h4>
    </div>
  );
};

export default Price;

// components/Description.jsx
import React from 'react';

const Description = ({ className }) => {
  return (
    <div className={className}>
      <h4>Description du Produit</h4>
    </div>
  );
};

export default Description;

// components/Image.jsx
import React from 'react';

const Image = ({ className }) => {
  return (
    <div className={className}>
      <h4>Image du Produit</h4>
    </div>
  );
};

export default Image;
