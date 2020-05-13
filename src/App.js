import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Nanbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Default from "./components/Default";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/" component={ProductList} />
          <Route component={Default} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
