import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Nanbar";
export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-title text-center pt-5">
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h2>page not found</h2>
            <Link to="/">
              <ButtonContainer className="mt-3">
                back to products
              </ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
