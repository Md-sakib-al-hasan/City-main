
import Student from './student/Student'

import image from '../../../../../public/man4.jpg'
import image1 from '../../../../../public/man5.jpg'
import image2 from '../../../../../public/man6.jpg'
import image4 from '../../../../../public/man7.jpg'

export default function HappStudent() {
  return (
   <div className='space-y-5'>
     <h5 className="uppercase text-md text-center text-[#ff4f01]">
            you can learn
          </h5>
          <h2 className="text-5xl capitalize text-center py-4 font-bold text-[#131d3b]">
            About our CIT technology
          </h2>
          <span className="flex justify-center py-2 gap-2">
            <div className="h-1 w-8 bg-[#ff4f01]"></div>
            <div className="h-1 w-8 bg-blue-100"></div>
          </span>
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 gap-2 md:grid-cols-2 grid-cols-1  w-11/12 max-w-[1280px]  mx-auto '>
       <Student name="sakib al hasn" course="web developer" image={image} ></Student>
       <Student name="Roman khan" course="software developer" image={image1} ></Student>
       <Student name="Tanjila aktar" course="Database developer" image={image2} ></Student>
       <Student name="Saske uchiha" course="web" image={image4} ></Student>
       
    </div>
   </div>
  )
}
