
import { useState } from "react";
import { planes } from "../../utils/arrays/Arrays";
import { planIfo } from "../../utils/planInfo/PlanInfo";
import Btn from "../btn/Btn";
import Tittle from "../title/Tittle";
import Toggle from "../toggle/Toggle";
import { Plan } from "../../interfaces/types";
import useStoreFlag from "../../store/useStore";



const SelectYourPlan = () => {
const { selectPlan, flag, navi, navigate }=planIfo()
const [first, setfirst] = useState({})
const alert = useStoreFlag((state) => state.alert);
const setAlert = useStoreFlag((state) => state.setAlert);
const countminus = useStoreFlag((state) => state.setCounterMinus);




  return (
    <section className="relative">
      {alert &&
             <div className="absolute z-10 top-0 flex pt-44 justify-center bg-opacity-70 rounded-lg bg-slate-300 h-full w-full left-0 right-0 bottom-0">
             <span
                 className="
                 
                 mt-10 inline-flex items-center justify-center
                 rounded-lg w-fit bg-red-100 px-5 py-2 text-red-700 h-[48px]"
                 >
                 <p className="whitespace-nowrap text-lg font-medium ">
                 please choose a plugin
                 </p>
                 <button
                   onClick={()=>{setAlert(false) }}
                   className="border-none bg-[#022959] text text-white py-1 ml-3 rounded-lg px-2
                   cursor-pointer font-semibold
                   "
                   >
                   Close
                 </button>
               </span>
             </div>
      }
      <Tittle
        title="Select Your Plan"
        description="You have the option of monthly or yearly billing."
      />

      <article className=" flex gap-5 mt-10 w-full max-sm:flex-col ">
        {planes.map((plan:Plan) => {
          return (
            <div
              key={plan.title}
              className={` max-sm:w-full max-sm:h-fit max-sm:flex-row max-sm:justify-start
              
              
              
              
              
              rounded-lg flex 
              items-start justify-around
              flex-col p-3 border-2 
              w-[138px] h-[160px] gap-3 cursor-pointer
            hover:border-[#483eff]
            focus:border-[#483eff] 
            focus:bg-[#f8f9ff] hover:bg-[#f8f9ff]
              transition`}
              tabIndex={0}
              onClick={() => {selectPlan(plan)
              setfirst(plan)
              }}
            >
              <img src={plan.image} alt="" />
              <div className="flex flex-col gap-2 ">
                <span className="font-semibold text-sm">{plan.title}</span>
                <span className="font-normal text-xs opacity-70">
                  $ {flag ? plan.priceYear : plan.priceMo}
                  { flag ? "/yr":"/mo"}
                </span>
                {
                 <span className="font-normal text-xs opacity-70">{flag && plan.fre}</span> 
                }
              </div>
            </div>
          );
        })}
      </article>
            
      <Toggle />

      <Btn
      onclickBack={() => {
        countminus()
        navigate("/")}}
      onClickNext={() => {navi(first)
     
      }} />
    </section>
  );
};

export default SelectYourPlan;
