import {  NavLink } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";
import { ProductContext } from '../App';
const Navbar = () => {
  return (
    <div className="navbar lg:px-20 max-lg:px-10 flex justify-between bg-base-300 shadow-sm">
        <NavLink to = "." end className="btn btn-ghost text-2xl font-extrabold text-white ">
            PRODUCT STORE<IoStorefront />
        </NavLink>
        <NavLink to = 'create' className={({isActive})=>isActive?"bg-gray-700 w-[50px] p-3 text-center rounded-full":`hover:bg-gray-700 bg-gray-800 w-[50px] p-3 text-center rounded-full`}><FaCartPlus className='text-2xl'/></NavLink>        
    </div>
  )
}

export default Navbar