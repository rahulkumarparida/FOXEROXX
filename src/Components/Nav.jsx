import { BrowserRouter, Link, Outlet } from "react-router-dom";
import Logo from "./Images/FOXEROXX.png";

export default function Nav() {
  return (
    <>
      <div className=" h-18  border-black border-1 flex justify-between bg-[#f2f2f2]">
        <div className="logo  flex items-end w-[30vw]">
          <a href="./">
            <img src={Logo} alt="" className="h-18 w-49 pt-3 object-cover " />
          </a>
        </div>

        <div className="LinkCont lg:flex  flex-row justify-around items-start w-[70vw] ">
          
            <Link className="Link" to="/">
              Home
            </Link>
            <Link className="Link" to="/Dashboard">
              Dashboard
            </Link>
            <Link className="Link" to="/Databoard">
              Databoard
            </Link>
         <Link className="Link" to="/Account">
              Accounts
            </Link>
             <Link className="Link" to="/Docs">
              Docs
            </Link>
        </div>
      </div>
    </>
  );
}
