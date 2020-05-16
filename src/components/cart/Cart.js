import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import Title from "../Title";
import CartColumns from "./CartColumns";
import Emptycart from "./Emptycart";
import CarList from "./CarList";
import CartTotal from "./CartTotal";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(v) => {
            const { cart } = v;
            if (cart.length > 0) {
              return (
                <Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CarList v={v} />
                  <CartTotal v={v} history={this.props.history} />
                </Fragment>
              );
            } else {
              return <Emptycart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
