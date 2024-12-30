import { Link, NavLink } from "react-router-dom"

// image 

import logo from "../../../assets/Header/logo.jpg"
import Pantagoninfo from "../Pantagoninfo/Pantagoninfo"

import NotificationMenu from "../natification/natification"



export default function Navigatiobar() {


   const navigationlist = ["Home",
   "About us",
    "Gallery",
    "courses",
   "Contact us","sign in","login"]
   
  return (
    <div className="navbar flex justify-between  w-11/12 max-w-[1280px]  mx-auto">
    <div className=" lg:w-fit w-full flex justify-between ">
      <div className="dropdown">
        <div tabIndex={0} role="button" className=" lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {
            navigationlist.map((lsit,id) => <li key={id}><NavLink to={`/${lsit === "Home"?"":lsit.replace(/\s+/g, "_")}`}>{lsit}</NavLink></li>)
      

          }
          <NotificationMenu></NotificationMenu>
        </ul>
      </div>
      <figure className=" lg:w-16 w-12 btn-ghost text-xl "><Link to="/"><img  src={logo} alt="logo" /></Link></figure>
    </div>
    <div className=" hidden lg:flex pr-20">
      <ul className=" flex  px-1">
       {
        navigationlist.map((list,id) => <li key={id} className=" capitalize  px-4 font-semibold text-[17px] "><NavLink to={`/${list === "Home"?"":list.replace(/\s+/g, "_")}`}  className={({ isActive, isPending }) =>
          isPending ? "text-green-400" : isActive ? "text-[#ff4f01]" : "text-[#131D3B] hover:text-[#ff4f01]"
        } >{list}</NavLink></li>)
        
       }
        <NotificationMenu></NotificationMenu>
       <Pantagoninfo></Pantagoninfo>
     
       
      </ul>
    </div>
    
  </div>
  )
}
