import "./Home.scss";

import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
const Home = () => {
  const { categories, setCategories, products, setProducts } = useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCategories = async () => {
    const res = await fetchDataFromApi("/api/categories?populate=*");
    console.log(res);
    setCategories(res);
  };

  const getProducts = async () => {
    const res = await fetchDataFromApi("/api/products?populate=*");
    console.log(res);
    setProducts(res);
  };
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products headingText={"Popular Products"} products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
