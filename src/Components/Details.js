import React from "react";
import { ProductConsumer } from "./context";
import { ButtonContainer } from "./ButtonContainer";
import { Link } from "react-router-dom";

function Details() {
  return (
    <ProductConsumer>
      {(value) => {
        const { id, title, img, info, price, company, inCart } =
          value.detailsProduct;
        return (
          <div className="container py-5">
            {/* start title  */}
            <div className="row align-items-center">
              <div className="col-10 mx-auto-text-center text-slanted text-blue my-y5">
                <h1>{title}</h1>
              </div>
            </div>
            {/* end title  */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img src={img} className="img-fluid" alt="" />
              </div>
              {/* prdoduct info */}
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h1>model : {title}</h1>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by : <span className="text-uppercase">{company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price : <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product :
                </p>
                <p className="text-muted lead">{info}</p>
                {/* buttons */}
                <div>
                  <Link to="/">
                    <ButtonContainer>back to products</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    // cart={value.toString()}
                    className="yello"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "in cart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

export default Details;
