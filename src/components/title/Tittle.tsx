import { tittle } from "../../interfaces/types";

const Tittle = ({ title, description }: tittle) => {
  return (
    <div className="">
      <h2 className="text-4xl font-bold mb-5">{title}</h2>
      <span className=" opacity-50 font-medium">{description}</span>
    </div>
  );
};

export default Tittle;
