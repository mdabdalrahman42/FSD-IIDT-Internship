import React, { useState } from 'react';
import ProductList from './ProductList';
import Menu from './Menu';
import SearchBar from './SearchBar';
import products from './Product';
import './App.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const options = [...new Set(products.map(product => product.company))];

  const filteredProducts = products.filter(product => {
    return (
      (!selectedOption || selectedOption === 'All' || product.company === selectedOption) &&
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

  const handleSearch = query => {
    setSearchQuery(query);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <SearchBar onSearch={handleSearch} />
        <Menu options={options} onSelectOption={handleOptionSelect} />
      </div>
      <div className="main-content">
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default App;
