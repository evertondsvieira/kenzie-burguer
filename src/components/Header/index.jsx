import "./style.css";

const Header = ({ setInput, input, showProducts }) => {
  return (
    <header className="header">
      <div className="centralize-title">
        <h1 className="title-one">Burguer</h1>
        <h2 className="title-two">Kenzie</h2>
      </div>
      <div className="centralize-button-header">
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          id="input"
          className="filter-input"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button className="header-button" onClick={() => showProducts(input)}>
          Pesquisar
        </button>
      </div>
    </header>
  );
};

export default Header;