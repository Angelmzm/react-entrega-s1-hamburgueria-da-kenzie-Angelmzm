import Logo from "../../assets/logo.svg";
import ProductList from "../ProductsList";
import { useEffect, useState } from "react";

const MainScreen = ({ products, handleClick, currentSale, setCurrentSale, removeCard}) => {

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [valueInput, setValueInput] = useState("");

  function handleProducts(event) {
      event.preventDefault();
  }

   function showProducts(){
    const productsFiltrados =   products.filter((product) =>  product.category.toUpperCase().includes(valueInput.toUpperCase()) )
     setFilteredProducts(productsFiltrados)
   }
    
   useEffect( () => {
    setFilteredProducts(products)
   }, [products])
   
  return (
    <div>
      <header>
        {/* <img className="imgLogo" src={Logo} alt="" /> */}
        <h1 className="imgLogo"> BurgerKenzie</h1>
        <form onSubmit={(event) => handleProducts(event)}>
          <input
            className="filterInput"
            type="text"
            placeholder="Digitar pesquisa"
            value={valueInput}
            onChange={(event) => setValueInput(event.target.value)}
          />
          <button className="btnSubmit" type="submit" 
          onClick={showProducts}> Pesquisar </button>
        </form>
      </header>

      <main>
        <ProductList products={products} filteredProducts={filteredProducts}  handleClick={handleClick} currentSale={currentSale} setCurrentSale={setCurrentSale} removeCard={removeCard}  />
      </main>
    </div>
  );
};


export default MainScreen;
