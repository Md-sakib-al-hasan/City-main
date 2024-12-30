import { MdLocalPhone, MdLocationOn } from "react-icons/md"
import logo from "../../assets/Footer/logo-removebg-preview.png"
import { IoMail } from "react-icons/io5"

export default function Footer() {
  const student = [
    "Campus Life",
    "Library",
    "Completed & Verified Students",
    "Rules & Regulation",
    "Tuition Fees",
    "Waiver & Scholarships"
  ];

  const technology  = [
    "Board of Trustees",
    "Syndicate",
    "Notices",
    "Proctor",
    "IQAC"
  ];

  const link = ["Apply Online", "Contact Us"];
  
  return (
    <div className="bg-footer relative py-14">
      <div className="absolute inset-0 bg-[#0c122c] opacity-95"></div>
      <ul className="relative z-20 grid grid-cols-2  xl:grid-cols-12 lg:grid-cols-10 md:grid-cols-5 w-11/12 max-w-[1280px] mx-auto gap-1  lg:space-x-0 md:space-x-10  ">
        {/* First Column */}
        <li className="text-white col-span-3">
          <ul className="space-y-3">
            <li className="flex items-start text-white pb-4 gap-2 ">
              <img className="w-14 sm:ml-0 ml-[15%]" src={logo} alt="" />
              <span className="text-2xl font-medium capitalize">city institute of technology</span>
            </li>
            <li className="flex items-center sm:justify-start justify-center  gap-2 ">
              <MdLocationOn size={20} className="" />
              <span className="">Khagan, Birulia, Savar, Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center sm:justify-start justify-center gap-2">
              <MdLocalPhone />
              <span>01531-985549</span>
            </li>
            <li className="flex items-center sm:justify-start justify-center gap-2">
              <IoMail />
              <span>cit50444@gmail.com</span>
            </li>
          </ul>
        </li>

        {/* Second Column - Student */}
        <li className="text-white  col-span-2 sm:mt-0 mt-10">
          <ul className="text-center sm:text-left">
            <h4 className="uppercase font-medium text-xl pb-8">Student</h4>
            {student.map((item, index) => (
              <li className="my-1" key={index}>{item}</li>
            ))}
          </ul>
        </li>

        {/* Third Column - Technology */}
        <li className="text-white md:hidden block lg:block col-span-2 sm:mt-0 mt-10">
          <ul className="text-center sm:text-left">
            <h4 className="uppercase font-medium text-xl pb-8">Technology</h4>
            {technology.map((item, index) => (
              <li className="my-1 " key={index}>{item}</li>
            ))}
          </ul>
        </li>

        {/* Fourth Column - Quick Links */}
        <li className="text-white hidden xl:block  col-span-2">
          <ul>
            <h4 className="uppercase font-medium text-xl pb-8">Quick Links</h4>
            {link.map((item, index) => (
              <li className="my-1" key={index}>{item}</li>
            ))}
          </ul>
        </li>

        {/* Fifth Column - Map */}
        <li className="text-white relative col-span-3 mt-16 lg:mt-0">
  {/* Location Map Title */}
  <span className="uppercase font-medium text-xl text-center 
                   lg:relative md:absolute md:left-[-44px] 
                   sm:text-center md:text-left block"
  >
    Location Map
  </span>

  {/* Map Container */}
  <div className="relative h-40 w-full">
    <iframe
      className="lg:block md:absolute w-full lg:top-12 md:top-14 
                 sm:mt-0 mt-10 left-[-44px]"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29187.725754460498!2d90.2716326713562!3d23.873098846421133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c2102dc1cd51%3A0x6f95e92193fc8978!2sCity%20University%20Bangladesh!5e0!3m2!1sen!2sbd!4v1728637622650!5m2!1sen!2sbd"
      width="320"
      height="200"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</li>

        
        <li className="text-white   hidden md:block lg:hidden  mt-16">
          <ul>
            <h4 className="uppercase font-medium text-xl pb-8">Technology</h4>
            {technology.map((item, index) => (
              <li className="my-1" key={index}>{item}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
