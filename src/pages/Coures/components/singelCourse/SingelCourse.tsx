import Rating from '@mui/material/Rating';

import { useState } from 'react';
import { FaCheck, FaCircle } from 'react-icons/fa';
import { IoMdLock } from 'react-icons/io';
import { IoDocumentTextOutline } from 'react-icons/io5';
import lifelat from "../../../../assets/courses/lifelet.png"

const SingelCourse =() => {
     const [activestate,setActivestate] = useState<number>(0)

     const what_will_learn = [
        {title:"Visual Learning with theory",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy tex an unknown printer took."},
        {title:"Learn basic logical programms",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy tex an unknown printer took dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting."},
        {title:"Error Solution and implenentation",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy tex an unknown printer took dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting."},
    ]
    const requirements = [
        "Understand what visual learning is for and how it is used",
        "Need knowledge of Photoshop and basic knowledge of InDesign",
        "Preferable to have experience with PS, Sketch, InDesign, and Adobe XD",
        "Preferable to understand word embeddings"
      ];
      
      const lessons = [
        "Introduction Of Programming language",
        "Installation and Set-Up Guide",
        "Working with String, Boolean Functions",
        "Working on Form Controls",
        "Error Solutions and code debugging",
        "Working with live site",
        "Module Handling",
        "Replie"
      ];

      const categories = [
        {title:"child Eductions",size:3},
        {title:"Data Science",size: 2},
        {title:"Geheral konowlge",size:2},
        {title:"Gmat Classes",size:1},
        {title:"Medical Science",size:1},
        {title:"Web Design",size:1},
      ]
      
    return (
        <div className="lg:grid grid-cols-4  gap-5 w-11/12 max-w-[1280px]  mx-auto">
            <div className="col-span-3 ">
             <img src="https://i.ibb.co.com/5kfsrJB/health2.jpg" alt="demo" className="h-[500px] w-full object-cover " />
             <ul className='text-lg font-bold text-[#131d3b] sm:flex xl:gap-16 gap-6 bg-[#f4f6f9] mt-5  sm:space-y-0 space-y-10'>
                <li className='flex gap-2 '>
                <img src="https://i.ibb.co.com/rfjkrLZ/images.jpg" alt="" className='w-[60px]  h-auto object-cover' />
                <span className=''>
                    <span className="capitalize block">Instructor</span>
                    <span className="capitalize">John Done</span>
                </span>
                </li>
                <li className='h-16 w-[1px] bg-gray-200 sm:block hidden '></li>
                <li>
                 <span ><Rating name="half-rating" defaultValue={2.5} precision={0.5} size="small" /></span>
                <span className='block'>122 Students Enrolled</span>
                </li>
                <li className='h-16 w-[1px] bg-gray-200 sm:block hidden '></li>
                <li>
                    <span className='block'>Course Duration</span>
                    <span className='text-sm'>8 week</span>
                </li>
                <li className='h-16 w-[1px] bg-gray-200  sm:block hidden'></li>
                <li>
                   <span className='font-bold'>price</span>
                   <span className='block text-[#ff4f01]'>$ 45.00</span>
                </li>
             </ul>
          
             {/* overviw curruim instrctor and reviews all start here */}

            <div>
            <ul className='capitalize font-bold sm:text-lg  text-[#131d3b] bg-[#f4f6f9] mt-16 flex justify-evenly items-center text-center'>
                <li onClick={() => setActivestate(0)} className={`relative   after:left-[-72px] after:right-[-75px] after:top-[-20px]  after:h-1 after:bg-[#ff4f01] ${activestate== 0?" sm:after:absolute text-gray-500":" after:relative"}`} >
                   overview
                </li>
                <li  className='h-14 w-[1px] bg-gray-200 '></li>
                <li onClick={() => setActivestate(1)} className={`relative after:left-[-72px] after:right-[-75px] after:top-[-20px]  after:h-1 after:bg-[#ff4f01] ${activestate== 1?" sm:after:absolute text-gray-500":" after:relative"}`}>
                    curriculum
                </li>
                <li className='h-14 w-[1px] bg-gray-200 '></li>
                <li onClick={() => setActivestate(2)} className={`relative after:left-[-72px] after:right-[-75px] after:top-[-20px]  after:h-1 after:bg-[#ff4f01] ${activestate== 2?" sm:after:absolute text-gray-500":" after:relative"}`}>
                    Instructor
                </li>
                <li className='h-14 w-[1px] bg-gray-200 '></li>
                <li onClick={() => setActivestate(3)} className={`relative after:left-[-72px] after:right-[-75px] after:top-[-20px]  after:h-1 after:bg-[#ff4f01] ${activestate== 3?" sm:after:absolute text-gray-500":" after:relative"}`}>
                    Reviews
                </li>
             </ul>
             <div className={`${activestate==0?"block":"hidden"} mb-5`}>
               <h4 className='text-2xl font-bold py-5'>What Will Learn?</h4>
               <p className='pb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy tn an unknodard dummy text ever since the 1500s, when an unknowwn printer took a galley of type and scrambled it to make a type shas been the industry’s standard dummy text ever since the 1500s, look like readable English when an un loream ipsum.</p>
                <ul>
                     {
                        what_will_learn.map((item,id) =>  <li key={id}>
                        <span className='flex gap-2 items-center text-lg font-bold py-2'><FaCircle  className='text-[#ff4f01]'/>{item.title}</span>
                        <p className='ml-5'>{item.description}</p>
                    </li>)
                     }
                </ul>
                <ul>
                   <h4 className='font-bold text-2xl pt-8 pb-5'>Requirements</h4>
                   {
                     requirements.map((item,id) => <li key={id} className='flex items-center gap-2 py-1'>
                        <span><FaCheck className='text-[#ff4f01]' /></span><span>{item}</span>
                       </li>)
                   }
                   <li className='mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy tex an unknown printer took. Lorem Ipsum is simply dummy text of the printing.</li> 
                </ul>
                <h4 className='font-bold text-2xl py-5 '>Description</h4>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an un it to make a type specimen book. It has survived not only fivnged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an un it to make a type specimen book. It has survived not only fivnged.
                </p>
             </div>
             <div  className={`${activestate==1?"block":"hidden"} mb-5`}>
                   <h4 className='text-2xl font-bold py-5'>Getting Started with Uniaro</h4>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un it to make a type specimen book. It has survived not only fivnged.</p>
                   <div className='w-full h-[1px] my-4 bg-[#ff4f01] '></div>
                   <ul>
                    {
                        lessons.map((item,id) => <li className='flex justify-between py-1'  key={id}><span className='flex items-center gap-4 hover:text-[#ff4f01]'><IoDocumentTextOutline size={25} />Lesson{id+1}:{item}</span> <span className='flex items-center'><span className='text-white  rounded-sm px-2 bg-[#ff4f01]'>50min</span> <IoMdLock className='text-[#ab6060]'/> </span></li>)
                    }
                   </ul>
             </div>
             <div  className={`${activestate==2?"block":"hidden"} mt-10 `}>
               <figure className='col-span-1 flex  flex-col justify-center items-center'>
                <img className='h-[145px] w-auto object-cover' src="https://i.ibb.co.com/rfjkrLZ/images.jpg" alt="" />
                <h4 className='font-bold capitalize text-center pt-5'>John Done</h4>
               </figure>
               <div className='col-span-5'>
               I have experienced in developing curriculum as well as conducting teach training and parenting programs. We guarantee to cover all phases of the teach programs to creating a classroom atmosphere that is stimulating and encouraging to students. I believe in maintaining high standards of education with emphasis on developing readings skills in pupils and thoroughly enjoys working with children and encourages creative expression.
               </div>
             </div>
             <div  className={`${activestate==3?"block":"hidden"} my-10`}>
             <Rating name="half-rating" defaultValue={2.5} precision={5} />
             <p className='font-bold'>5.00 average based on 2 ratings</p>
             <ul className='space-y-4 mt-5'>
             <li className='flex justify-between items-center'> <span className='flex capitalize font-bold '>5 start</span><span className='sm:w-5/6 w-4/6 rounded-lg block h-2 bg-[#ff4f01]'></span> <span>100%</span></li>
             <li className='flex justify-between items-center'> <span className='flex capitalize font-bold '>4 start</span><span className='sm:w-5/6 w-4/6 rounded-lg block h-2 bg-blue-100'></span> <span>0%</span></li>
             <li className='flex justify-between items-center'> <span className='flex capitalize font-bold '>3 start</span><span className='sm:w-5/6 w-4/6 rounded-lg block h-2 bg-blue-100'></span> <span>0%</span></li>
             <li className='flex justify-between items-center'> <span className='flex capitalize font-bold '>2 start</span><span className='sm:w-5/6 w-4/6 rounded-lg block h-2 bg-blue-100'></span> <span>0%</span></li>
             <li className='flex justify-between items-center'> <span className='flex capitalize font-bold '>1 start</span><span className='sm:w-5/6 w-4/6 rounded-lg block h-2 bg-blue-100'></span> <span>0%</span></li>
             </ul>
             
             <h4 className='font-bold text-lg mt-10'>Reviews</h4>
             <div>
                <ul className=''>
                    <li className='bg-[#f3f2f6] p-5 sm:flex gap-4'>
                        <span>
                            <img src="https://i.ibb.co.com/rfjkrLZ/images.jpg" className='max-h-[120px] object-cover' alt="" />
                        </span>
                        <span className=''>
                           <span className='flex items-center py-3'> <span className=''>Cherie Leon</span>  <Rating name="half-rating" defaultValue={2.5} precision={5} size='small' /></span>
                            <span className='capitalize py-1 px-1 bg-[#ff4f01] text-white rounded-sm'>best course</span>
                            <span className='block py-3'>Very good lessaons to learn with good instructor. Always recommended.</span> 
                            </span>
                    </li>
                </ul>
             </div>
             </div>
            </div>
             
             
            {/* righ par  */}
             
            </div>
            <div className="col-span-1 bg-[#f4f6f9]">
            <ul className='  p-10'>
                <h4 className='flex items-center gap-2 text-2xl font-semibold'><span className='bg-[#ff4f01] w-4 h-1 mt-2 block'></span> Categories</h4>
                {
                    categories.map((item,id) => <li className='flex justify-between font-semibold text-md capitalize py-2' key={id}><span>{item.title}</span><span className='h-6 rounded-full text-center  w-6 bg-white block'>{item.size}</span></li> )
                }
            </ul>

            <ul>
                <li className='bg-white py-2 mx-5 flex gap-2 my-2 items-center hover:text-white hover:bg-[#131d3b] '><IoDocumentTextOutline size={40} className='bg-[#131d3b] py-2 text-white'/> <span className='text-lg font-medium '>download pdf</span></li>
                <li className='bg-white py-2 mx-5 flex gap-2 my-2 items-center hover:text-white hover:bg-[#131d3b] '><IoDocumentTextOutline size={40} className='bg-[#131d3b] py-2 text-white'/> <span className='text-lg font-medium '>download pdf</span></li>
                <li className='bg-white py-2 mx-5 flex gap-2 my-2 items-center hover:text-white hover:bg-[#131d3b] '><IoDocumentTextOutline size={40} className='bg-[#131d3b] py-2 text-white'/> <span className='text-lg font-medium '>download pdf</span></li>
            </ul>
                

             <ul className='p-10'>
             <h4 className='flex items-center mb-10 gap-2 text-2xl font-semibold'><span className='bg-[#ff4f01] w-4 h-1 mt-2 block'></span> Popular Tags</h4>
             <span className='space-x-2'>
             <button className="btn btn-outline py-2 px-5 my-2 rounded-none text-lg border-[#131d3b] hover:border-[#ff4f01] hover:bg-[#ff4f01]">Campus</button>
             <button className="btn btn-outline py-2 px-5 my-2 rounded-none text-lg border-[#131d3b] hover:border-[#ff4f01] hover:bg-[#ff4f01]">classes</button>
             </span>
             <span className='space-x-2'>
             <button className="btn btn-outline py-2 px-5 my-2 rounded-none text-lg border-[#131d3b] hover:border-[#ff4f01] hover:bg-[#ff4f01]">college</button>
             <button className="btn btn-outline py-2 px-5 my-2 rounded-none text-lg border-[#131d3b] hover:border-[#ff4f01] hover:bg-[#ff4f01]">Admin</button>
             </span>
             <span className='space-x-2'>
             <button className="btn btn-outline py-2 px-5 my-2 rounded-none text-lg border-[#131d3b] hover:border-[#ff4f01] hover:bg-[#ff4f01]">Eduction</button>
             <button className="btn btn-outline py-2 px-5 my-2 rounded-none text-lg border-[#131d3b] hover:border-[#ff4f01] hover:bg-[#ff4f01]">Faculty</button>
             </span>
             <span className='space-x-2'>
             <button className="btn btn-outline py-2 px-5 my-2 rounded-none text-lg border-[#131d3b] hover:border-[#ff4f01] hover:bg-[#ff4f01]">Libray</button>
             <button className="btn btn-outline py-2 px-5 my-2 rounded-none text-lg border-[#131d3b] hover:border-[#ff4f01] hover:bg-[#ff4f01]">Study</button>
             </span>
             <button className="btn btn-outline py-2 px-5 my-2 rounded-none text-lg border-[#131d3b] hover:border-[#ff4f01] hover:bg-[#ff4f01]">College tour</button>
             </ul>
             <div className='flex justify-center'>
             <img className='mb-10' src={lifelat} alt="" />
             </div>
            </div>
        </div>
    );
}

export default SingelCourse;