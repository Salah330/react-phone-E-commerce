import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Nanbar";
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            price,
            img,
            info,
            company,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-blue text-slanted my-5 ">
                  <h1 className="text-danger">{title}</h1>
                </div>
              </div>
              {/* end of title */}
              <div className="d-flex mx-auto">
                <div className=" col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="" className="img-fluid" />
                </div>
                <div className=" col-10 mx-auto col-md-6 text-capitalize my-3">
                  <h2>model : {title}</h2>
                  <h4 className="text-upercase text-muted text-title mt-3 mb-2 ">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    price : <span>$</span>
                    {price}
                  </h4>
                  <h5 className="text-capitalize text-body text-black font-weight-bold mt-4 mb-1">
                    {" "}
                    some info about product :
                  </h5>
                  <p className="text-capitalize text-body text-black-50 font-weight-bold  lead">
                    {info}
                  </p>
                  <Link to="/">
                    <ButtonContainer>back to products</ButtonContainer>
                  </Link>

                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.handleCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "in cart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
