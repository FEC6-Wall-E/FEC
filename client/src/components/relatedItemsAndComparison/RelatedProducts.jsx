import React, {useState, useEffect} from "react";
import ProductCard from "./ProductCard.jsx";
import Comparison from "./Comparison.jsx"
import Carousel from './Carousel.jsx';
import axios from "axios";

function RelatedProducts () { //props that are passed in are {product} or {productId}, {setProductId} for re-rendering the page when a card is clicked
  const [relatedList, setRelatedList] = useState([]);
  const pid = 40346; //hard coded for now

  const getRelatedProducts = () => {
    axios.get(`/products/${pid}/related`) //change pid to product.id when you actually start passing the props
      .then((products) => {
        setRelatedList(products.data); //are we sure that every product has a related product ?
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    getRelatedProducts();
  }, []);

  return (
    <section id="related-products">
    <h5>RELATED PRODUCTS</h5>
    <div className="slider-container">
      {/* {relatedList.map((relatedProduct) => <ProductCard key={relatedProduct} productId={relatedProduct} />)} */}
      <Carousel relatedList={relatedList}/>
    </div>
    </section>
  );
}

export default RelatedProducts;