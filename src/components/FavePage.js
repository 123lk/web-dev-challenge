import React, { Component } from 'react';
import List from './List';
import NavBar from './NavBar';
import SearchForm from './SearchForm';

class FavePage extends Component {
  render () {
    return (
      <div className="FavePage">
      <h3>FavePage component</h3>
      <NavBar />
      <SearchForm />
      <List />
      </div>
    );
  }
}

export default FavePage;