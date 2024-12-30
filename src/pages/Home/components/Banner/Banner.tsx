import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import university1 from "../../../../assets/Home/one.jpg";
import university2 from "../../../../assets/Home/two.jpg";
import university3 from "../../../../assets/Home/three.jpg";
import { Link } from "react-router-dom";

const BannerSilder = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {icon:university1,title1:"get in early",title2:"get a pleace. get ahead",des:"Apply Before your Exams to secure a place",buttontitle:"Change a life today"},
    {icon:university2,title1:"preparing students",title2:"for successful. future",des:"Apply Before your Exams to secure a place",buttontitle:"admission 2024"},
    {icon:university3,title1:"get in early",title2:"get a pleace. get ahead",des:"Apply Before your Exams to secure a place",buttontitle:"Focuse your learnig"},
    
  ];


  // to color  for dote world
  const renderTitle = (title: string): JSX.Element[] => {
    return title.split(" ").map((word: string, index: number) => {
      if (word.includes(".")) {
        return (
          <span key={index} className="text-[#ff4f01]">
            {word}{" "}
          </span>
        );
      }
      return <span key={index}>{word}{" "}</span>;
    });
  };
  
  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  // Move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="w-full overflow-hidden relative ">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Slides */}
        {images.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0 relative  ">
            <img
              src={item.icon}
              alt={`Slide ${index}`}
              className="w-full h-[550px] object-cover"
            />
            <div className="absolute inset-0 bg-[#0b1431] flex justify-center  "  style={{
            background: "linear-gradient(to bottom, rgba(11,20, 49, 0.70), rgba(11, 20, 49, 0.9))",
          }}> 
           {/* all content   */}
          <span className="text-5xl text-white absolute max-w-[1280px] animate-once animate-fade-up top-36  w-11/12 mx-auto   ">
               <span className="space-y-5  ">
               <button className="btn uppercase text-md  bg-[#ff4f10] border-none  px-16 hover:bg-white hover:text-[#0b1431] rounded-none text-white "> <Link to="/Contact_us">Join us now!</Link> </button>
                <ul className="space-y-5">
                  <li className="xl:text-7xl lg:text-6xl text-4xl text-white font-bold capitalize " >{item.title1}</li>
                  <li className="xl:text-7xl lg:text-6xl text-4xl text-white font-bold capitalize"> {renderTitle(item.title2)}</li>
                  <li className="text-xl font-semibold">{item.des}</li>
                </ul>
               </span>
               <button className="btn absolute lg:mt-0 mt-10 lg:right-4 text-md btn-outline  capitalize px-10 hover:bg-white hover:text-[#0b1431] rounded-none text-white "> <Link to="/Contact_us">Join us now!</Link> </button>
            </span></div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2"
        onClick={prevSlide}
      >
        <FaAngleLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2"
        onClick={nextSlide}
      >
        <FaAngleRight size={30} />
      </button>
    </div>
  );
};

export default BannerSilder;
