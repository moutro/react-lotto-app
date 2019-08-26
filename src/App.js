import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Ball from '../../lotto/src/Ball';
import Lottery from "./Lottery";
import './App.css';

class App extends Component {
  render(){
    return (
      <HashRouter basename='/'>
      <div className="App">
        <ul>
          <Lottery />
          <Lottery title="Mini Daily" maxNum={10} numBalls={4} />
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
      </HashRouter>
    );
  } 
}

const Home = () => <div> <h2></h2></div>
const About = () => <div> <h2></h2></div>

export default App;

