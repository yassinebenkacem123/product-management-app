import { useState,useContext } from "react"
import { createProduct } from "../server/serverInteract";
import { ProductContext } from "../App";
import Toast from "../components/Toast";
const CreatedPage = () => {
  const {serverMessage,setServerMessage,setRefresh} = useContext(ProductContext);
  const [productInfo, setProductInfo] = useState({
    name:"",
    price:"",
    image:"",
  })
  function handleProductInfo(event)
  {
    const {name,value} = event.target;
    setProductInfo({
        ...productInfo,
        [name]:value
    })
  }
  async function handleCreatePorduct()
  {
    setServerMessage(await createProduct(productInfo));
    setRefresh(prev=>prev+1);
    setProductInfo({name:"",price:"",image:""});
  }
  return (  
  <div className="w-full h-screen gap-4 flex flex-col mt-8 items-center">
    <h1 className="font-extrabold text-white text-3xl ">Create New Product</h1>
    <fieldset className="fieldset w-md gap-3 bg-base-200 border border-base-300 p-4 rounded-box">
      <label className="fieldset-label text-lg">Product Name</label>
      <input onChange={handleProductInfo} type="text" value={productInfo.name} name="name" className="input w-full " placeholder="Product Name" />
      
      <label className="fieldset-label text-lg">Price</label>
      <input  onChange={handleProductInfo} type="Number" value={productInfo.price}  name="price" className="input w-full" placeholder="Price" />

      <label className="fieldset-label text-lg">Image URL</label>
      <input onChange={handleProductInfo} type="text" value={productInfo.image} name="image" className="input w-full" placeholder="Image URL" />
      <button className="btn btn-primary mt-4" onClick={()=>{
        handleCreatePorduct()}}>Add Product</button>
    </fieldset>

    {serverMessage.message && <Toast/>}
  </div>
 
  )
}

export default CreatedPage