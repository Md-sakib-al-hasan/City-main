import {
    createBrowserRouter,
  } from "react-router-dom";
import RootLayout from "../../Layout/RootLayout/RootLayout";
import Login from "../../pages/Login/Login";
import SignIn from "../../pages/SignIn/SignIn";
import Home from "../../pages/Home/Home";
import Contact_us from "../../pages/ContactUs/Contact_us";
import Coures from "../../pages/Coures/Coures";
import SingelCourse from "../../pages/Coures/components/singelCourse/SingelCourse";
import Gallery from "../../pages/Gallery/Gallery";
import About_us from "../../pages/About_us/About_us";
import UserProfile from "../../pages/Userprofile/Userprofile";
import Civil from "../../pages/Coures/components/civil/civil";
import Mechanical from "../../pages/Coures/components/Mechanical/mechanicl";
import ComputerCourse from "../../pages/Coures/components/Computer/computer";
import ElectroicCourse from "../../pages/Coures/components/Electronic/electronic";
import TextileCourse from "../../pages/Coures/components/textile/textile";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<RootLayout></RootLayout>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
        ,
        {
          path:"/sign_in",
          element:<SignIn></SignIn>
        },
        {
          path:"/Contact_us",
          element:<Contact_us></Contact_us>
        },
        {
          path:"/courses",
          element:<Coures></Coures>
        },
        {
          path:"/course",
          element:<SingelCourse></SingelCourse>
        },
        {
          path:"/Gallery",
          element:<Gallery></Gallery>
        },
        {
          path:"/About_us",
          element:<About_us></About_us>
        },
        {
          path:"/User_profile",
          element:<UserProfile></UserProfile>
        },
        {
          path:"/civil",
          element:<Civil></Civil>
        },
        {
          path:"/Mechanical",
          element:<Mechanical></Mechanical>
        },
        {
          path:"/computer",
          element:<ComputerCourse></ComputerCourse>
        },
        {
          path:"/electronic",
          element:<ElectroicCourse></ElectroicCourse>
        },
        {
          path:"/textile",
          element:<TextileCourse></TextileCourse>
        },
      ]
    },
  ]);

  export default router;