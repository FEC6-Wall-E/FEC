import React, {useState, useEffect} from "react";
import ProductCard from "./ProductCard.jsx";
import Comparison from "./Comparison.jsx"
import axios from "axios";

const RelatedProducts = () => { //props that are passed in are {product} or {productId}, tbd
  const [relatedList, setRelatedList] = useState([]);
  const pid = 40344; //hard coded for now

  const getRelatedProducts = () => {
    axios.get(`/products/${pid}/related`) //change pid to product.id when you actually start passing the props
      .then((products) => {
        setRelatedList(products.data);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    getRelatedProducts();
  }, []);

  return (
    <section>
    <h5>RELATED PRODUCTS</h5>
    <section>
      {relatedList.map((relatedProduct) => <ProductCard key={relatedProduct} productId={relatedProduct}/>)}
    </section>
    </section>
  );
}

export default RelatedProducts;