import { useEffect, useState } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

export default function MemberEntryFrom() {
  // let [groups, setAnotherGroup] = useState([]);

  let [group, setGroup] = useState({
    GroupName: "",
    LeaderName: "",
    TotalMembers: 0,
    Data: [],
  });

  let [member, setMember] = useState({ Name: "", Amount: 0 });
  let key = `${group.GroupName}Data`
  let { setData , getData , removeData} = useLocalStorage(key)
  let memNum ;
  function sumbitName(e){
    console.log(group);     
    setMember({ Name: "", Amount: 0 })
    setGroup({...group, Data :  [...group.Data,member]})
   
      setData(group)
  
  
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
              memNum = e.target.value
              setGroup({ ...group, TotalMembers: Number(e.target.value) });
            }}
          />
        
        </div>
        <div className="teaMinputs ">
          <div>
            <input type="text" placeholder="Member Name" onChange={(e)=>{
                setMember({...member , Name : e.target.value})
            }}
            value={member.Name}
            />
            <input type="text" placeholder="Amount Paid" onChange={(e)=>{
                setMember({...member , Amount : Number(e.target.value)})
            }}
            value={member.Amount}
            />
            <button className="border-1 shadow-md mx-2 p-[3px] px-3 rounded-sm" onClick={(e)=>{
              sumbitName(e)
            }}>
              Add
            </button>
          </div>
          <p>Total Members Added : {group.Data.length} </p>
          {
            group.Data.map((ele , idx)=>{
              return <div key={idx} >
                <p> Name :{ele.Name} </p>
                <p>Amount: {ele.Amount} </p>
              </div>
            })
          }
        </div>
      </form>
    </div>
  );
}
