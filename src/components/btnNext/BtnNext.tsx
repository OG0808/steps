import React from "react";

type btn = {
  onClick: () => void;
};

const BtnNext: React.FC<btn> = ({ onClick }) => {
  return (
    <div className="flex justify-end mt-20">
      <button
        onClick={onClick}
        className="active:opacity-70 transition font-semibold text-lg text-white
           bg-[#022959] px-4 py-2 rounded-lg w-fit">
        Next Step
      </button>
    </div>
  );
};

export default BtnNext;
