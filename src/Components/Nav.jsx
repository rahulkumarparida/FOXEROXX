import Logo from "./Images/FOXEROXX.png"

export default function Nav() {
  return (
    <>
      <div className="border-2 border-black flex justify-between bg-[#f2f2f2]">
        <div className="logo">
           <a href="./"><img src={Logo} alt=""  className="h-18 w-49 object-cover "/></a>
        </div>
        <div className="signUpButtons flex pr-10 ">
            <div className="login m-4 p-2 border-1 rounded-lg">
                <button >Login</button>
            </div>
            <div className="SignUp m-4 p-2 border-1 rounded-lg">
                <button >SignUp</button>
            </div>
        </div>
      </div>
    </>
  );
}
