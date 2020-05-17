import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./login";
import Header from "./header";
import Register from "./register";
import Home from "./home";
import ProductListing from "./product-listing";
import AddProduct from "./add-product";
import ProductDetails from "./product-details";
import EditProduct from "./edit-product";
class App extends Component {
  state = {
    cartItem: []
  };
  addToCartHandler = item => {
    const cartItem = [...this.state.cartItem];
    if (cartItem.indexOf(item) === -1) {
      cartItem.push(item);
      this.setState({ cartItem });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Header cartItem={this.state.cartItem} />
        <Switch>
          <Route path="/product-details/:id" component={ProductDetails} />
          <Route path="/add-product" component={AddProduct} />
          <Route
            path="/product-listing"
            render={props => (
              <ProductListing addToCartHandler={this.addToCartHandler} />
            )}
          />
          <Route path="/edit-product/:id" component={EditProduct}></Route>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Login} exact />
          <Redirect from="/" exact to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
