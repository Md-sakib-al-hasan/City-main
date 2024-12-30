
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import Poopup from "../Poopup/Poopup";
import { useState } from "react";
import campase1 from "../../../../../public/campase.jpg"
import campase2 from "../../../../../public/campase2.jpg"
import campase3 from "../../../../../public/campase 3.jpg"
import campase4 from "../../../../../public/campase4.jpg"
import campase5 from "../../../../../public/campasefive.jpg"
import campase6 from "../../../../../public/campaseone.jpg"
import study1 from "../../../../../public/study1.jpg"
import study2 from "../../../../../public/study2.jpg"
import classe1 from "../../../../../public/calsss1.jpg"
import classe2 from "../../../../../public/class2.jpg"
import classe3 from "../../../../../public/class3.jpg"



function ImageCatagory() {
    const [imagecatagry,Setimagecatagry] = useState<string>('all')
    const [imagepoopup,setImagepoopup] = useState<string>("")
    const menulist = ["all","Campus", "Study", "Classes",];
    const imgelist = [
        { img:classe1,category:"Classes"},
        { img:classe2,category:"Classes"},
        {img:study1,category:"Study"},
        {img:study2,category:"Study"},
        {img:campase1,category:"Campus"},
        {img:campase2,category:"Campus"},
        {img:campase3,category:"Campus"},
        {img:campase4,category:"Campus"},
        {img:campase5,category:"Campus"},
        {img:campase6,category:"Campus"},
        { img:classe3,category:"Classes"},
       
    ]
    console.log(imagecatagry)

  return (
    <div>
        <Poopup onClose={() => setImagepoopup("")} src={imagepoopup}></Poopup>
       {/* imageCatagry menu list */}
       <ul className="flex justify-center py-10">
           {
            menulist.map((item,id) => <li onClick={() => Setimagecatagry(item) } key={id} className="btn hover:text-white btn-outline capitalize rounded-none mx-1 hover:bg-[#ff4f01] hover:border-[#ff4f01] " >{item}</li>)
           }
       </ul>
        {/* all image  */}
       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-11/12 max-w-[1280px]  mx-auto">
         {
            imgelist.filter(item => imagecatagry==="all"?imagecatagry:item.category === imagecatagry).map((item,id) => <button key={id} onClick={() => setImagepoopup(item.img) }><div className="relative m-2 group ">
            <div className=" z-20 group-hover:absolute group-hover:block hidden  top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 ">
            <FiArrowUpRight size={30} className="text-[#ff4f01] ml-8" />
            <FiArrowDownLeft size={30}  className="text-[#ff4f01]" />
            </div>
            <div className=" group-hover:absolute inset-0 z-10 bg-black opacity-80"></div>
            <img key={id} src={item.img} alt=""  className="object-cover animate-jump-in animate-once animate-delay-500  xl:h-[400px] h-[400px] lg:h-[300px]  w-full" />
        </div></button>)
         }
       </div>
       
    </div>
  )
}

export default ImageCatagory
