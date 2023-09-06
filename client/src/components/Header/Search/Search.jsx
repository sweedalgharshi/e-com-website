import "./Search.scss";

import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/speaker-prod-1.webp";
const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for product" />
        <MdClose onClick={() => setShowSearch((showSearch) => !showSearch)} className="close-btn" />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="product-img" />
            </div>
            <div className="product-details">
              <span className="name">product name</span>
              <span className="desc">product description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
