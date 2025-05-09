import { useState } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

export default function PrintDialog(props) {
  let [formData, setFromData] = useState({ cost: 0, Number: 0 });

  let { setData, getData, removeData } = useLocalStorage(
    `${props.data.GroupName}Data`
  );
  // let values =  localStorage.getItem(`${props.data.GroupName}Data`)

  function HandleDone() {
    let data = getData(`${props.data.GroupName}Data`);

    let updatedData = data.Data.map((ele, id) => {
      let change = ele.Amount - formData.Number * formData.cost;
      ele.Amount = change;
      // console.log(ele.Amount);
      //  console.log(ele);
      return ele;
    });
    console.log("Updated Data -- ", updatedData);

    getData(`${props.data.GroupName}Data`).Data = updatedData;
    setData(data);
    setFromData({ cost: 0, Number: 0 });
  }

  return (
    <div className=" border-1 p-3 mt-5 w-[50vw] ">
      <form
        onSubmit={(e) => {
          HandleDone();
          e.preventDefault();
        }}
      >
        <div>
          <label htmlFor="Cost">Cost for Each Paper : </label>
          <input
            type="text"
            className="Cost"
            placeholder="Cost for Each Paper"
            onChange={(e) => {
              setFromData({ ...formData, cost: e.target.value });
            }}
            value={formData.cost}
          />
        </div>
        <div>
          <label htmlFor="Number">Number Of papers : </label>
          <input
            type="number"
            className="Number"
            placeholder="Number Of papers"
            onChange={(e) => {
              setFromData({ ...formData, Number: e.target.value });
            }}
            value={formData.Number}
          />
        </div>
        <div>
          <p>
            Total Cost :- ₹{Number(formData.Number) * Number(formData.cost)}{" "}
          </p>
        </div>
        <div>
          <button
            className="createBTN border-1 shadow-md p-1 px-2 rounded-sm"
            type="sumbit"
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
}
