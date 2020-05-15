import React from "react";
import CartItem from "./CartItem";
export default function CarList({ v }) {
  const { cart } = v;
  return (
    <div className="container-fluid">
      {cart.map((item) => {
        return <CartItem item={item} key={item.id} v={v} />;
      })}
    </div>
  );
}
