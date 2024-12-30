import { FaCheck, FaGraduationCap, FaUserGraduate } from "react-icons/fa"
import romanpiller from "../../../../assets/Home/roman.jpg"
import groupstudy from "../../../../assets/Home/group_study.jpg"
import Graduation from "../../../../assets/Home/grasition.jpg"
import { HiOutlineUserGroup } from "react-icons/hi"

export default function Skilledteacherandsupport() {
  const information = [
    {icon:<FaUserGraduate />,number:1500,title:"Satisfied Students"},
    {icon:<HiOutlineUserGroup />,number:800,title:"Qualified Teachers"},
    {icon:<FaGraduationCap></FaGraduationCap>,number:200,title:"Honor & Awards Win"},
    {icon:<FaGraduationCap></FaGraduationCap>,number:400,title:"Trending Courses"},
  ]
  return (
   <div className="relative ">
    
    <div className="relative">
      <img src={romanpiller} className="sm:h-[700px] h-[850px] w-full object-cover" alt="" />
      <span className="absolute inset-0 bg-[#131d3b] opacity-90 text-white">
       <ul className="sm:flex sm:space-y-0 space-y-5 justify-evenly mt-20  w-11/12 max-w-[1280px]  mx-auto">
        {
           information.map((item,id) => 
           <li key={id} className=" flex flex-col items-center space-y-2">
             <span className="text-6xl">{item.icon}</span>
             <span className="text-5xl font-bold text-[#ff4f01]">{item.number}+</span>
             <span>{item.title}</span>
           </li>)
        }
       </ul>
       
      </span>
    </div>
      {/* two part */}
     <div className="w-11/12 lg:flex justify-end  hidden ">
     <img src={groupstudy} className="w-3/5   mt-[-400px]   relative z-10 " alt="" />
     </div>
      {/* three part */}
     <div className="w-11/12 max-w-[1280px] sm:mt-0 mt-20  mx-auto">
     <div className="sm:p-14 bg-[#f4f6f9] lg:w-9/12  sm:mt-[-300px] z-20 relative  ">
      <ul className="space-y-5">
      <li className="space-y-2">
       <h4 className="uppercase text-lg text-[#ff4f10]">About CIT</h4>
       <h2 className="sm:text-5xl text-2xl font-bold text-[#131d3b]">Skilled Teachers And Support Staff</h2>
       <span className="flex  py-2 gap-2">
            <div className="h-1 w-8 bg-[#ff4f01]"></div>
            <div className="h-1 w-8 bg-blue-100"></div>
          </span>
       </li>
       <li className="sm:grid grid-cols-12  gap-8">
         <figure className="col-span-4">
            <img src={Graduation} alt="" />
         </figure>
         <span className="block col-span-8 space-y-4">
          <h5 className="text-lg capitalize font-semibold text-[#131d3b]">Overall Great Academic Organization</h5>
          <p>Teachers are the heart and soul of our daily operations. Our teachers are among the finest, well trained, and most dedicated tutors. Group of cultivated teachers and Fast management is heart of any academy to run. The administrative staff is playing an increasingly central role in higher education. Combination of overall good staff leads to the growth of changes in the delivery of higher education.</p>
         </span>
       </li>
       <li className="sm:space-y-3  ">
         <span className="sm:flex justify-between sm:space-y-0 space-y-2">
          <span className="flex items-center gap-2"><FaCheck className="text-[#ff4f01]" /> <span className="text-lg font-semibold capitalize ">Computer Software Lab</span></span>
          <span className="flex items-center gap-2"><FaCheck className="text-[#ff4f01]" /> <span className="text-lg font-semibold capitalize ">Hardware Lab</span></span>
          <span className="flex items-center gap-2"><FaCheck className="text-[#ff4f01]" /> <span className="text-lg font-semibold capitalize ">Network Lab</span></span>
         </span>
         <span className="sm:flex justify-between sm:space-y-0 space-y-2 ">
          <span className="flex items-center gap-2"><FaCheck className="text-[#ff4f01]" /> <span className="text-lg font-semibold capitalize ">Electrical Measurement Lab</span></span>
          <span className="flex items-center gap-2"><FaCheck className="text-[#ff4f01]" /> <span className="text-lg font-semibold capitalize "> Weaving Lab   </span></span>
          <span className="flex items-center gap-2"><FaCheck className="text-[#ff4f01]" /> <span className="text-lg font-semibold capitalize ">Spinning Lab</span></span>
         </span>
       </li>
      </ul>
     </div>
     </div>
   </div>
  )
}
