export default function MemberCard({Card}) {
    
    return   <div className="CreatedGroupQ border-1 rounded-sm  h-110 w-[95vw] mt-10 flex items-center justify-around "  >
           
    {
        Card.map((ele , idx)=>{
            return <div key={ele.id} className="border-1 h-80 w-[25vw] rounded-lg shadow-2xl p-5">
                <p className=" text-xl">{ele.Name}</p>
                <p className="text-2xl">{ele.Emoji}</p>
                <p className=" pt-3 ">This group  is consist's of {ele.totalMembers} People you can add members later also so no need to worry. If you choose  <b>{ele.Name}</b> now.</p>
                <button className=" border-1 shadow-md p-1 m-15 rounded-sm ">CREATE</button>
            </div>
        })
    }
</div>
}