import { FaGraduationCap, FaHeadSideVirus } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import signcher from "../../../../assets/About_us/signecher.png"
const About_our_technology = () => {
    const informationArray = [
        { icon:<IoDocumentTextOutline size={80} className="text-[#ff4f01]" />,
          title: "Certification",
          description: "Take courses and pass them with dedication. If your learning goal is to gain mastery, get certified by your dream degree."
        },
        { icon:<FaHeadSideVirus size={80} className="text-[#ff4f01]" />,
          title: "Trending Courses",
          description: "Our academy offers essential courses. We suggest you devote a few hours every week to advancing your career."
        },
        { icon:<FaGraduationCap size={80} className="text-[#ff4f01]" />,
          title: "Certified Teachers",
          description: "A group of cultivated teachers is the core part of our academy. We’ve hired knowledgeable and skilled teachers for each course."
        }
      ];
      
    return (
      <div className="bg-pantagon relative">
        {/* Use a gradient background for different opacities at top and bottom */}
        <div
          className="absolute inset-0 w-full"
          style={{
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))",
          }}
        ></div>
        <div className="relative z-20 pb-36">
          <h5 className="uppercase text-md text-center text-[#ff4f01]">
            you can learn
          </h5>
          <h2 className="text-5xl capitalize text-center py-4 font-bold text-[#131d3b]">
          welcome city institute of technology Institute
          </h2>
          <span className="flex justify-center py-2 gap-2">
            <div className="h-1 w-8 bg-[#ff4f01]"></div>
            <div className="h-1 w-8 bg-blue-100"></div>
          </span>
          <div className="sm:grid grid-cols-2 gap-20 w-11/12 max-w-[1280px]  mx-auto">
          <ul className="space-y-10" >
             {
                informationArray.map((item,id) => 
                <li  key={id} className="flex gap-2 items-center">
                    {item.icon} 
                    <span className="py-4 space-y-2">
                    <span className="text-xl font-semibold text-[#131d3b] "  >{item.title}</span>
                    <span className="block">{item.description}</span>
                    </span>
                </li>)
             }
          </ul>
           <div className="mt-10  sm:mt-7">
            <span className="flex gap-3 items-center">
            <button className="border-solid border-2 flex justify-center items-center border-[#ff4f01]  lg:h-16 lg:w-16 h-10 w-10 rounded-full "><FaHeadSideVirus  className="text-[#ff4f01]  lg:text-3xl text-2xl" /></button>
                <span>
                    <span className="block capitalize ">our Technology</span>
                    <span className="text-2xl capitalize font-semibold ">Bes learning institute</span>
                </span>
            </span>
             <div className="space-y-4">
                <h4 className="text-lg mt-10  font-semibold capitalize ">For Innovative Teaching And Learning Research Solutions</h4>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.</p>
                <p>Contrary to popular belief, Lorem Ipsum Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical It has roots in a piece of classical.</p>
                <span  className=" flex gap-2">
                    <span className="flex flex-col gap-2">
                        <span className="text-xl font-semibold block">Mat Clayton</span>
                        <span>CEO at city institute of technology</span>
                    </span>
                    <span>
                     <img className="h-20" src={signcher} alt="" />
                    </span>
                </span>
             </div>
            </div>  
          </div>
         
        </div>
      </div>
    );
  };
  
  export default About_our_technology;
  