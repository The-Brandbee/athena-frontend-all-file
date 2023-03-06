import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (

      <div>
        <Router basename="/">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Footer />
        </Router>
      </div>
    );
  }
}


