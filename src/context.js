import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    });
  };
  getItem = (id) => {
    const productt = this.state.products.find((item) => item.id === id);
    return productt;
  };
  handleDetail = (id) => {
    const item = this.getItem(id);
    this.setState(() => {
      return { detailProduct: item };
    });
  };
  handleCart = (id) => {
    let nProducts = [...this.state.products];
    const index = nProducts.indexOf(this.getItem(id));
    const product = nProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return { products: nProducts, cart: [...this.state.cart, product] };
    });
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = (id) => {
    console.log("hello increment");
  };
  decrement = (id) => {
    console.log("hello decrement");
  };
  removeItem = (id) => {
    console.log("hello remove");
  };
  clearCart = (id) => {
    console.log("hello remove");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          handleCart: this.handleCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.increment,
          removeItem: this.increment,
          clearCart: this.increment,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
