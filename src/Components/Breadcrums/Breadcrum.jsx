import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = ({ product }) => {
  if (!product) {
    // Show nothing or a loader while product data is not ready
    return <div className="breadcrum">Loading...</div>;
  }

  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {product.category || "Unknown"} <img src={arrow_icon} alt="" />{" "}
      {product.name || "Product"}
    </div>
  );
};

export default Breadcrum;
