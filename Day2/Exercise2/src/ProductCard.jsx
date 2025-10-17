import React, { useState } from 'react';
import './product.css';

const FALLBACK_IMAGE = 'https://via.placeholder.com/800x600?text=No+image';

const ProductCard = ({ name, price, image, inStock = true }) => {
  const [imgSrc, setImgSrc] = useState(image || FALLBACK_IMAGE);

  return (
    <div className={`product-card ${inStock ? 'in-stock' : 'out-of-stock'}`}>
      <div className="image-wrap">
        <img
          src={imgSrc}
          alt={name}
          onError={() => setImgSrc(FALLBACK_IMAGE)}
        />
        {!inStock && <div className="overlay" aria-hidden="true" />}
      </div>

      <div className="product-body">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">₦{price.toLocaleString()}</p>
        <div className="stock">
          {inStock ? (
            <span className="stock-yes">In Stock ✓</span>
          ) : (
            <span className="stock-no">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
