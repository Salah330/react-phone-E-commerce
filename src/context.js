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
    this.setState(
      () => {
        return { products: nProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotal();
      }
    );
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
    let ncart = [...this.state.cart];
    const selected = ncart.find((item) => item.id === id);
    const index = ncart.indexOf(selected);
    const sProduct = ncart[index];
    sProduct.count = sProduct.count + 1;
    sProduct.total = sProduct.price * sProduct.count;
    this.setState(
      () => {
        return { cart: [...ncart] };
      },
      () => {
        this.addTotal();
      }
    );
  };
  decrement = (id) => {
    let ncart = [...this.state.cart];
    const selected = ncart.find((item) => item.id === id);
    const index = ncart.indexOf(selected);
    const sProduct = ncart[index];
    sProduct.count = sProduct.count - 1;
    if (sProduct.count === 0) {
      this.removeItem(id);
    } else {
      sProduct.total = sProduct.price * sProduct.count;
      this.setState(
        () => {
          return { cart: [...ncart] };
        },
        () => {
          this.addTotal();
        }
      );
    }
  };
  removeItem = (id) => {
    let nProducts = [...this.state.products];
    let ncart = [...this.state.cart];
    ncart = ncart.filter((item) => item.id !== id);
    const index = nProducts.indexOf(this.getItem(id));
    const removedProduct = nProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      () => {
        return { cart: [...ncart], products: [...nProducts] };
      },
      () => {
        this.addTotal();
      }
    );
  };
  clearCart = (id) => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotal();
      }
    );
  };
  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.14;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
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
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
