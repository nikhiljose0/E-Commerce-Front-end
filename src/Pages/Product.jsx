import React, { useContext } from "react";
import { ShopContext } from "./../Context/ShopContext";
import { useParams } from "react-router-dom";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
const Product = () => {


//       const {products} = useContext(ShopContext);
//       const { productId } = useParams(); 
//       const product = products.find((e) => e.id === Number(productId));
//   return (
//     <div> 
//       {product && <Breadcrum product={product} />}
//       <ProductDisplay product={product}/>
//       <DescriptionBox/>
//       <RelatedProducts/>
//     </div>
//   );
// };

const { all_product } = useContext(ShopContext);
const { productId } = useParams();

if (!all_product || all_product.length === 0) {
  return <div>Loading...</div>;
}

const product = all_product.find((e) => e.id === Number(productId));

if (!product) {
  return <div>Product not found</div>;
}

return (
  <div>
    <Breadcrum product={product} />
    <ProductDisplay product={product} />
    <DescriptionBox />
    <RelatedProducts />
  </div>
);
}
export default Product;

