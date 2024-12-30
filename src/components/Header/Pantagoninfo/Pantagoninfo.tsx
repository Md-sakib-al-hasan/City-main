import { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CiMail, CiMobile1 } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { MdClear } from "react-icons/md";
import { TbMessageUser } from "react-icons/tb";
import { VscTriangleDown } from "react-icons/vsc";

export default function Pantagoninfo() {
  const [pantagoninfo, setpantagoninfo] = useState<boolean>(true);
  const [topPosition, setTopPosition] = useState<string>("0px");

  const handleResize = () => {
    const width = window.innerWidth;

    // Set the top position based on the screen size
    if (width >= 1280) { // xl size (extra-large)
      setTopPosition("-400px");
    } else if (width >= 768) { // laptop size
      setTopPosition("-504px");
    } else {
      setTopPosition("0px"); // mobile size
    }
  };

  useEffect(() => {
    handleResize(); // Set initial position based on window size
    window.addEventListener('resize', handleResize); // Add event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup
    };
  }, []);

  const coursesArrayright = [
    "Guaranteed good results",
    "Trending Technology",
    "Career Security",
  ];
  const coursesArrayleft = [
    "Certified Teachers",
    "Experienced Faculty",
    "Certification",
  ];

  return (
    <div className="z-40 lg:block hidden">
      <div style={{ top: pantagoninfo? topPosition: "0px" }} className={`absolute transform transition-all duration-700 left-0 right-0 bg-white border-b-4 border-[#ff4f01] py-10`}>
        {/* Container info */}
        <div className="text-[#131D3B] w-11/12 max-w-[1280px] mx-auto grid grid-cols-3 gap-10">
          {/* First column */}
          <div>
            <h2 className="text-2xl font-semibold capitalize pb-4">We provide the best technical <span className="text-[#ff4f01] font-bold">education</span> and <span className="text-[#ff4f01] font-bold">training</span></h2>
            <p className="text-[#666D81] text-base">City Institute of Technology (CIT) is a modern Diploma Engineering Institute in Bangladesh under BTEB. Our Institute code is 50444.</p>
            <div className="flex justify-between mt-5 text-[#666D81]">
              <ul>
                {coursesArrayright.map(course => (
                  <li key={course} className="flex text-[#131D3B] items-center gap-2 font-semibold">
                    <FaCheck />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
              <ul>
                {coursesArrayleft.map(course => (
                  <li key={course} className="flex text-[#131D3B] items-center gap-2 font-semibold">
                    <FaCheck />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="bg-[#ff4f01] w-full py-2 mt-7 font-semibold text-lg text-white flex items-center justify-center space-x-2">
              <FaPhone />
              <span className="capitalize">call us now:</span>
              <span> 01531-985549</span>
            </button>
          </div>
          {/* Second column */}
          <ul className="space-y-4 font-semibold text-[#666D81]">
            <h1 className="capitalize font-semibold text-2xl pb-8 text-[#131D3B]">Opening Hours</h1>
            <li className="justify-between w-full flex capitalize"><span>Sunday</span><span>09am-04pm</span></li>
            <li className="justify-between w-full flex capitalize"><span>Monday</span><span>09am-04pm</span></li>
            <li className="justify-between w-full flex capitalize"><span>Tuesday</span><span>09am-04pm</span></li>
            <li className="justify-between w-full flex capitalize"><span>Wednesday</span><span>09am-04pm</span></li>
            <li className="justify-between w-full flex capitalize"><span>Thursday</span><span>09am-04pm</span></li>
            <li className="justify-between w-full flex capitalize"><span>Friday-Saturday</span><span>Closed</span></li>
          </ul>
          {/* Third column */}
          <form action=" " className="focus:text-[#666D81] text-md">
            <h1 className="capitalize font-semibold text-2xl pb-7 text-[#131D3B]">Want to talk? Let`s do it!</h1>
            <span className="xl:flex lg:block justify-between my-4">
              <span className="flex items-center gap-2"><AiOutlineUser size={20} /><input className="focus:border-none focus:outline-none placeholder:focus:text-[#666D81] placeholder:font-semibold" type="text" name="name" placeholder="your name" /></span>
              <span className="flex items-center gap-2"><CiMail size={20} /><input className="focus:border-none focus:outline-none placeholder:focus:text-[#666D81] placeholder:font-semibold" type="email" name="email" placeholder="your Email" /></span>
            </span>
            <span className="xl:flex lg:block justify-between my-4">
              <span className="flex items-center gap-2"><CiMobile1 size={20} /><input className="focus:border-transparent focus:ring-0 focus:outline-none placeholder:focus:text-[#666D81] placeholder:font-semibold no-spinner" type="tel" name="number" placeholder="your Phone" /></span>
              <span className="flex items-center gap-2"><LuPencil size={20} className="text-gray-500" /><input className="focus:border-none focus:outline-none placeholder:focus:text-[#666D81] placeholder:font-semibold" type="text" name="subject" placeholder="Subject" /></span>
            </span>
            <span className="flex items-center gap-2"><TbMessageUser size={20} />
              <input className="focus:border-none focus:outline-none placeholder:focus:text-[#666D81] placeholder:font-semibold" type="text" name="message" placeholder="message" /></span>

            <button className="text-[#131D3B] hover:bg-[#131D3B] hover:text-white px-6 py-2 mt-[89px] font-semibold text-lg border-solid border-[#131D3B] border-[1px] flex items-center justify-center space-x-2"> Send A Request </button>
          </form>
        </div>

        {/* Pentagon icon management */}
        <div className="relative z-50" onClick={() => setpantagoninfo(prev => !prev)}>
          {!pantagoninfo ? <MdClear className="absolute right-[78px] text-white z-10 top-16" size={30} /> : <IoMenu className="absolute right-[78px] text-white z-10 top-16" size={30} />}
          <div className="bg-[#ff4f01] py-7 px-[22px] text-green-400 absolute top-10 right-[72px]"></div>
          <div>
            <VscTriangleDown className="text-[#ff4f01] text-6xl absolute top-[76px] right-16" />
          </div>
        </div>
      </div>
    </div>
  );
}
