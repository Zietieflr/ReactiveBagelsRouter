import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import BagelContainer from './components/BagelContainer'
import FavoritesContainer from './components/FavoritesContainer';
import Navigation from './components/Navigation';


class App extends Component {

  state = {
    bagels: [],
    favorites: []
  }
  componentDidMount(){
    fetch('http://bagel-api-fis.herokuapp.com/bagels')
    .then(response => response.json())
    .then(bagels => this.setState({bagels}))
  }

  addToFavorites = (bagel) => {
    if(!this.state.favorites.find(bag => bag.id === bagel.id)){
    this.setState({favorites: [...this.state.favorites,bagel]})
    }
  }

  removeFromFavorites = (bagel) => {
    let newFavs = this.state.favorites.filter(bag => bag.id !== bagel.id)
    this.setState({favorites: newFavs})
  }


  render(){
  return (
    <Router>
    <div className="App">
      <Navigation />
      <h1>This is the Bagels App</h1>
      <img src='https://images.unsplash.com/photo-1518562923427-19e694fbd8e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />

      <Switch>
        <Route path='/favorites'>
          <FavoritesContainer favorites={this.state.favorites} action={this.removeFromFavorites}/>
        </Route>
        <Route path='/container'>
          <h2>Bagels Container</h2>
          <BagelContainer bagels={this.state.bagels} action={this.addToFavorites}/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
  }
}

export default App;