import { useLocalStorage } from "../../Hooks/useLocalStorage"

export default function DashboardLanding(){
   let {setData , getData , removeData} = useLocalStorage("GroupNames")
   
   let Groups = getData("GroupNames")
   console.log(Groups);
   Groups.map((ele , idx)=>{
           let {setData : setGropuData , getData : getGroupData, removeData : removeGroupData} = useLocalStorage(`${ele}Data`)   
            console.log("data got " ,getGroupData(`${ele}Data`).Printed );
            


    })


    return <div className="h-[100%] border-1">
        <h1 className="text-center mt-3">Hello Welcome to the page to click on the group name to render your group data </h1>
        <div className="RecentPrintData border-1 h-[80%] m-3">

        </div>
                                    
    </div>
}