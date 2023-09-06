import "./CartItem.scss";

import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/speaker-prod-1.webp";
const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={prod} alt="product-img" />
        </div>
        <div className="product-details">
          <span className="name">product name</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>2</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>x</span>
            <span className="highlight">&#8377;1234</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
