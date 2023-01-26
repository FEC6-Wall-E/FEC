import React, {useState} from "react";

const RelatedProducts = ({product}) => {
  // const [relatedList, setRelatedList] = useState([]);

  // const getRelatedProducts = () => {
  //   axios.get(`/products/${product.id}/related`)
  //     .then((products) => {
  //       setRelatedList(products);
  //     })
  //     .catch((err) => console.error(err));
  // }

  return (
    <h5>RELATED PRODUCTS</h5>
    <section>
      Related product cards will go here
    </section>
    <h5>YOUR OUTFIT</h5>
    <section>
      Outfit cards will go here
    </section>
  );
}

export default RelatedProducts;