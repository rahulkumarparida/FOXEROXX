import { useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import DashboardItemCard from "./Ui/DashboardItemCard";

export default function Dashboard() {
  let [groupName, setGroupName] = useState("");
  const SideBarinfo = () => {
    let { setData: setGroup, getData: getGroup } =
      useLocalStorage("GroupNames");
    let GroupNames = getGroup("GroupNames");
    function HandlName(e) {
      console.log(`ey--- ${e.target.innerText}`);
      setGroupName(e.target.innerText);
      e.preventDefault();
    }

    return (
      <>
        {GroupNames.map((ele, idx) => {
          return (
            <div
              className=" border-1 p-2 m-1 flex items-center justify-center"
              key={ele}
              onClick={(e) => {
                HandlName(e);
              }}
            >
              <p>{ele}</p>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="flex  mt-2">
      <div className="sideBar border-1 h-[89vh] w-[28vw] mx-1 ">
        <SideBarinfo />
      </div>
      <div className="flex justify-center items-center dashBoardCont border-1 h-[89vh] w-[71vw]  ">
        <DashboardItemCard groupName={groupName} />
      </div>
    </div>
  );
}
