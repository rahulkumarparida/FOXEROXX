import { useEffect, useState } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
// import UserCard from "./UserCard";
// import PrintDialog from "./PrintDialog";
import { PrintDialog } from "./PrintDialog";

export default function DashboardItemCard({ groupName }) {
  // console.log("this is the previous data updated on the group : ", prevData  );

  let { setData, getData } = useLocalStorage(`${groupName}Data`);
  let groupData = getData(`${groupName}Data`);

  function UserCard({ Data }) {
    function HandleState(e) {
      console.log(e.target.innerHTML);
      if (e.target.innerHTML.toString == "Done here") {
        window.reload()
      }

      setState(!state);
      e.preventDefault();
    }

    let [state, setState] = useState(false);

    return (
      <div className="flex  flex-col p-3 items-center justify-center">
        <div>
          <button
            className="createBTN border border-gray-300 bg-zinc-500 text-white shadow-md p-2 px-4 rounded-md hover:bg-black transition-colors"
            onClick={(e) => {
              HandleState(e);
            }}
          >
            <p> {state ? "Done here" : "Add Print"}</p>
          </button>
        </div>

        {state ? (
          <PrintDialog data={Data} />
        ) : (
          <div className="MemberNamesCont  ">
            {Data.Data.map((ele, id) => {
              return (
                <div
                  className="flex m-2 rounded-sm shadow-2xl items-center justify-around border-0 h-[10vh] w-[60vw]  "
                  key={id}
                >
                  <div className="flex justify-between w-[40vw]">
                    <div className="p-1 ">
                      <p>
                        {id + 1}. {ele.Name}
                      </p>
                    </div>
                    <div className="p-1 ">
                      <p>₹{ele.Amount} </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="border-0 flex  items-center justify-center h-[10vh] shadow-lg">
        <p className="text-3xl">
          {groupName}'s Group{" "}
          <sub className="text-sm">by {groupData.LeaderName}</sub>{" "}
        </p>
      </div>
      <div className=" overflow-y-auto">
        <UserCard Data={groupData} />
      </div>
    </div>
  );
}
