import { BrowserRouter, Link, Outlet } from "react-router-dom";
import Logo from "./Images/FOXEROXX.png"


export default function Nav() {
  



  return (
    <>
      <div className="border-2 h-22 border-black flex justify-between bg-[#f2f2f2]">
        <div className="logo">
           <a href="./"><img src={Logo} alt=""  className="h-18 w-49 object-cover "/></a>
        </div>
       
        <div className="lg:flex flex-nowrap justify-between    border-1 font-[sans]   ">
        <BrowserRouter>
        <div>
        <Link className="Link" to="/">
        Home
        </Link>
        <Link className="Link" to="/Dashboard">
        Dashboard
        </Link>
        <Link className="Link" to="/Databoard">
        Databoard
        </Link>
        </div>
        
        </BrowserRouter>
        </div>
        <div className=" flex md:pr-10 ">
        </div>
      </div>
    </>
  );
}
