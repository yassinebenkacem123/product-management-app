import React, { useContext,useState } from 'react'
import { ProductContext } from '../App'
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';
import Toast from '../components/Toast';
const HomePage = () => {
  const {products,serverMessage} = useContext(ProductContext);
  const [selectedProduct,setSelectedProduct] = useState(null)
  const [toggle,setToggle] = useState(false);
  function getIdProduct(id)
  {
    setSelectedProduct(id);
  }
  return (
  <>
      <section className={`flex ${toggle?'opacity-20':'opacity-100'} flex-col w-full h-screen items-center mt-10 gap-2`}>
        <h1 className='text-3xl font-bold text-white'>Current Products 🛒</h1>
        {
          products.length>0?
          <div className='p-2 grid max-lg:grid-cols-2 lg:grid-cols-4 gap-4'>
            {products.map((product,index)=><ProductCard 
            toggle={toggle}
            setToggle={setToggle}
            key={index} 
            getIdProduct={getIdProduct}
            productId={product._id}
            image={product.image} 
            price={product.price} 
            name={product.name} />)}
          </div>
          :
          <div className='flex gap-2 mt-2'>
            <h1 className='text-gray-400 text-lg'>No Products Found! </h1> 
            <Link to='create' className='hover:underline text-fuchsia-500'>Create a Product</Link>
          </div>
        }
        
        
      </section>
      {serverMessage.message && <Toast />}
      {toggle && 
        <Modal 
          toggle={toggle}
          setToggle={setToggle}
          productId={selectedProduct}
        />
      }
  </>)}

export default HomePage