import { useState } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

export default function DashboardLanding() {
  let { setData, getData, removeData } = useLocalStorage("GroupNames");
  let [visible, setVisibity] = useState(false);
  let [visibleEle , setVisibleEle] = useState(null)
  let Groups = getData("GroupNames");

  const LogData = () => {
    return <div className=""></div>;
  };

  return (
    <div className="h-[100%] border-1">
      <h1 className="text-center mt-3">
        Hello Welcome to the page to click on the group name to render your
        group data{" "}
      </h1>
      <div className="RecentPrintData overflow-y-scroll border-1 h-[80%] m-3 p-3">
        <p className="text-center text-zinc-600 ">
          Check your Print Logs under your group name
        </p>
        {Groups.map((ele, idx) => {
          let {
            setData: setGropuData,
            getData: getGroupData,
            removeData: removeGroupData,
          } = useLocalStorage(`${ele}Data`);

          if (getGroupData(`${ele}Data`).Printed) {
            let PData = getGroupData(`${ele}Data`).Printed;

            console.log(PData);
            let groupnamE = ele;
            return (
              <div className="data border-2  m-2 p-3 w-100" key={ele}>
                <div className="flex justify-around w-[100%]" key={ele}>
                  <p>Under {groupnamE}</p>
                  <p
                    className="cursor-pointer "
                    onClick={(e) => {
                      setVisibity(!visible);
                      {visible && visibleEle == ele ?  setVisibleEle(e.parentNode.key) : setVisibleEle(null)  }
                    }}
                  >
                    {visible && ele == visibleEle ? "▲" : "▼"}
                  </p>
                </div>
                {PData.map((ele, idx) => {
                  return (
                    <div className="border-2  m-2 p-2 rounded-lg " key={idx + ele}>
                      <p>
                        {ele.Number} Pages are printed each costing {ele.cost}
                      </p>
                      <p>Total Cost: {ele.Number * ele.cost}</p>
                    </div>
                  );
                })}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
