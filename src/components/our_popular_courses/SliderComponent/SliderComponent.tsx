import { useState, useEffect } from "react";
import { BiMessageRounded } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";


// Define the type for instructor items
interface InstructorItem {
  img: string;
  name: string;
  category: string;
  path:string;
}

// Define the type for the component props
interface SliderComponentProps {
  instructiorarray: InstructorItem[];
}

const SliderComponent: React.FC<SliderComponentProps> = ({ instructiorarray }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleItems, setVisibleItems] = useState<number>(4); // Default to 4 items on XL

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + visibleItems) % instructiorarray.length;
    });
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex - visibleItems + instructiorarray.length) % instructiorarray.length;
    });
  };

  // Adjust number of visible items based on screen size
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1280) {
        setVisibleItems(4); // 4 items for XL
      } else if (window.innerWidth >= 1024) {
        setVisibleItems(3); // 3 items for LG
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2); // 2 items for MD
      } else {
        setVisibleItems(1); // 1 item for smaller screens
      }
    };

    // Set initial value
    updateVisibleItems();

    // Listen for window resize to adjust visible items
    window.addEventListener("resize", updateVisibleItems);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  return (
    <div className="relative w-11/12 max-w-[1280px]  mx-auto">
      
      <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
  {instructiorarray
    .slice(currentIndex, currentIndex + visibleItems) // Show only visible items
    .map((item, id) => (
      <li key={id} className="relative group  min-h-[450px]"> {/* Set a minimum height for each list item */}
        <div className="space-y-5 h-full flex flex-col justify-between"> {/* Ensure the content fills the full height */}
          <div className="relative">
            <img src={item.img} className="h-[300px] object-cover w-full" alt={item.name} />
          </div>
          <div className="space-y-1 flex flex-col justify-between flex-1"> {/* Stretch the text section */}
            <span className="block text-lg font-semibold capitalize"><Link to={`/${item.path}`}>{item.name}</Link></span>
            <span className="text-gray-600 line-clamp-2">{item.category}</span>
          </div>
          <span className="flex justify-between"> {/* Place the button at the bottom */}
            <span className="flex gap-3">
            <span className="flex items-center gap-2"> <FaUser /> 75</span>
            <span className="flex items-center gap-2"><BiMessageRounded /> 35</span>
            </span>
            <span className="bg-[#ff4f01] text-white py-1 px-2">
                 $400
            </span>
          </span>
        </div>
      </li>
    ))}
</ul>


      {/* Left arrow */}
      <button
        className="absolute top-[50%] xl:left-[-60px] lg:left-[-40px] md:left-[-60px] left-[-30px] transform -translate-y-[50%] px-5 py-3 bg-[#ff4f01] text-white rounded-full hover:bg-gray-600"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Right arrow */}
      <button
        className="absolute top-[50%] xl:right-[-60px] lg:right-[-40px] md:right-[-60px] right-[-30px] transform -translate-y-[50%] px-5 py-3 bg-[#ff4f01] text-white rounded-full hover:bg-gray-600"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default SliderComponent;
