import React, { Component } from "react";
import Book from "./Book";
import Search from "./Search";

function Bookshop({ books }) {
  console.log(books);
  if (books.length) {
    return books.map(bookObj => {
      // console.log("books", bookObj); inaczej to by było bookObj.id bookObj.title etcc
      const { id, title, cover, description, price } = bookObj;
      return (
        <Book
          key={id}
          cover={cover}
          title={title}
          description={description}
          price={price}
        />
      );
    });
  } else {
    return <h1>empty</h1>;
  }
}

export default Bookshop;
