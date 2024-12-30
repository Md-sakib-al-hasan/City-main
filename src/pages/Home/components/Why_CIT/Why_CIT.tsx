import { FaGraduationCap } from "react-icons/fa"
import unversity from "../../../../assets/Home/one.jpg"

export default function Why_CIT() {
  return (
    <div className="grid lg:grid-cols-2  gap-20 w-11/12 max-w-[1280px]  mx-auto">
      <div className="relative">
        <span className="absolute mr-10  inset-0 bg-[#f4f6f5] "></span>
       <span className=" relative">
        <img src={unversity} className="w-[95%] ml-[5%] mt-[5%] h-[95%] object-cover" alt="" />
        <span className="absolute bottom-0 sm:py-4 py-1 px-3 sm:px-7 right-[-10px] bg-white flex flex-col items-center shadow-xl">
            <FaGraduationCap className="sm:text-6xl text-4xl text-[#ff4f01] "/>
            <span className="sm:text-xl  capitalize block font-semibold">1 st place</span>
            <span className="capitalize sm:text-lg">best instituted</span>
        </span>
        </span>
      </div>
      <div className="mt-[3%] space-y-3">
         <h3 className="text-lg font-medium text-[#ff4f01] uppercase">Why CIT</h3>
         <h4 className="text-[50px] leading-[65px] text-[#131d3b]  w-11/12 " style={{fontWeight:700}}>Reason For Students At CIT</h4>
         <span className="flex  py-2 gap-2">
            <div className="h-1 w-8 bg-[#ff4f01]"></div>
            <div className="h-1 w-8 bg-blue-100"></div>
          </span>
          <p>As you begin to consider your career goals choices may appear confusing. Go with Modern Technology. Through the use of learning management systems, students can access online resources to get assistance on-demand.</p>
          
           <ul className="space-y-1">
           <li className="">
                 <span className="mt font-semibold text-lg block ">Job placement Focus</span>
                 <span className="flex items-center gap-2">
                    <span className="h-2 w-9/12 bg-[#131d3b] block "></span>
                    <span className="px-4 py-[1px] text-white bg-[#ff4f01]">95%</span>
                 </span>
            </li>
            <li className="">
                 <span className="mt font-semibold text-lg block capitalize ">secure jobs in their field after graduation</span>
                 <span className="flex items-center gap-2">
                    <span className="h-2 w-7/12 bg-[#131d3b] block "></span>
                    <span className="px-4 py-[1px] text-white bg-[#ff4f01]">85%</span>
                 </span>
            </li>
            <li className="">
                 <span className="mt font-semibold text-lg block capitalize ">gain internships during their studies</span>
                 <span className="flex items-center gap-2">
                    <span className="h-2 w-6/12 bg-[#131d3b] block "></span>
                    <span className="px-4 py-[1px] text-white bg-[#ff4f01]">75%</span>
                 </span>
            </li>
           </ul>
          
      </div>
    </div>
  )
}
