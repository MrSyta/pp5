import React from "react";
import { FaBook } from "react-icons/fa";

export default function Header() {
  return (
    <div className="Header" style={headStyle}>
      <h1>
        <div styles={{}} href="../">
          <FaBook
            size={50}     
            //justifyContent="left" //nie działa #Kamil
            color={"white"}
            cursor={"pointer"}
          />{" "}
        </div>
        BookStore.pl
      </h1>
    </div>
  );
}

const headStyle = {
  //marginBottom: "1rem",
  padding: "7px",
  background: "#333",
  color: "#fff",
  alignContent: "left",
  
};
