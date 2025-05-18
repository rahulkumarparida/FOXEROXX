import { useState } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

export default function DashboardLanding() {
  let { setData, getData, removeData } = useLocalStorage("GroupNames");
  let [visibleEle, setVisibleEle] = useState();
  let Groups = getData("GroupNames");
  let [visible, setVisibity] = useState(false);
 
  return (
    <div className="h-[100%] border-1  ">
      <h1 className="text-center mt-3">
        Hello Welcome to the page to click on the group name to render your
        group data{" "}
      </h1>
      <div className="RecentPrintData overflow-auto  border-1  m-3 p-3">
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

            return (
              <div className="PrintLogs border-2  m-2 p-3 w-150" key={ele}>
                <div
                  className="  flex justify-between px-5 w-[100%]"
                  key={ele}
                  id={idx}
                >
                  <p>Under {ele}</p>
                  <p
                    className="cursor-pointer "
                    onClick={(e) => {
                      setVisibity(!visible);
                     setVisibleEle(e.target.parentNode.id)
                      console.log("id", e.target.parentNode.id);
                    }}
                  >
                    {visible && idx == visibleEle ? "▲" : "▼"}
                  </p>
                </div>
                {visible && idx == visibleEle
                  ? PData.map((ele, idx) => {

                     return visible  ?  (
                        <div
                          className="Printdata border-2  m-2 p-2 rounded-lg "
                          key={idx + ele}
                        >
                          <p>
                            {ele.Number} Pages are printed each costing{" "}
                            {ele.cost}
                          </p>
                          <p>Total Cost: {ele.Number * ele.cost}</p>
                        </div>
                      ) :  ""
                      

                       
                    })
                  : ""}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
