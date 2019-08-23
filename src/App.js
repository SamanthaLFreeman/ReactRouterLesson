import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home'
import Creatures from './Creatures';
import Details from './Details'
import './App.css';
import unicornData from './data/unicorn-data';
import dolphinData from './data/dolphin-data';
import puppyData from './data/puppy-data';
import sharkData from './data/shark-data';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      unicorns: unicornData,
      puppies: puppyData,
      dolphins: dolphinData,
      sharks: sharkData
    }
  }

  render() {
    return (
      <main className="App">
        <header>
          <NavLink to="/unicorns" className="nav">Unicorn</NavLink>
          <NavLink to="/dolphins" className="nav">Dolphins</NavLink>
          <NavLink to="/puppies" className="nav">Puppies</NavLink>
          <NavLink to="/sharks" className="nav">Sharks</NavLink>
        </header>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/unicorns' render={() => <Creatures data={this.state.unicorns} /> } />
        <Route exact path='/dolphins' render={() => <Creatures data={this.state.dolphins} />} />
        <Route exact path='/puppies' render={() => <Creatures data={this.state.puppies} />} />
        <Route exact path='/sharks' render={() => <Creatures data={this.state.sharks} />} />
        
        <Route path='/unicorns/:id' render={({ match }) => {
          const foundUnicorn = this.state.unicorns.find(unicorn => unicorn.id === parseInt(match.params.id));
          return foundUnicorn && <Details {...foundUnicorn} />
        }} />
        <Route path='/dolphins/:id' render={({ match }) => {
          const foundDolphin = this.state.dolphins.find(dolphin => dolphin.id === parseInt(match.params.id));
          return foundDolphin && <Details {...foundDolphin} />
        }} />
        <Route path='/puppies/:id' render={({ match }) => {
          const foundPuppy = this.state.puppies.find(puppy => puppy.id === parseInt(match.params.id));
          return foundPuppy && <Details {...foundPuppy} />
        }} />
        <Route path='/sharks/:id' render={({ match }) => {
          const foundShark = this.state.sharks.find(shark => shark.id === parseInt(match.params.id));
          return foundShark && <Details {...foundShark} />
        }} />
      </main>
    );
  }
}
