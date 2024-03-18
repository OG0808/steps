import { useState } from "react";
import useStoreFlag from "../../store/useStore";
import { planes } from "../../utils/arrays/Arrays";
import BtnNext from "../btnNext/BtnNext";
import Tittle from "../title/Tittle";
import Toggle from "../toggle/Toggle";

type Plan = {
  image: string;
  title: string;
  priceMo: string;
  priceYear: string;
  fre: string;
};

const SelectYourPlan = () => {
  const flag = useStoreFlag((state) => state.flag);
  const [planObject, setPlanobject] = useState({});
  console.log(planObject);

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

  return (
    <section>
      <Tittle
        title="Select Your Plan"
        description="You have the option of monthly or yearly billing."
      />

      <article className=" flex gap-5 mt-10 ">
        {planes.map((plan) => {
          return (
            <div
              key={plan.title}
              className={`rounded-lg flex items-start justify-around
           flex-col p-3 border-2 w-[138px] h-[160px] gap-3 cursor-pointer
           hover:border-[#483eff] focus:border-[#483eff] focus:bg-[#f8f9ff] hover:bg-[#f8f9ff]
            transition `}
              tabIndex={0}
              onClick={() => selectPlan(plan)}
            >
              <img src={plan.image} alt="" />
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-sm">{plan.title}</span>
                <span className="font-normal text-xs opacity-70">
                  {flag ? plan.priceYear : plan.priceMo}
                </span>
              </div>
            </div>
          );
        })}
      </article>

      <Toggle />
      <button onClick={() => getselectPlan()}>datos del localstorage</button>

      <BtnNext onClick={() => {}} />
    </section>
  );
};

export default SelectYourPlan;
