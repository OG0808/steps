import { useEffect } from "react";
import { handleInfo } from "../../utils/Personalifo/HandleInfo";
import Tittle from "../title/Tittle";



const PersonalInfo = () => {
  const { handleSubmit, onSubmit, register, resetValues} = handleInfo();


  
  useEffect(() => {
    resetValues();
  }, []);

  return (
    <section className=" max-md:z-20"> 
      <Tittle
        title="Personal Info"
        description="Please provide your name,
         email address, and phone number."
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  mt-9 w-full ">
        <label className="font-medium mb-1 text-[#022959]">Name</label>
        <input
          {...register("name", { required: true })}
          className="border border-slate-200 p-2
          font-semibold rounded-lg mb-5"
          type="text"
          name="name"
          placeholder="e.g. Stephen King"
        />

        <label className="font-medium mb-1 text-[#022959]">Email Address</label>
        <input
          {...register("email", { required: true })}
          className="border border-slate-200  p-2
          font-semibold rounded-lg mb-5"
          type="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
        />

        <label className="font-medium mb-1 text-[#022959]">Phone Number</label>
        <input
          {...register("phone", { required: true })}
          className="border border-slate-200  p-2
          font-semibold rounded-lg"
          type="number"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          defaultValue={"e.g. +1 234 567 890"}
        />
        <div className="flex justify-end mt-20">
          <button
          onClick={()=>{}}
            className=" font-semibold text-lg text-white
        bg-[#022959] px-4 py-2 rounded-lg w-fit
        ">
            Next Step
          </button>
        </div>
      </form>
    </section>
  );
};

export default PersonalInfo;
