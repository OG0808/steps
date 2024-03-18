import { Route, Routes } from "react-router-dom"
import PersonalInfo from "./components/personalInfo/PersonalInfo"
import SideBar from "./components/sideBar/SideBar"
import SelectYourPlan from "./components/selectYourPlan/SelectYourPlan"


function App() {

  return (
  <section className=" flex bg-white p-5 w-full max-w-[940px] 
   mx-auto my-32 rounded-xl ">
    <SideBar/>
    <section className="mx-auto my-auto">
    <Routes>
    <Route path="/" element={<PersonalInfo/>}/>
    <Route  path="/plan" element={<SelectYourPlan/>}/>
    </Routes>
    </section>
  </section>
  )
}

export default App
