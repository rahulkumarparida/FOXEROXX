import { useState } from "react";

export default function MemberEntryFrom() {
    // let [groups, setAnotherGroup] = useState([]); 
    let [done ,setDone] = useState(false)
  let [group, setGroup] = useState({
    GroupName: "",
    LeaderName: "",
    TotalMembers: 0,
    Data: undefined,
  });
  let arr = Array(group.TotalMembers).fill({})
  let [member , setMember ] = useState({Name :"" , Amount : 0})
  function handleClick(e) {
    console.log(group);
    console.log(`arr : ${ arr }`);
    
   
        // setGroup({...group , Data : [...data  , member]})

        // setMember({Name :"" , Amount : 0 }) 
        
    
   setDone(true)
     
    e.preventDefault();
  }

 
  return (
    <div className="FormCont  border-1 rounded-sm  mt-10 flex p-4 px-8">
      <form>
        <input
          className="w-100"
          type="text"
          placeholder="Enter the Group Name"
          onChange={(e) => {
            setGroup({ ...group, GroupName: e.target.value });
          }}
        />
        <div className="pt-4">
          <input
            className=""
            type="text"
            placeholder="Group Leader Name"
            onChange={(e) => {
              setGroup({ ...group, LeaderName: e.target.value });
            }}
          />
          <input
            className=""
            type="number"
            placeholder="Total Members "
            onChange={(e) => {
              setGroup({ ...group, TotalMembers: Number(e.target.value) });
            }}
          />
          <button
            className="border-1 shadow-md mx-2 p-[3px] px-3 rounded-sm"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            ADD
          </button>
        </div>
        <div className="teaMinputs ">
            {
             done ?  arr.map((ele ,idx)=>{
                return <div className="border-1 ">
                       <input type="text" placeholder="Name" onChange={()=>{setMember({...member , Name : e.target.value})}}  />
                       <input type="text" placeholder="Amount" onChange={()=>{setMember({...member , Amount : e.target.value})}} /> 
                </div>
              }):""

                
            }
        </div>
      </form>
    </div>
  );
}
