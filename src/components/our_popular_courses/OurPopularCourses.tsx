


import SliderComponent from "./SliderComponent/SliderComponent"

import childrenliberay from "../../assets/components/ourpupolercourses/childrenreadliberay.jpg"
import woman from "../../assets/components/ourpupolercourses/owman.jpg"
import libearyone from "../../assets/components/ourpupolercourses/libearyone.jpg"
import libearytwo from "../../assets/components/ourpupolercourses/libearytwo.jpg"
import libearythree from "../../assets/components/ourpupolercourses/libearythree.jpg"
import { Link } from "react-router-dom"


export default function  OurPopularCourses() {


  const courseinfo = [
    {    path:"computer",
        img: childrenliberay,
        name: "Computer Science and Engineering",
        category: "Learn about cutting-edge technologies like AI, data science, and software development to build the future of computing."
    },
    {   path:"electronic",
        img: libearytwo,
        name: "Electrical Engineering",
        category: "Explore innovations in power systems, renewable energy, and circuit design to create efficient electrical solutions."
    },
    {   path:"textile",
        img: woman,
        name: "Textile Engineering",
        category: "Discover advanced textile production techniques, sustainable materials, and industry-driven solutions."
    },
    {   path:"civil",
        img: libearythree,
        name: "Civil Engineering",
        category: "Master the art of designing and constructing infrastructure, from bridges to urban development projects."
    },
    {   path:"Mechanical",
        img: libearyone,
        name: "Mechanical Technology Engineering",
        category: "Delve into mechanics, robotics, and thermal systems to innovate in the field of mechanical engineering."
    }
];

  return (
    <div className="flex flex-col items-center gap-4 p-4">
       <h4 className="text-lg font-semibold text-[#ff4f01] uppercase">YOU CAN LEARN IT</h4>
       <h3 className="lg:text-6xl md:text-5xl text-3xl text-[#131d3b] font-bold capitalize ">Popular Diploma Courses</h3>
       <span className="flex  py-2 gap-2">
            <div className="h-1 w-8 bg-[#ff4f01]"></div>
            <div className="h-1 w-8 bg-blue-100"></div>
          </span>

  
        <div>
            <SliderComponent instructiorarray={courseinfo} ></SliderComponent>
        </div>

        <span className="">Don’t hesitate, contact us for better help and services. <span className="text-md font-bold underline decoration-1   "><Link to="/courses">View more Instructor.</Link></span></span>
    </div>
  )
}
