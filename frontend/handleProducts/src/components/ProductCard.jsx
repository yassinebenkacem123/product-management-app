import { useState } from "react";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import { BsThreeDotsVertical } from "react-icons/bs";

const ProductCard = ({
  setShowProduct,
  handleGetProduct,
  name,
  image,
  toggle,
  setToggle,
  price,
  productId,
  getIdProduct,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="group relative border-2 rounded-2xl overflow-hidden bg-black border-indigo-600/40 flex flex-col gap-3 transition-all hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-900/50 hover:-translate-y-2">
      <div className="absolute right-2 top-2 z-10">
        <BsThreeDotsVertical
          onClick={(e) => {
            e.stopPropagation();
            handleGetProduct(productId);
            setShowMenu(!showMenu);
          }}
          className="text-2xl cursor-pointer text-gray-300 hover:text-indigo-500 transition-colors bg-black/50 rounded-full p-1"
        />
        
        {showMenu && (
          <div
            className="absolute right-0 top-8 bg-gray-800 w-40 rounded-lg shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              onClick={() => {
                setShowProduct(true);
                setShowMenu(false);
              }}
              className="px-4 py-3 text-sm text-gray-300 hover:bg-indigo-600/20 hover:text-indigo-400 cursor-pointer transition-colors border-b border-gray-700/50"
            >
              View Details
            </div>
          </div>
        )}
      </div>

      <div className="relative overflow-hidden">
        <img
          src={image}
          className="w-full h-[260px] object-cover transition-transform duration-300"
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
        <DeleteBtn productId={productId} />
        <EditBtn
          getIdProduct={getIdProduct}
          toggle={toggle}
          productId={productId}
          setToggle={setToggle}
        />
      </div>
    </div>
  );
};

export default ProductCard;