import React, {useState, useEffect} from "react";
import ProductCard from "./ProductCard.jsx";
import axios from "axios";

const YourOutfitList = () => {


  return (
    <section>
    <h5>YOUR OUTFIT</h5>
    <section>
      <ProductCard />
    </section>
    </section>
  );
}

export default YourOutfitList;