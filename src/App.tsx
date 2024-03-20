import { Route, Routes } from "react-router-dom"
import PersonalInfo from "./components/personalInfo/PersonalInfo"
import SideBar from "./components/sideBar/SideBar"
import SelectYourPlan from "./components/selectYourPlan/SelectYourPlan"
import PickAddOns from "./components/pickAddOns/PickAddOns"
import FinishingUp from "./components/finishingUp/FinishingUp"
import ThankYou from "./components/thankYou/ThankYou"


function App() {

  return (
  <section className=" relative flex max-md:shadow-none bg-white shadow-2xl p-5 w-full max-w-[940px] 
   mx-auto my-32 rounded-xl max-md:flex-col ">
    <SideBar/>
    <section className="mx-auto my-auto 
    max-md:p-7 max-md:rounded-xl 
  max-md:z-10
    max-md:mt-20
  max-md:bg-white 
    max-md:shadow-2xl
   
    
    ">
      
    <Routes>
    <Route path="/" element={<PersonalInfo/>}/>
    <Route  path="/plan" element={<SelectYourPlan/>}/>
    <Route path="/pick" element={<PickAddOns/>}/>
    <Route path="/finish"  element={<FinishingUp/>}/>
    <Route path="thk" element={<ThankYou/>}/>
    </Routes>
    </section>
  </section>
  )
}

export default App
