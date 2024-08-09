import React, { useContext } from "react";
import '../pages/CSS/shopcategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item  from "../components/Item/Item";

const ShopCategory = ({ banner, ShopCategory }) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="Shop-Category">
      <img className="ShopCategory-banner" src={banner} alt="Shop Category Banner" />
      <div className="ShopCategory-indexSort">
        <p>
          <span className="ShopCategory-indexSort-index">1 to 12</span>out of 36
        </p>
        <div className="ShopCategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort Icon" />
        </div>
      </div>
      <div className="ShopCategory-products">
        {all_product && all_product.length > 0 ? (
          all_product.map((product, i) => 
            product.ShopCategory === ShopCategory ? (
              <Item
                key={i}
                id={product.id}
                name={product.name}
                oldprice={product.old_price}
                newprice={product.new_price}
                image={product.image}
              />
            ): null
          )
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      <div className="ShopCategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;