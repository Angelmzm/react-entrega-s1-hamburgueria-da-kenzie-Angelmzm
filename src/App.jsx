import { useEffect, useState } from "react";
import MainScreen from "./components/MainScreen";
import "../src/components/css/product.css";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  }, []);

  const [currentSale, setCurrentSale] = useState([]);

  const Toast = () => toast.error("Você já adicionou esse item")

  function handleClick(id) {
    const productFind = products.find((products) => products.id === id);
    const currentSaletFind = currentSale.find(
      (products) => products.id === productFind.id
    );
    if (currentSaletFind) {
      Toast()
    } else {
      setCurrentSale([productFind, ...currentSale]);
    }
  }

  function removeCard(deleteproduct){
    const newList= currentSale.filter(product => product !== deleteproduct)
    setCurrentSale(newList)
   }
  

  return (
    <div className="App">
      <MainScreen
        products={products}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        handleClick={handleClick}
        removeCard={removeCard}
      >
        {" "}
      </MainScreen>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
