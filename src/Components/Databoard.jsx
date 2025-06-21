 import HomeImg  from "./Images/Home.png"
 import DashboardImg   from "./Images/Dashboard.png"
 import  DashboardFromImg  from "./Images/DasboardForm.png"
 import DashboardGroupImg  from "./Images/DashboardGroup.png"
 import NormDashboard from "./Images/NormDashboard.png"
 
 
 function Databoard() {
    

const steps = [
  {
    emoji: "🧾",
    title: "Step 1: Create a Group",
    description:
      "Fill in the form to enter your group name, your name (as leader), and all the members who’ll share the xerox jobs and costs.",
    imageNote: HomeImg,
  },
  {
    emoji: "✅",
    title: "Step 2: Click \"Done\"",
    description:
      "Once you’ve added everyone, click the Done button to save the group in localStorage. Your data is now safely saved in your browser.",
    imageNote:NormDashboard,
  },
  {
    emoji: "📊",
    title: "Step 3: Visit the Dashboard",
    description:
      "Click the Dashboard to see your group, members, balances, and xerox details — all in one place!",
    imageNote: DashboardGroupImg,
  },
  {
    emoji: "🖨️",
    title: "Step 4: Log a New Xerox Job",
    description:
      "If someone prints something, select the group, click Add Print, fill in the print details, and hit Done here.",
    imageNote: DashboardFromImg,
  },
  {
    emoji: "🔁",
    title: "Step 5: Auto-Redirect to Dashboard",
    description:
      "After logging the print, the site auto-redirects to the Dashboard where you can see the updated data instantly.",
    imageNote: DashboardImg,
  },
];


    return <div className="bg-gray-300 p-2  w-full px-4 py-6 flex flex-col gap-10 items-center justify-center text-center">
        
        <hr />
        <div className="overview bg-white rounded-xl shadow-md p-6 w-full">
     <span className="text-3xl mt-3 flex">🧾<p className="underline">OverView</p></span> 
    <p className="m-3 p-1 ">FOXEROXX is a web-based tool designed specifically for student groups who regularly share expenses for document printing or "xeroxing" in college environments. In many hostels or classrooms, one person typically takes on the responsibility of collecting documents, printing them, and then collecting payments later — often leading to confusion, forgetfulness, or unbalanced dues.
FOXEROXX eliminates this hassle by allowing students to:
Create and manage custom groups.
Track each xerox task along with its cost.
Log who paid and how much.
Automatically calculate outstanding balances for each group member.
It stores all data securely in the browser using localStorage, so there's no need for a backend or login system — just open the app and start managing your xerox tasks more efficiently.
This tool helps maintain clarity, transparency, and accountability within student groups, making it a practical solution for day-to-day academic collaboration.</p>
        </div>

  <div className="VideoExplanation p-4 w-full h-140 bg-white rounded-xl shadow-xl">
  <iframe src="https://www.loom.com/embed/53057b9786be47cdb984c4edca526981?sid=8b5d44de-52e8-4bb5-b515-d58bbf174695" className=" h-120 w-full rounded"></iframe>
  </div>


<p className="text-2xl text-center bg-white p-6 rounded shadow-xl w-[100%]">Here is How to use it in step by step ?</p>

     <div className=" HowTo ">
      {steps.map((step, index) => (
        <div key={index}>
          <div className="bg-white rounded-xl shadow-md p-6 w-[100%]  m-6">
            <h2 className="text-2xl font-bold mb-2">
              {step.emoji} {step.title}
            </h2>
            <p className="text-gray-700">{step.description}</p>
            <div className="mt-4 text-sm text-gray-400 flex justify-center"><img src={step.imageNote} alt="" srcset="" className="h-90" /></div>
          </div>
          
        </div>
      ))}
    </div>
   
    </div>
}

export {Databoard}