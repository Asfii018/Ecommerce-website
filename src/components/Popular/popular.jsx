import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item'; // Ensure correct path to Item component

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular In Women</h1>
      <hr />
      <div className="Popular_Item">
        {data_product.map((product, i) => (
          <Item
            key={i}
            id={product.id}
            name={product.name}
            oldPrice={product.old_price}
            newPrice={product.new_price}
            image={product.image} // Ensure image prop is passed correctly
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
