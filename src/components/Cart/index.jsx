import { useEffect, useState } from "react";

const Cart = ({ currentSale, setCurrentSale, removeCard}) => {


  return (
    <div className="containerCart">
      <h1 className="tituloCart"> Carrinho de compras</h1>
      <div className="containerCardCart">
        {
          currentSale.length > 0 ? (
            currentSale.map((product) => (
              <CartCard key={product.id} product= {product} currentSale={currentSale} removeCard={removeCard}/>
            ))
          ) : (
          <div className="containerVazio">
            <h1 className="h1Vazio">Sua sacola está vazia</h1>
            <p className="pVazio">Adicione itens</p>
          </div>
          )
        }
      </div>
     <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale} removeCard={removeCard} product />
    </div>
  );
};

export default Cart;

const CartCard = ({ removeCard,product }) => {
  return (
    <div className="cardCart">
      <img className="imgCart" src={product.img} alt="" />
      <div>
        <h1 className="nameCart"> {product.name}</h1>
        <p className="categoryCart"> {product.category}</p>
        <button className="btnDelete" onClick={() => removeCard(product)}> remover</button>
      </div>
    </div>
  );
};

const CartTotal = ({currentSale, setCurrentSale }) => {

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartTotal(
      currentSale.reduce((acc, product) => {
        return acc + +product.price;
      }, 0)
    );
  }, [currentSale]);


  return (
    <div className="containerTotal">
      <div className="cartTotal" >
        <p className="tituloTotal"> Total</p>
        <p> {cartTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
      </div>
      <button className="btnDeleteAll" onClick={() => setCurrentSale([])} > Remover Todos</button>
    </div>
  );
};

