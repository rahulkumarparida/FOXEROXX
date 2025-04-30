import { BrowserRouter, Link, Outlet } from "react-router-dom";
import Logo from "./Images/FOXEROXX.png";

export default function Nav() {
  return (
    <>
      <div className=" h-22 border-black flex justify-between bg-[#f2f2f2]">
        <div className="logo">
          <a href="./">
            <img src={Logo} alt="" className="h-18 w-49 pt-3 object-cover " />
          </a>
        </div>

        <div className="lg:flex  justify-between items-end   font-[sans]   ">
          
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
        <div className=" flex md:pr-10 "></div>
      </div>
    </>
  );
}
