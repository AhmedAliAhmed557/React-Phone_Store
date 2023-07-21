import React from "react";
import Title from "../Title";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../context";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

function Cart() {
  return (
    <section>
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <Title name="your" title="cart" />
                <CartColumns />
                <CartList value={value} />
                <CartTotals value={value} history={window.history} />
              </React.Fragment>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    </section>
  );
}

export default Cart;
