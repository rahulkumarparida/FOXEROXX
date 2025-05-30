
import './App.css'
import Nav from './Components/Nav'
import { BrowserRouter ,Routes ,Route, Outlet} from 'react-router-dom'
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Databoard from "./Components/Databoard";
import DashboardLanding from './Components/Ui/DashboardLanding';

function App() {

  return (
   <>
    <div>
      <Nav />
    </div>

   <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="PrintLogs" element = {<DashboardLanding />}/>
        </Route>
        <Route path="/Databoard" element={<Databoard />}/>
        </Routes>
  
  
     
   </>
  )
}

export default App
