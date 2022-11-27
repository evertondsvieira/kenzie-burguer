import './App.css';
import './reset.css';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart'

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [input, setInput] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, [])

  function showProducts(product){
    setFilteredProducts(products.filter((item) => {
      return item.name.toLowerCase().includes(product.toLowerCase())|| item.category.toLowerCase().includes(product.toLowerCase())
    }))
    setSearch(input)
  }

  const sum = currentSale.reduce((valorAnterior, valorAtual) => {
    return valorAnterior += valorAtual.price
  }, 0)

  function handleClick(product){
    if(currentSale.indexOf(product) === -1){
      setCurrentSale([...currentSale, product])
      toast.success("Item adicionado")
    } else {
      toast.error("O item já está no carrinho")
    }
  }
  
  return (
    <>
      <Header showProducts={showProducts}
      setInput={setInput}
      input={input}/>
      <div className='main-container'>
        <ToastContainer />
        <ProductsList 
        search={search}
        products={products}
        filteredProducts={filteredProducts}
        handleClick={handleClick}
        />
        <Cart 
        sum={sum}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        />
      </div>
    </>
  )
}

export default App;