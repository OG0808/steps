import { picks } from "../../utils/arrays/Arrays";
import Tittle from "../title/Tittle";
import "./pickAddOns.css";
import Btn from "../btn/Btn";
import { handlePickInfo } from "../../utils/pickInfo/handlePickInfo";
import { useState } from "react";
import useStoreFlag from "../../store/useStore";


const PickAddOns = () => {

 const {addPick, flag, navigate, picksAdd}=handlePickInfo()
 const [pickNextPage, setPickNextPage] = useState(false)
 const counter = useStoreFlag((state)=> state.setCounter)
 const countMinus =useStoreFlag((state)=> state.setCounterMinus)
const navi = () =>{
  if (picksAdd.length >= 1 ) {
    navigate("/finish")
    counter()
  }else{
    setPickNextPage(true)
  }
}
  return (
    <section className="relative">
      {
     pickNextPage &&
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
            onClick={()=>{setPickNextPage(false) }}
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
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <article className="flex flex-col gap-5 mt-10 -mb-9">
        {picks.map((pick) => (
          <form
            className={`${
              picksAdd.includes(pick) && `border-[#483eff] border-2 bg-[#f8f9ff]`
            } flex  rounded-lg px-5 
     justify-between max-sm:w-full w-[450px] h-[81px] items-center border cursor-pointer`}
          >
            <div className="flex gap-6 ">
              <label className="checkbox-container">
                <input
                  className="cursor-pointer custom-checkbox"
                  tabIndex={3}
                  onClick={() => addPick(pick)}
                  id="check"
                  type="checkbox"
                />
                <span className="checkmark"></span>
              </label>
            
              <div>
                <p className="font-bold">{pick.service}</p>
                <p className="opacity-40 font-normal">{pick.description}</p>
              </div>
            </div>

            <span className={`${
              picksAdd.includes(pick) && `text-[#483eff] `
            }  font-normal`}>+{flag ? pick.priceYr : pick.priceMo}
            { flag ? "/yr":"/mo"}</span>
          </form>
        ))}
      </article>
      <Btn
      onClickNext={()=>{
        
        navi()}}
      onclickBack={()=>{
        countMinus()
        navigate("/plan")}}
      />
    </section>
  );
};

export default PickAddOns;
