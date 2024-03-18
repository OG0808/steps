import { steps } from "../../utils/arrays/Arrays"






const SideBar = () => {
  return (
    <section className="max-w-[274px] w-full h-[568px]
    bg-[#483eff] rounded-xl flex flex-col gap-5 items-center pt-10 pl-10
    ">        

    {
        steps.map((step)=>((
            <div className="flex items-center gap-7 justify-start w-full">
            <span className=" border-2 rounded-full  
            flex items-center justify-center  text-white font-semibold w-10 h-10
            ">{step.stepNumber}</span>
            <div>
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