
import MemberEntryFrom from "./Ui/MemberEntryForm"
// no need for this some doc instead that will do good
export default function(){
    

    return <div className="home flex items-center flex-col sm:text-sm  bg-gray-300">
                 <h1 className="pt-4 text-3xl">HomePage</h1>   
        <div className="HomeConatiner py-10 flex  flex-col  items-center">
           
            <div className=" border-1 text-red-700 p-3 rounded-sm bg-red-200">
                <p>Do not Refreshes the Page in the middle the data will erased!! and also make sure to click done after writing your group member Name </p>
            </div>
              <MemberEntryFrom />  
        </div>
    </div>
}