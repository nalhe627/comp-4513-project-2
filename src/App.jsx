import { useState, createContext, useEffect } from 'react'
import {CartContextProvider} from './components/CartContext.jsx';
import './App.css'

const App = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json')
      .then(res => {if (!res.ok) {throw new Error('Fetch Failed')}
        else {return res.json()}})
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);
  return (
    <CartContextProvider>
      <Header/>
      <Browser/>
      <CartDisplay/>
    </CartContextProvider>
  )
}

export default App
