import "./style.css";

const Cart = ({ currentSale, sum, setCurrentSale }) => {
  function handleRemove(id) {
    const removeFilter = currentSale.filter((product) => product.id !== id);
    setCurrentSale(removeFilter);
  }

  return (
    <div className="centralize-cart">
      <h2 className="cart-title">Carrinho de compras</h2>
      <ul className="centralize-ul">
        {currentSale.map((product, index) => (
          <li className="cart-styled" key={index}>
            <div className="cart-background-color">
              <img className="cart-img" src={product.img} alt="" />
            </div>
            <div className="centralize-name-and-remove">
              <h2 className="cart-name">{product.name}</h2>
              <p className="cart-category">{product.category}</p>
            </div>
            <button
              className="cart-button-remove"
              onClick={() => handleRemove(product.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {currentSale.length === 0 && (
        <div className="cart-empty">
          <h2 className="carty-empty-text">Sua sacola está vazia</h2>
          <p className="carty-empty-description">Adicione itens</p>
        </div>
      )}

      {currentSale.length > 0 && (
        <div className="cart-container-total">
          <div className="centralize-cart-total">
            <h2 className="cart-total">Total</h2>
            <span className="cart-soma">
              {sum.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}{" "}
            </span>
          </div>
          <div className="centralize-cart-button-all">
            <button
              className="cart-remove-all"
              onClick={() => setCurrentSale([])}
            >
              Remover Todos
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
