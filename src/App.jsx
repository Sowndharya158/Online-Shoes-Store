import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Products from "./Products";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);
  function handleReduceProd(item) {
    let index = cart.findIndex((prod) => prod.id === item.id);
    let productVal = cart.find((prod) => prod.id === item.id);
    console.log(productVal);
    if (productVal.qty === 1) {
      console.log(item.id);
      const updatedProd = cart.filter((prod) => prod.id !== item.id);
      console.log(updatedProd);
      console.log("came in");
      setCart(updatedProd);
      return;
    }
    const updatedProd = [...cart];
    updatedProd[index] = {
      ...productVal,
      qty: productVal.qty - 1,
    };
    setCart(() => updatedProd);
  }
  function handleProduct(item) {
    let index = cart.findIndex((prod) => prod.id === item.id);
    if (index === -1) {
      const updatedProd = {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
        qty: 1,
      };
      setCart((items) => [...items, updatedProd]);
    } else {
      let productVal = cart.find((prod) => prod.id === item.id);
      const updatedProd = [...cart];
      updatedProd[index] = {
        id: productVal.id,
        name: productVal.name,
        price: productVal.price,
        img: productVal.img,
        qty: productVal.qty + 1,
      };
      setCart(updatedProd);
    }
  }
  return (
    <>
      <Header />
      <div className="main">
        <Cart cart={cart} decrease={handleReduceProd} addProd={handleProduct} />
        <Products addProd={handleProduct} />
      </div>
    </>
  );
}

export default App;
