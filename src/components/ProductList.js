import React, { Component, Fragment } from "react";
import { storeProducts } from "../data";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
export default class ProductList extends Component {
  state = {
    products: storeProducts,
  };
  render() {
    return (
      <Fragment>
        <div className="py-5 ">
          <div className="container ">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {(v) => {
                  return v.products.map((product) => {
                    return <Product product={product} key={product.id} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
