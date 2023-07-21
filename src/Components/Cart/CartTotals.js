import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container" dir="rtl">
        <div className="row ">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => {
                  clearCart();
                }}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title"> subtotal :</span>{" "}
              <strong>$ {cartSubTotal} </strong>
            </h5>
            <h5>
              <span className="text-title"> tax :</span>{" "}
              <strong>$ {cartTax} </strong>
            </h5>
            <h5>
              <span className="text-title"> total :</span>{" "}
              <strong>$ {cartTotal} </strong>
            </h5>

            <Span id="boot-icon" className="bi bi-paypal">
              <PayPal href="https://www.paypal.com/signin">
                <span>
                  <i>
                    Pay<SpanTwo>Pal</SpanTwo>{" "}
                  </i>
                  <Checkout>Checkout</Checkout>
                </span>
                <svg
                  color="rgb(24 148 186)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-paypal"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z" />
                </svg>
              </PayPal>
            </Span>
            <P>The safer, easier way to pay</P>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartTotals;

const Span = styled.span`
  width: 220px;
  display: block;
  background: rgb(255 198 64);
  padding: 5px 15px;
  text-align: center;
  font-size: 20px;
  margin-top: 15px;
  border-radius: 30px;
  font-weight: bold;
  color: rgb(78 94 114);
  cursor: pointer;
`;
const SpanTwo = styled.span`
  color: rgb(24 148 186);
`;
const PayPal = styled.a`
  text-decoration: none;
`;

const Checkout = styled.span`
  color: black;
  font-weight: normal;
  font-size: 16px;
  padding: 0 5px;
`;
const P = styled.p`
  width: 220px;
  text-align: center;
  font-size: 16px;
`;
