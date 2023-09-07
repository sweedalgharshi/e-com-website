import "./Home.scss";

import { useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
const Home = () => {
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const res = await fetchDataFromApi("/api/categories?populate=*");
    console.log(res);
  };
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
          <Products headingText={"Popular Products"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
