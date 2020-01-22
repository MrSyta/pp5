import React from 'react';
import Bookshop from './components/Bookshop';
import Header from './components/layout/Header';
import Basket from './components/Basket';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  state = {
    books: []
  }
  
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/books/?format=json')
      .then(res => this.setState({ books: res.data}))
  }

  render() {
  return (
    <div className="App">
      <Header />
      <Basket />
      <Bookshop books={this.state.books}/>      
    </div>
  );
  }
}

export default App;