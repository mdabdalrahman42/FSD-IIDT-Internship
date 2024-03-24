import React from 'react';

const Menu = ({ options, onSelectOption }) => {
  return (
    <div>
      <h3>Company</h3>
      <ul class="menu">
        <li key="all" onClick={() => onSelectOption(null)}>All</li>
        {options.map(option => (
          <li key={option} onClick={() => onSelectOption(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
