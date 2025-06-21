import { useEffect, useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import {DashboardItemCard} from "./Ui/DashboardItemCard";
import DashboardLanding from "./Ui/DashboardLanding";

//This is the Dashboard of the Page
export default function Dashboard() {
  let [groupName, setGroupName] = useState("");
  
  


  const SideBarinfo = () => {
    let { setData: setGroup, getData: getGroup } =
      useLocalStorage("GroupNames");
    let GroupNames = getGroup("GroupNames") ? getGroup("GroupNames" ) :[""];
    function HandlName(e) {
      // console.log(`ey--- ${e.target.innerText}`);
      
    }
useEffect(()=>{
        console.log("Kyare ",groupName);
        
      },[groupName])
      
      // e.preventDefault();
    return (
      <>
      <p className="cursor-pointer p-2 text-center text-3xl" onClick={()=>{

        // location.reload()
      }} >
        
        Groupssss
     
      </p>
        {
          (!GroupNames
            ? <div className="text-center text-xl">
              <p>No groups yet added</p>
            </div>
            : GroupNames.map((ele, idx) => {
                return (
                  <div
                    className=" sideBarName border-3 p-2 m-1 flex items-center justify-center cursor-pointer"
                    key={ele}
                    onClick={(e) => {
                      // HandlName(e);
                      setGroupName(e.target.innerText);
                      e.preventDefault()
                    }}
                  >
                   
                    <p>{ele}</p>
                   
                  </div>
                );
              }))
        }
      </>
    );
  };

  return (
    <div className="flex  mt-2">
      <div className="sideBar border-1 h-[89vh] w-[28vw] mx-1 ">
        
            <SideBarinfo />
     
      </div>
      <div className=" dashBoardCont border-1 h-[89vh] w-[71vw]  ">
        {groupName == "" ? (
        <div>
            <DashboardLanding />
          
        </div>
        ) : (
          <DashboardItemCard groupName={groupName} />
        )}
      </div>
    </div>
  );
}
