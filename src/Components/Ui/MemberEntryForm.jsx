import { useEffect, useState } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

export default function MemberEntryFrom() {
  let [group, setGroup] = useState({
    GroupName: "",
    LeaderName: "",
    TotalMembers: 0,
    Data: [],
    Printed : []
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
    // console.log(group);
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
        Printed : []
      };
  // console.log(FetchData);

  return (
   <div className="FormCont border border-zinc-300 rounded-md mt-10 flex flex-col gap-6 p-6 px-8 bg-white shadow-md">
    <p className="text-2xl text-center"
>Create Your Group</p>
  <form className="flex flex-col space-y-4">
    <input
      className="w-full border border-zinc-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      type="text"
      placeholder="Enter the Group Name"
      onChange={(e) => {
        setGroup({ ...group, GroupName: e.target.value });
      }}
      required
    />
    <div className="pt-2 flex flex-col gap-3">
      <input
        className="border border-zinc-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        type="text"
        placeholder="Group Leader Name"
        onChange={(e) => {
          setGroup({ ...group, LeaderName: e.target.value });
        }}
        required
      />
      <input
        className="border border-zinc-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        type="number"
        placeholder="Total Members "
        onChange={(e) => {
          setBoolexp({ ...boolexp, gotAllData: false });
          setGroup({ ...group, TotalMembers: Number(e.target.value) });
        }}
        required
      />
    </div>
    <div className="teaMinputs space-y-4 mt-2">
      <div className="flex flex-wrap gap-3 items-center">
        <input
          className="border border-zinc-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          type="text"
          placeholder="Member Name"
          onChange={(e) => {
            setMember({ ...member, Name: e.target.value });
          }}
          value={member.Name}
        />
        <input
          className="border border-zinc-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          type="text"
          placeholder="Amount Paid"
          onChange={(e) => {
            setMember({ ...member, Amount: Number(e.target.value) });
          }}
          value={member.Amount}
        />
        <button
          className="border border-zinc-400 bg-zinc-100 hover:bg-black hover:text-white transition-colors shadow-md p-1 px-4 rounded-md"
          onClick={(e) => {
            sumbitName(e);
          }}
        >
          Add
        </button>
      </div>
      <p className="text-zinc-700 font-medium">
        Total Members Added: {FetchData.Data.length}
      </p>
      <div className="space-y-2">
        {FetchData.Data.map((ele, idx) => {
          return (
            <div key={idx} className="MemberName text-zinc-800 bg-zinc-50 p-2 rounded-md border border-zinc-200">
              <p>Name: {ele.Name}</p>
              <p>Amount: ₹{ele.Amount}</p>
            </div>
          );
        })}
      </div>
    </div>
    {boolexp.gotAllData ? (
      <button
        className="border border-zinc-400 bg-zinc-100 hover:bg-black hover:text-white transition-colors shadow-md mx-2 p-1 px-4 rounded-md"
        onClick={(e) => {
          setGroupName([...groupname, group.GroupName]);
          location.replace("/Dashboard");
          e.preventDefault();
        }}
      >
        Done
      </button>
    ) : (
      ""
    )}
  </form>
</div>

  );
}
