import React from 'react';
import './NewCollection.css'; // Corrected import path
import new_collection from '../Assets/new_collections'; // Ensure correct import path and file name
import Item from '../Item/Item'; // Assuming Item represents individual collection items

const NewCollection = () => {
  return (
    <div className='NewCollection'>
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collection">
        {new_collection.map((product, i) => (
          <Item
            key={i}
            id={product.id}
            name={product.name}
            oldPrice={product.old_price}
            newPrice={product.new_price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
