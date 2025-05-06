import { useEffect, useState } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

export default function MemberEntryFrom() {
  let [group, setGroup] = useState({
    GroupName: "",
    LeaderName: "",
    TotalMembers: 0,
    Data: [],
  });
  let key = `${group.GroupName}Data`;
  let [boolexp, setBoolexp] = useState({ gotAllData: false });
  let [member, setMember] = useState({ Name: "", Amount: 0 });
  let { setData, getData } = useLocalStorage(key);
  let { setData: setGroupName, getData: getGroupName } =
    useLocalStorage("GroupNames");
  let groupname = getGroupName("GroupNames") ? getGroupName("GroupNames") : [];
  console.log(`what ___ ${groupname}`);

  function sumbitName(e) {
    console.log(group);
    if ((group.GroupName, group.LeaderName, group.TotalMembers !== "")) {
      let updatedGroup = { ...group, Data: [...group.Data, member] };
      setGroup(updatedGroup);

      if (group.TotalMembers > group.Data.length) {
        setData(updatedGroup);

        setBoolexp({ ...boolexp, gotAllData: true });
      } else {
        group.GroupName,
          group.LeaderName,
          group.TotalMembers !== ""
            ? alert("Fill the form completely")
            : alert("Max Member reached");
      }
    }

    setMember({ Name: "", Amount: 0 });

    e.preventDefault();
  }
  let FetchData = getData(key)
    ? getData(key)
    : {
        GroupName: "",
        LeaderName: "",
        TotalMembers: 0,
        Data: [{ Name: "", Amount: 0 }],
      };
  // console.log(FetchData);

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
          required
        />
        <div className="pt-4">
          <input
            className=""
            type="text"
            placeholder="Group Leader Name"
            onChange={(e) => {
              setGroup({ ...group, LeaderName: e.target.value });
            }}
            required
          />
          <input
            className=""
            type="number"
            placeholder="Total Members "
            onChange={(e) => {
              setBoolexp({ ...boolexp, gotAllData: false });
              setGroup({ ...group, TotalMembers: Number(e.target.value) });
            }}
            required
          />
        </div>
        <div className="teaMinputs ">
          <div>
            <input
              type="text"
              placeholder="Member Name"
              onChange={(e) => {
                setMember({ ...member, Name: e.target.value });
              }}
              value={member.Name}
            />
            <input
              type="text"
              placeholder="Amount Paid"
              onChange={(e) => {
                setMember({ ...member, Amount: Number(e.target.value) });
              }}
              value={member.Amount}
            />
            <button
              className="border-1 shadow-md mx-2 p-[3px] px-3 rounded-sm"
              onClick={(e) => {
                sumbitName(e);
              }}
            >
              Add
            </button>
          </div>
          <p>Total Members Added : {FetchData.Data.length} </p>
          {FetchData.Data.map((ele, idx) => {
            return (
              <div key={idx}>
                <p> Name :{ele.Name} </p>
                <p>Amount: {ele.Amount} </p>
              </div>
            );
          })}
        </div>
        {boolexp.gotAllData ? (
          <button className="border-1 shadow-md mx-2 p-[3px] px-3 rounded-sm" onClick={(e)=>{ setGroupName([...groupname , group.GroupName]); location.reload();  e.preventDefault()}}>
            Done
          </button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
