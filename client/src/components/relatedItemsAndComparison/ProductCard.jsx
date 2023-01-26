import React, {useState, useEffect} from "react";
import axios from "axios";

const ProductCard = ({productId}) => {
  const initialDefault = {
    'name': '',
    'default?': true,
    'original_price': '',
    'photos': [{
        'thumbnail_url': 'https://www.freeiconspng.com/uploads/no-image-icon-6.png',
        'url': ''
      }],
    'sale_price': null,
    'skus': {},
    'style_id': '',
  };

  const [relatedProduct, setRelatedProduct] = useState({});
  const [defaultStyle, setDefaultStyle] = useState(initialDefault);

  //get info for the current related product (needed for )
  const getRelatedProduct = () => {
    if (productId) { //had to add the condition for initial render when no
                     //productId was provided; adjust when change useEffect
                     //dependencies
      axios.get(`/products/${productId}`)
        .then((product) => {
          setRelatedProduct(product.data);
        })
        .catch((err) => console.error(err))
        .then(() => getDefaultStyles());
    }
  }

  //get default style for the current related product (needed for images and price)
  const getDefaultStyles = () => {
    if (productId) {  //had to add the condition for initial render when no
                      //productId was provided; adjust when change useEffect
                      //dependencies
      axios.get(`/products/${productId}/styles`)
      .then((product) => {
        let defaultStyles = product.data.results.filter((defaultStyle) => defaultStyle['default?']);
        if (defaultStyles.length > 0) {
          setDefaultStyle(defaultStyles[0]);
        } else {
          setDefaultStyle(product.data.results[0]);
        }
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
      {
        !defaultStyle.photos[0].thumbnail_url
        ?
        <img src='https://www.freeiconspng.com/uploads/no-image-icon-6.png'/>
        :
        <img src={`${defaultStyle.photos[0].thumbnail_url}`}/>
      }
      <h4>{relatedProduct.name}</h4>
      <div className="category">{relatedProduct.category}</div>
      <div className="defaultPrice">{relatedProduct.default_price}</div>
      {/*
      {starRating} */}
    </div>
  );
}

export default ProductCard;