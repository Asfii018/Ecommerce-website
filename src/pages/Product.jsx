import React, { useContext } from "react";
import { ShopContext } from '../context/ShopContext';
import { useParams } from "react-router-dom";
 //import all_product from "../components/Assets/all_product";
import Breadcrum from '../components/Breadcurms/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProduct/RelatedProducts';
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
