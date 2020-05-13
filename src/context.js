import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
  };
  handleDetail = () => {
    console.log("====================================");
    console.log("hello from detail");
    console.log("====================================");
  };
  handleCart = () => {
    console.log("====================================");
    console.log("hello from cart");
    console.log("====================================");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          handleCart: this.handleCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
