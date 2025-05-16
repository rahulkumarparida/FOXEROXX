import { useState } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

export default function DashboardLanding() {
  let { setData, getData, removeData } = useLocalStorage("GroupNames");
  let [printData, setPrintData] = useState();
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
        {Groups.map((ele, idx) => {
          let {
            setData: setGropuData,
            getData: getGroupData,
            removeData: removeGroupData,
          } = useLocalStorage(`${ele}Data`);

          if (getGroupData(`${ele}Data`).Printed) {
            let PData = getGroupData(`${ele}Data`).Printed;

            console.log(PData);

            return (
              <div className="data " key={ele}>
                <p>Under {ele}</p>
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
