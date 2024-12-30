import Banner from "../../components/banner/Banner";
import OurPopularCourses from "../../components/our_popular_courses/OurPopularCourses";
import OurInstructor from "../Home/components/OurInstructor/OurInstructor";
import About_our_technology from "./components/About_our_technology/About_our_technology";
import Benefit from "./components/Benefit/Benefit";
import HappyStudent from "./components/HappyStudent/HappStudent";


export default function About_us() {
  return (
    <div className="space-y-16">
       <Banner title="About_Us"></Banner>
       <section className=" relative lg:pb-[200px] "><span> <About_our_technology  ></About_our_technology></span><span className="lg:absolute bottom-10 w-full"><Benefit></Benefit></span></section>
       <section><OurPopularCourses></OurPopularCourses></section>
       <section><HappyStudent></HappyStudent></section>
       <section><OurInstructor></OurInstructor></section>
    </div>
  )
}
