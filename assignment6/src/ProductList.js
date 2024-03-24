import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.title} />
          <div className="product-details">
            <p className="product-name">{product.title}</p>
            <p className="product-rate">${product.price}</p>
          </div>
        </div>
      ))}
      {}
      {products.length % 3 !== 0 && (
        <div className="empty-product"></div>
      )}
      {products.length % 3 === 2 && (
        <div className="empty-product"></div>
      )}
    </div>
  );
};

export default ProductList;
