import useStoreFlag from "../../store/useStore"
import { steps } from "../../utils/arrays/Arrays"





const SideBar = () => {


  
  const count = useStoreFlag((state)=> state.counter)
  return (
    <section className="sidebar w-[274px]  h-[568px]
    bg-[#483eff]  rounded-xl flex flex-col gap-5  pt-10 pl-10
    max-md:flex-row  
    max-md:h-[192px]  
    max-md:w-full 
    max-md:pt-0
    max-md:pl-0
    max-md:-top-10
     max-md:left-0
    max-md:absolute
    max-md:gap-1
    max-md:rounded-none
         ">        

    {
        steps.map((step, index)=>((
            <div className="flex items-center gap-7 justify-start w-full max-md:justify-center  ">
            <span className={` border-2 rounded-full  
            flex items-center justify-center font-semibold w-10 h-10
            max-md:w-15 max-md:h-15
            ${
              count === index ? 'bg-white text-[#483eff]' : 'text-white '
            }`}>{step.stepNumber}</span>
            <div className=" max-md:hidden  ">
                <span className="text-white opacity-50
                 font-thin">{step.description.toUpperCase()}</span>
                <p className="text-white font-semibold  tracking-widest">{step.stepName.toUpperCase()}</p>
            </div>
            </div>
        )))
    }
        
    </section>
  )
}

export default SideBar