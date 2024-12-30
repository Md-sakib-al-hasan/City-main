import { FaGreaterThan } from "react-icons/fa";
import silbg from "../../assets/contactus/backgorundcon.jpg"
import { Link } from "react-router-dom";

const  Banner =({ title }: { title: string }) => {
  return (
    <div className="relative">
    <img
      src={silbg}
      alt="background_imge"
      className="w-full h-52 object-cover"
    />
    {/* Overlay with reduced opacity */}
    <div className="absolute inset-0 bg-[#131D3B] opacity-60"></div>
    {/* Centered text on top of the overlay */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold space-y-2 text-[#ffffff]">
      <h4 className="text-5xl font-bold">{title}</h4>
      <span className="flex items-center gap-1 text-lg justify-center">
        <Link to="/">Home</Link>
        <FaGreaterThan />
        <span className="text-[#ff4f01]">{title}</span>
      </span>
    </div>
  </div>
  )
}

export default Banner;
