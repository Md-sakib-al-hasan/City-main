
import { AiOutlineMail} from "react-icons/ai"
import map from "../../../../assets/contactus/map.jpg"

import { TfiLocationPin } from "react-icons/tfi"
import { FaPhoneAlt } from "react-icons/fa"


export default function Contact() {
  return (
    <div className="w-11/12 max-w-[1280px] z-30  mx-auto relative ">
      <div className="relative ">
      <img
        src={map}
        alt="Overlay Example"
        className="w-full lg:h-[600px] md:h-[1100px] h-[1150px] object-cover "
      />
      <div className="absolute inset-0 bg-white opacity-90"></div>
    </div>
    <ul className="text-[#131d3b] absolute lg:top-1/2  top-10   lg:-translate-y-1/2 lg:w-1/3  space-y-8">
      <h2 className="text-4xl font-bold capitalize">We're happy that you are trying to know about our institute</h2>
      <li className="space-y-1">
        <span className="flex gap-2 items-center"> <TfiLocationPin size={22} className="text-[#ff4f01]" /> <span className="text-xl  text-[#131D3B] font-semibold">Location</span> </span>
        <p>Permanent Campus- City University, khagan, Birulia, Savar, Dhaka, Bangladesh</p>
      </li>
      <li className="space-y-1">
        <span className="flex gap-2 items-center"> <AiOutlineMail size={22} className="text-[#ff4f01]" /> <span className="text-xl  text-[#131D3B] font-semibold">Email</span> </span>
        <p>cit50444@gmail.com</p>
      </li>
      <li className="space-y-2">
        <span className="flex gap-2 items-center"> <FaPhoneAlt size={22} className="text-[#ff4f01]" /> <span className="text-xl  text-[#131D3B] font-semibold">Toll Free Number</span> </span>
        <p>01531-985549</p>
      </li>
    </ul>
    <div className="bg-[#ff4f01] absolute lg:bottom-[-82px] bottom-10 lg:left-[40%] lg:translate-x-0 left-1/2 lg:w-auto sm:w-11/12 w-full  -translate-x-1/2 p-14  ">
    <form action=" " className="focus:text-[#666D81] text-md space-y-12">
            <h1 className="capitalize font-bold sm:text-4xl text-[19px] pb-7 text-white">Want to talk? Let`s do it!</h1>
            <span className="sm:flex xl:gap-10   justify-between my-4">
              <span className="flex  items-center sm:my-auto my-5 "><input className=" w-full xl:w-[310px] md:w-[250px] lg:w-[200px] border-b-[1px] border-white    focus:outline-none text-white  placeholder:text-white  bg-[#ff4f01] placeholder:font-semibold pb-2" type="text" name="name" placeholder="your name" /></span>
              <span className="flex items-center sm:my-auto my-5 gap-2"><input className=" w-full xl:w-[310px] md:w-[250px] lg:w-[200px] border-b-[1px] border-white  pb-2 focus:outline-none text-white  placeholder:text-white  bg-[#ff4f01]  placeholder:font-semibold" type="email" name="email" placeholder="your Email" /></span>
            </span>
            <span className="sm:flex  justify-between my-4">
              <span className="flex items-center sm:my-auto my-5 gap-2"><input className=" w-full md:w-[250px] xl:w-[310px] lg:w-[200px] border-b-[1px] border-white  pb-2 focus:ring-0 focus:outline-none bg-[#ff4f01] text-white  placeholder:text-white  placeholder:font-semibold no-spinner" type="tel" name="number" placeholder="your Phone" /></span>
              <span className="flex items-center gap-2"><input className=" w-full md:w-[250px]  xl:w-[310px] lg:w-[200px]  border-b-[1px] border-white  pb-2 focus:outline-none text-white  placeholder:text-white  bg-[#ff4f01]  placeholder:font-semibold" type="text" name="subject" placeholder="Subject" /></span>
            </span>
            <span className="sm:flex items-center gap-2">
              <input className="border-b-[1px] w-full  sm:my-auto my-5 xl:w-[670px] lg:w-[420px]  border-white  sm:pb-20 pb-3 focus:outline-none bg-[#ff4f01] text-white  placeholder:text-white  placeholder:font-semibold" type="text" name="message" placeholder="message" /></span>

            <button className="text-white sm:w-auto w-full hover:bg-white hover:text-blue-950  px-6 py-2  font-semibold text-lg border-solid border-white border-[1px] flex items-center justify-center space-x-2"> Send A Request </button>
          </form>
          
    </div>
    </div>
  )
}
