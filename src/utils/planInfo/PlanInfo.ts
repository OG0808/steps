import { useState } from "react";
import useStoreFlag from "../../store/useStore";
import { Plan } from "../../interfaces/types";
import { useNavigate } from "react-router-dom";

export const planIfo =()=>{
    const flag = useStoreFlag((state) => state.flag);
    const setAlert = useStoreFlag((state)=>state.setAlert)
    const counter = useStoreFlag((state)=> state.setCounter)
    const [planObject, setPlanobject] = useState<Plan>();
  
  
    const selectPlan = (plan: Plan) => {
      const selectedPlan = {
        image: plan.image,
        title: plan.title,
       priceYear: plan.priceYear,
       priceMo: plan.priceMo 
      };
  
      localStorage.setItem("plan", JSON.stringify(selectedPlan));
    };
  
    const getselectPlan = () => {
      const storedData = localStorage.getItem("plan");
      if (storedData) {
        const item: Plan = JSON.parse(storedData);
        setPlanobject(item);
      }
    };

    const navigate = useNavigate()

    const navi =(first:object)=>{
      if (Object.keys(first).length !== 0) {
        navigate("/pick")
        counter()
      }else{
        setAlert(true)
      }

      console.log("me estoy ejecutando");
      
    }
    
    return{
      navigate,
        navi,
        planObject,
        selectPlan,
        getselectPlan,
        flag
    }
}