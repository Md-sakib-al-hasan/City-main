import { FaInstagram, FaTwitter } from "react-icons/fa"
import { RiFacebookFill } from "react-icons/ri"
import image1 from "../../../../../public/man1.jpg"
import image2 from "../../../../../public/man2.jpg"
import image3 from "../../../../../public/man3.jpg"
import image4 from "../../../../../public/woman.jpg"
import princple from "../../../../../public/Princple.jpg"


export default function OurInstructor() {
    const instructiorarray = [
        {img:princple,name:"Md. Arifuzzaman",category:"Principle city Institute of Technology"},
        {img:image3,name:"Abul Kalam Azad",category:"Instructor Mechanical Technology"},
        {img:image4,name:"Nabila Sultana ",category:"Instructor computer technology"},
        {img:image1,name:"MD Rakibul Hasan ",category:"Instructor, Electrical Technology"},
        {img:image2,name:"Md.Habib Hasan",category:"Instructor, Electrical technology"},

    ]
  return (
    <div className="flex flex-col items-center gap-4 p-4">
       <h4 className="text-lg font-semibold text-[#ff4f01] uppercase">Find The Right Instructor</h4>
       <h3 className="lg:text-7xl md:text-5xl text-3xl text-[#131d3b] font-bold capitalize ">Our Expert Instructor</h3>
       <span className="flex  py-2 gap-2">
            <div className="h-1 w-8 bg-[#ff4f01]"></div>
            <div className="h-1 w-8 bg-blue-100"></div>
          </span>

        <ul className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-4 ">
            {
                instructiorarray.map(((item,id) =>  
                    <li key={id} className="text-center relative group">
                <div className="space-y-5">
                  <div className="relative">
                    <img src={item.img} className="h-[300px] object-cover " alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-70 text-white text-xl space-y-4 pl-[80%] items-end pr-5 pt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaTwitter />
                      <RiFacebookFill />
                      <FaInstagram />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-lg font-semibold">{item.name}</span>
                    <span className="block">{item.category}</span>
                  </div>
                </div>
              </li>
              ))
            }
        </ul>

        <span className="">Don’t hesitate, contact us for better help and services. <span className="text-md font-bold underline decoration-1   ">View more Instructor.</span></span>
    </div>
  )
}
