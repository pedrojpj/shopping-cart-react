import React from "react";

function Cart({ state }) {
  return <div>Items: {state.items.length}</div>;
}

export default Cart;
