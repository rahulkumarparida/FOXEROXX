import { useState } from "react"

export default function MemberEntryFrom() {
    let [groupData, setGroupData] = useState()
    return <div className="FormCont  border-1 rounded-sm  h-110 w-300 mt-10 flex pt-4 px-8">
        <form >
        <input className="w-100" type="text" placeholder="Enter the Group Name" />
        <div className="pt-4">
        <input className="" type="text" placeholder="Group Leader Name" />
        <input className="" type="text" placeholder="Total Members " />
        <button className="border-1 shadow-md mx-2 p-[3px] px-3 rounded-sm">ADD</button>
        </div>

        </form>
    </div>
}