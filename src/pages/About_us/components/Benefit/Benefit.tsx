import support from "../../../../assets/About_us/support.jpg"
import orintation from "../../../../assets/About_us/orientation.jpg"
import library from "../../../../assets/About_us/libery.jpg"
import { FaGraduationCap } from "react-icons/fa"

const Benefit =() => {
    const benefitarray = [
      {title:"Get Support Funding",img:library},
      {title:"Student Orientation",img:orintation},
      {title:"Career Opportunities",img:support},
    ]
  return (
    <div className="w-11/12 max-w-[1280px]  mx-auto ">
      <ul className="grid lg:grid-cols-3 md:grid-cols-2   space-x-3 ">
        {
          benefitarray.map((item,id) => <li key={id} className="relative border-b-[10px] border-[#ff4f01] "> <span className="absolute  gap-4 bottom-0 flex items-center bg-white font-semibold text-lg text-[#131d3b]">{item.title}<FaGraduationCap size={50} className="bg-[#131d3b] hover:bg-[#ff4f01] px-2 text-white"/></span> <img className="" src={item.img} alt="" /></li>)
        }
      </ul>
    </div>
  )
}

export default Benefit