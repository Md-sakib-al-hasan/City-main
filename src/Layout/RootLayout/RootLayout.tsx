import { Outlet } from "react-router-dom";
import Navigatiobar from "../../components/Header/Navigationbar/Navigatiobar";
import Footer from "../../components/Footer/Footer";


export default function RootLayout() {
  return (
    <>
      <Navigatiobar></Navigatiobar>
      <Outlet/>
      <Footer></Footer> 
    </>
  )
}
