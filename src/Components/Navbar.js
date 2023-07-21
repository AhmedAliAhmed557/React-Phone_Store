import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
import { ButtonContainer } from "./ButtonContainer";
import styled from "styled-components";

function Navbar() {
  return (
    <NavWrapper className="navbar navbar-dark navbar-expand-sm px-sm-5">
      <Holder>
        <Link to="/">
          <img src={Logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-item-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
      </Holder>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus" />
          </span>
          my cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
}

export default Navbar;

const NavWrapper = styled.nav`
  background-color: var(--mainBlue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  @media (max-width: 767px) {
    justify-content: space-around;
  }
`;

const Holder = styled.div`
  display: inherit;
`;
