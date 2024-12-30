import { Link } from "react-router-dom"
import unversity from "../../../../assets/Home/unversitystudent.jpg"

export default function SeeDetail() {
  return (
    <div className=" ">
        <div className="relative  text-center ">
      <img src={unversity} className="h-[500px] w-full object-cover" alt="" />
      <div className="absolute inset-0 bg-[#ff4f01] opacity-90">
      <div className="sm:w-8/12  max-w-[1280px]  w-full space-y-5 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <h3 className="uppercase text-lg text-white font-semibold">We make a difference</h3>
        <h4 className="sm:text-5xl text-3xl text-white font-bold capitalize leading-[55px]">you are one click away from beginning your journey at CIT</h4>
        <button className=" btn btn-outline rounded-none text-white"><Link to="/courses">see Deatils</Link></button>
      </div>
      </div>
    </div>
    </div>
  )
}
