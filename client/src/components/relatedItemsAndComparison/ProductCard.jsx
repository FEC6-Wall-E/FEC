import React, {useState} from "react";

const ProductCard = ({productId}) => {
  const [relatedProduct, setRelatedProduct] = useState({});

  const getProduct = () => {
    axios.get(`/products/${product}/styles`)
      .then((product) => {
        setProduct(product.data);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      {/* {image}
      {category}
      {expanded name}
      {price}
      {starRating} */}
    </div>
  );
}

export default ProductCard;