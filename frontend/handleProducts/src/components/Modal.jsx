import { useContext, useState } from "react";
import { updateProduct } from "../server/serverInteract";
import { ProductContext } from "../App";
const Modal = ({setToggle,productId}) => {
    const {setRefresh,setServerMessage} = useContext(ProductContext)
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
    async function handleUpdatePorduct()
    {
        setServerMessage(await updateProduct(productInfo,productId));
        setRefresh(prev=>prev+1)
        setProductInfo({name:"",price:"",image:""});

    }
  return (
    <main className="h-screen inset-0 flex justify-center items-center absolute z-100 w-full">
        <div
         className="w-[500px] flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg rounded-2xl"
         >
        <div className="">
                <div className="text-center p-3 flex-auto justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 flex items-center text-gray-600 mx-auto"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                        clipRule="evenodd"
                    />
                </svg>
                    <h2 className="text-xl font-bold py-4 text-gray-200">Do you really want to Udpate this Product?</h2>
                </div>
                <form className="flex flex-col gap-3">
                    <label className="fieldset-label text-lg">Product Name</label>
                    <input onChange={handleProductInfo} type="text" value={productInfo.name} name="name" className="input w-full " placeholder="Product Name" />
                    
                    <label className="fieldset-label text-lg">Price</label>
                    <input  onChange={handleProductInfo} type="Number" value={productInfo.price}  name="price" className="input w-full" placeholder="Price" />

                    <label className="fieldset-label text-lg">Image URL</label>
                    <input onChange={handleProductInfo} type="text" value={productInfo.image} name="image" className="input w-full" placeholder="Image URL" />

                </form>
                <div className="p-2 mt-4 flex w-full gap-2 text-center space-x-1 md:block">
                    <button
                        onClick={()=>{setToggle(prev=>!prev)}}
                        className="mb-2 md:mb-0 cursor-pointer bg-gray-700 px-10 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-xl hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={()=>{
                            handleUpdatePorduct();
                            }}
                        className="bg-fuchsia-900 hover:bg-fuchsia-800 cursor-pointer px-10 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2  border-fuchsia-400 text-white rounded-xl transition ease-in duration-300"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    </main>

  )
}

export default Modal