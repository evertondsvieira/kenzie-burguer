import "./style.css";

const Product = ({ img, name, category, price, handleClick, product }) => {
  return (
    <div className="product-centralize">
      <div className="product-card">
        <div className="product-img">
          <img src={img} alt={name}></img>
        </div>
        <div className="product-centralize-informations">
          <h2 className="product-name"> {name} </h2>
          <p className="product-category"> {category} </p>
          <span className="product-price"> {price} </span>
          <div className="product-centralize-button">
            <button
              className="product-button"
              onClick={() => handleClick(product)}
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;