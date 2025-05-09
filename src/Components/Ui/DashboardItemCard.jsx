import { useEffect, useState } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
// import UserCard from "./UserCard";
import PrintDialog from "./PrintDialog";
export default function DashboardItemCard({ groupName }) {

  let { setData, getData } = useLocalStorage(`${groupName}Data`);
  let groupData = getData(`${groupName}Data`);
  console.log("val--> ", groupData);


  function UserCard({ Data }) {
    //   console.log(Data);
    
    let [state, setState] = useState(false);

    return (
      <div className="flex  flex-col p-3 items-center justify-center">
        <div>
          <button
            className="createBTN border-1 shadow-md p-1 px-2 rounded-sm"
            onClick={(e) => {
              setState(!state);
              e.preventDefault();
            }}
          >
            <p> {state ? "Done here" : "Printed"}</p>
          </button>
        </div>

        {state ? (
          <PrintDialog data={Data} />
        ) : (
          <>
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
          </>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="border-0 flex  items-center justify-center h-[10vh] shadow-lg">
        <p className="text-3xl">{groupName}'s Group </p>
      </div>
      <UserCard Data={groupData} />
    </div>
  );
}
