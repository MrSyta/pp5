import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <div className="Header" style={headStyle}>
      <h1>
        <a href="../">
          <FaShoppingCart
            size={50}
            horizontalAlign="left"
            // justifyContent="left" //nie działa #Kamil
            color={"white"}
            cursor={"pointer"}
          />{" "}
        </a>
        Book Store
      </h1>
    </div>
  );
}

const headStyle = {
  marginBottom: "1rem",
  padding: "7px",
  background: "#333",
  color: "#fff",
  horizontalAlign: "center"
};
