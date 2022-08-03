import Product from "../Product";
import Cart from "../Cart";

const ProductList = ({ products, filteredProducts, handleClick, currentSale, setCurrentSale, removeCard }) => {
  return (
    <div className="containerMain">
      <div className="map">
        {filteredProducts.map((product) => (
          <Product key={product.id}  product={product} handleClick={handleClick}/>
        ))}
      </div>
      <div>
        <Cart
          id={products.id}
          name={products.name}
          category={products.category}
          price={products.price}
          img={products.img}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          removeCard={removeCard}
        />
      </div>
    </div>
  );
};

export default ProductList;

