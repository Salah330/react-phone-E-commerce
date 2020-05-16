import React from "react";
import { Link } from "react-router-dom";
import MyApp from "./PaypalButton";
export default function CartTotal({ v, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = v;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={() => clearCart()}
            >
              Clear cart
            </button>
            <h5>
              <span className="text-title">Subtotsl :</span>
              <strong> $ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">Tax :</span>
              <strong> $ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">Total :</span>
              <strong> $ {cartTotal}</strong>
            </h5>
            <MyApp total={cartTotal} clearCart={clearCart} history={history} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
