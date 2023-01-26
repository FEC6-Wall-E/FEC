import React, {useState, useEffect} from "react";
import axios from "axios";

const ProductCard = ({productId}) => {
  const [relatedProduct, setRelatedProduct] = useState({});
  const [defaultProduct, setDefaultRelatedProduct] = useState({});
  // const [relatedProductImage, setDefaultRelatedProduct] = useState('');

  const getRelatedProduct = () => {
    if (productId) { //had to add the condition for initial render when no
                     //productId was provided; adjust when change useEffect
                     //dependencies
      axios.get(`/products/${productId}`)
        .then((product) => {
          // console.log('product.data', product.data);
          setRelatedProduct(product.data);
        })
        .catch((err) => console.error(err))
        .then(() => getDefaultRelatedProduct());
    }
  }

  const getDefaultRelatedProduct = () => {
    if (productId) { //had to add the condition for initial render when no
      //productId was provided; adjust when change useEffect
      //dependencies
      axios.get(`/products/${productId}/styles`)
      .then((product) => {
        let newDefaultProduct;
        if (product.data.results.filter((newDefaultProduct) => newDefaultProduct['default?']).length > 0) {
          // console.log('bingo');
          newDefaultProduct = product.data.results.filter((newDefaultProduct) => newDefaultProduct['default?'])[0];
        } else {
          // console.log('woops');
          newDefaultProduct = product.data.results[0];
        }
        console.log('newDefaultProduct ', newDefaultProduct);
        // console.log('defaultProductPhotos', newDefaultProduct.photos[0].thumbnail_url);
        setDefaultRelatedProduct(newDefaultProduct);
      })
      .catch((err) => console.error(err));
    }
  }

  useEffect(() => {
    getRelatedProduct();
    // getDefaultRelatedProduct();
  }, []);

  return (
    <div>
      {/* {defaultProduct.photos[0].thumbnail_url ? <img scr={`${defaultProduct.photos[0].thumbnail_url}`}/> : null} */}
      <h4>{relatedProduct.name}</h4>
      <div className="category">{relatedProduct.category}</div>
      <div className="defaultPrice">{relatedProduct.default_price}</div>
      {/*
      {price}
      {starRating} */}
    </div>
  );
}

export default ProductCard;