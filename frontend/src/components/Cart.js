import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  return (
    <div style={cartStyle}>
      <a href="../">
        {" "}
        <FaShoppingCart />{" "}
      </a>
    </div>
  );
}

const cartStyle = {
  size: "50%",
  color: "black",
  textAlign: "left",
  marginLeft: "0.5rem",
  cursor: "pointer"
};
