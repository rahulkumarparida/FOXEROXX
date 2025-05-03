import { useState } from "react"
import MemberCard from "./Ui/MemberCard"
import MemberEntryFrom from "./Ui/MemberEntryForm"

export default function(){
    let [click , setClick] = useState(true)
    let Card = [
        {
            id : 1 ,
            totalMembers : 4,
            Emoji : "👨👨👨👨",
            Name : "Four Member Group",
        },
        {
            id : 2 ,
            totalMembers : 5,
            Emoji : "👨👨👨👨👨",
            Name : "Five Member Group",
        },
        {
            id : 3 ,
            totalMembers : 6,
            Emoji : "👨👨👨👨👨👨",
            Name : "Six Member Group",
        },
    ]

    return <div className="home flex items-center flex-col ">
                 <h1 className="pt-4 text-3xl font-[sans]">HomePage</h1>   
        <div className="HomeConatiner py-10 flex  flex-col  items-center">
            {/* <div className="CustomGroupQ shadow-2xl h-20 w-220 mb-10  flex items-center justify-between px-10 rounded-md">
                    <p className=" text-xl">Make your custom Group for xeroxxing!!!</p>
                    <button className="createBTN border-1 shadow-md p-1 rounded-sm " onClick={()=>{click ? setClick(false) : setClick(true)}}>CREATE</button>
            </div> */}
            <div className=" border-1 text-red-700 p-3 rounded-sm bg-red-200">
                <p>Do not Refreshes the Page in the middle the data will erased!!</p>
            
            </div>
            {click ?  <MemberEntryFrom />   :  <MemberCard Card={Card} />}
        </div>
    </div>
}