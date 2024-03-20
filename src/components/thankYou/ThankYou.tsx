import { useNavigate } from "react-router-dom"
import Thk from "../../../public/finish.svg"
import useStoreFlag from "../../store/useStore"

const ThankYou = () => {
    const navigate = useNavigate()
    const resetCounter = useStoreFlag((state)=> state.setResetCounter)
    
  return (
    <section className="flex flex-col items-center gap-20">
        <img className="h-full w-full" src={Thk} alt="" />
        <button onClick={()=>{
          resetCounter()
          navigate('/')
      localStorage.removeItem('plan')
      localStorage.removeItem('UserInfo')
      localStorage.removeItem('picks')
      }} className='bg-[#483eff] w-fit font-bold text-white text-lg px-5 py-2 rounded-xl'>Home</button>
    </section>
  )
}

export default ThankYou