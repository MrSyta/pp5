import React from "react";
import Header from "./components/layout/Header";
import Body from "./components/layout/Body";
import "./App.css";
import Search from "./components/Search";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Search />
      </div>
    );
  }
}

export default App;
