import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/features/productSlice";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Products />
    </div>
  );
};

export default Home;
