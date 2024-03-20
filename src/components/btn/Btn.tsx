import React from "react";


type btn = {
  onClickNext: () => void;
  onclickBack: () => void;
};

const Btn: React.FC<btn> = ({ onClickNext, onclickBack }) => {

 
  return (
    <div className="flex justify-between mt-20">
      <button
        onClick={onclickBack}
        className="
          hover:text-black 
          active:opacity-70 transition font-semibold text-lg text-[#9699aa]
          px-4 py-2 rounded-lg w-fit"
      >
        Back
      </button>
      <button
        onClick={onClickNext}
        className="active:opacity-70 transition font-semibold text-lg text-white
           bg-[#022959] px-4 py-2 rounded-lg w-fit"
      >
        Next Step
      </button>
    </div>
  );
};

export default Btn;
