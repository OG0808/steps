import { useState } from "react";
import useStoreFlag from "../../store/useStore";
import { Price } from "../../interfaces/types";
import { Plan } from "../../interfaces/types";

export const planIfo =()=>{
    const flag = useStoreFlag((state) => state.flag);
  
    const [planObject, setPlanobject] = useState<Price>();
  
  
    const selectPlan = (plan: Plan) => {
      const selectedPlan = {
        image: plan.image,
        title: plan.title,
        ...(flag ? { priceYear: plan.priceYear } : { priceMo: plan.priceMo }),
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

    return{
        planObject,
        selectPlan,
        getselectPlan,
        flag
    }
}