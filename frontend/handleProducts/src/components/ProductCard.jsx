import DeleteBtn from "./DeleteBtn"
import EditBtn from "./EditBtn"

const ProductCard = ({handleGetProduct,setShowProduct,name, image,toggle,setToggle, price, productId,getIdProduct}) => {
    
   
    return (
      <div onClick={()=>{
        handleGetProduct(productId);
        setShowProduct(true);
        }} className="group border-2 cursor-pointer rounded-2xl overflow-hidden bg-black border-indigo-600/40 flex flex-col gap-3 transition-all hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-900/50 hover:-translate-y-2">
        
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            className="w-full h-[260px] transition-transform duration-300 " 
            alt="product image" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <div className="p-4 gap-2 flex flex-col">
          <h1 className="text-xl text-indigo-400 font-bold truncate">{name}</h1>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold text-indigo-100">
              ${Number(price).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex ml-4 items-center p-1 gap-5 mb-2">
          <DeleteBtn  
            productId={productId}
          />
          <EditBtn 
            getIdProduct={getIdProduct}
            toggle={toggle}
            productId={productId}
            setToggle={setToggle}
          />
        </div>
      </div>
    )
  }
  
  export default ProductCard