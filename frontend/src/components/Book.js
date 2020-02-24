import React, { Component } from "react";

function Book({ cover, title, description, price }) {
  return (
    <div className="card-decks" style={{ display: "inline", height: "25rem" }}>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={cover}
          alt="NO IMG"
          style={imgStyle}
        />
        <div className="card-body">
          {/* <p className="card-text">{description}</p>  STYLE #KAMIL */}
          <h5 className="card-title">{title}</h5>

          <h3 className="card-text">{price} zł</h3>
          <button className="btn btn-success">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  width: "25rem",
  display: "inline-block",
  marginLeft: "1rem",
  marginRight: "1rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  backgroundColor: "#e6e6e6",
  boxShadow: "3px 2px lightgrey"
};

const imgStyle = {
  marginTop: "2rem",
  width: 260,
  height: 390,
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  flexDirection: "column"
};

export default Book;
