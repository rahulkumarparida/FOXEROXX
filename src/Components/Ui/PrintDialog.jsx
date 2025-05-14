import { useState } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

function PrintDialog(props) {
  let [formData, setFromData] = useState({ cost: 0, Number: 0 });
  let { setData, getData, removeData } = useLocalStorage(
    `${props.data.GroupName}Data`
  );

  function HandleDone() {
    let data = getData(`${props.data.GroupName}Data`);

    // console.log(data.Printed);

    let updatedData = data.Data.map((ele, id) => {
      let change = ele.Amount - formData.Number * formData.cost;

      ele.Amount = change;

      return ele;
    });

    
    // console.log(printedData);
    
    data = {...data , Printed : [...data.Printed , formData] }
    console.log("Updated Data -- ", updatedData);
    getData(`${props.data.GroupName}Data`).Data = updatedData;
    setData(data);
    console.log(data);
    
    setFromData({ cost: 0, Number: 0 });
  }

  return (
    <div className="PrintDialogCont rounded-lg shadow-lg shadow-zinc-400 border-0 p-3 mt-5 w-[50vw]  text-lg">
      <form
        onSubmit={(e) => {
          HandleDone();
          e.preventDefault();
        }}
        className="max-w-md mx-auto mt-8 p-6 bg-white  space-y-6"
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="Cost" className="text-gray-700 font-medium">
            Cost for Each Paper:
          </label>
          <input
            type="text"
            className="Cost border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            placeholder="e.g. ₹1 ,₹2..."
            onChange={(e) => {
              setFromData({ ...formData, cost: e.target.value });
            }}
            value={formData.cost == 0 ? "" : formData.cost}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="Number" className="text-gray-700 font-medium">
            Number Of Papers:
          </label>
          <input
            type="number"
            className="Number border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            placeholder="Number Of papers"
            onChange={(e) => {
              setFromData({ ...formData, Number: e.target.value });
            }}
            value={formData.Number == 0 ? "" : formData.Number}
          />
        </div>
        <div className="text-gray-800 font-semibold text-lg">
          <p>
            Total Cost :- ₹{Number(formData.Number) * Number(formData.cost)}{" "}
          </p>
        </div>
        <div>
          <button
            className="createBTN border border-gray-300 bg-zinc-500 text-white shadow-md p-2 px-4 rounded-md hover:bg-black transition-colors"
            type="sumbit"
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
}

export { PrintDialog };
