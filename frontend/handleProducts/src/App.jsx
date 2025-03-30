import { BrowserRouter, NavLink,Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import CreatedPage from './pages/CreatedPage'
import { useState,useEffect } from 'react'
import HomePage from './pages/HomePage'
import { createContext } from 'react'
const ProductContext = createContext()
const App = () => {
  const [serverMessage, setServerMessage] = useState({}); 
  const [products, setProducts] = useState([]);
  const [refresh,setRefresh] = useState(0);
  useEffect(()=>{
    fetch('api/products')
    .then(res=>res.json())
    .then((data)=>{
      if(data.data !== products)
      {
        setProducts(data.data)
      }
      }).catch(err=>console.error('Error occur the moment of the fetching: ',err))
  },[refresh]);
 
  
  return (
  <ProductContext.Provider value={
    {
      setRefresh,
      products,
      setProducts,
      serverMessage,
      setServerMessage
    }}> 
    <BrowserRouter>
    <Routes>
      <Route  element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="create" element={<CreatedPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </ProductContext.Provider>   
  )
}
export default App;
export {ProductContext}