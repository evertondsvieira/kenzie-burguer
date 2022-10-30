import Product from "../Product";
import "./style.css";

const ProductsList = ({ products, filteredProducts, handleClick, search }) => {
  return (
    <div className="centralize-product-list">
      {search !== "" ? (
        <h2 className="search">
          <span>Pesquisa para:</span> {search}
        </h2>
      ) : (
        <></>
      )}
      <div className="product-row">
        {filteredProducts.length > 0
          ? filteredProducts.map((item) => (
              <Product
                product={item}
                handleClick={handleClick}
                key={item.id}
                img={item.img}
                name={item.name}
                category={item.category}
                price={item.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              ></Product>
            ))
          : products.map((item) => (
              <Product
                product={item}
                handleClick={handleClick}
                key={item.id}
                img={item.img}
                name={item.name}
                category={item.category}
                price={item.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              ></Product>
            ))}
      </div>
    </div>
  );
};

export default ProductsList;