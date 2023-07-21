import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "../data";

const ProductContext = React.createContext();

function ProductProvider(props) {
  const [products, setProducts] = useState(storeProducts);
  const [detailsProduct, setdetailsProduct] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const setAllProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
      singleItem.inCart = false;
    });

    setProducts(products);
  };

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };

  const handelDetail = (id) => {
    const product = getItem(id);
    setdetailsProduct({ detailProduct, ...product });
  };
  const addToCart = function (id) {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts(products, [...tempProducts]);
    cart.push(product);
    addTotals();
  };
  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const increment = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;

    setCart(tempCart);
    addTotals();
  };
  const decrement = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setCart(tempCart);
      addTotals();
    }
  };
  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];

    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter((item) => {
      return item.id !== id;
    });
    setCart(tempCart);
    setProducts(tempProducts);
    addTotals();
  };

  const clearCart = (id) => {
    setCart([]);
    setAllProducts();
    for (let i = 0; i < storeProducts.length; i++) {
      storeProducts[i].inCart = false;
    }
    setProducts(products);
  };
  const getTotals = () => {
    // const subTotal = this.state.cart
    //   .map(item => item.total)
    //   .reduce((acc, curr) => {
    //     acc = acc + curr;
    //     return acc;
    //   }, 0);
    let subTotal = 0;
    cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return {
      subTotal,
      tax,
      total,
    };
  };
  const addTotals = () => {
    const totals = getTotals();
    setCartSubTotal(totals.subTotal);
    setCartTax(totals.tax);
    setCartTotal(totals.total);
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        detailsProduct,
        cart,
        modalOpen,
        modalProduct,
        cartSubTotal,
        cartTax,
        cartTotal,
        handelDetail,
        addToCart,
        openModal,
        closeModal,
        increment,
        decrement,
        removeItem,
        clearCart,
        addTotals,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
