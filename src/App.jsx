
import './App.css'
import Nav from './Components/Nav'
import { Routes ,Route} from 'react-router-dom'
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import {Databoard} from "./Components/Databoard";
import Account from './Components/Account';
import Docs from './Components/Docs';


function App() {

  return (
   <>
    <div>
      <Nav />
    </div>

   <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Dashboard" element={<Dashboard />}>
       
        </Route>
        <Route path="/HowToUse" element={<Databoard />}/>
  <Route path="/Account" element={<Account />}/>  
    <Route path="/Docs" element={<Docs/>}/>  

        </Routes>
       
  
     
   </>
  )
}

export default App
