
const Product = ({ product, handleClick }) => {

    return(
        <div className="containerCards"> 
            <img className="cardImg" src={product.img} alt="" />
            <h1 className="cardTitulo"> {product.name} </h1>
            <p className="cardCategory"> {product.category} </p>
            <p className="cardPrice"> {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
            <button 
            className="btnAdd"
            onClick={() => handleClick(product.id)}
            > Adicionar ao carrinho </button>
        </div>
    )
}

export default Product

