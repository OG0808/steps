import useStoreFlag from "../../store/useStore";
import "./toggle.css";

const Toggle = () => {
  const setFlag = useStoreFlag((state) => state.setFlag);
  const flag = useStoreFlag((state) => state.flag);


  return (
    <section className="flex flex-col items-center max-w-[450px]">

        <div
          className="mt-10 mx-auto flex justify-center gap-10 items-center 
      rounded-lg w-full bg-[#f8f9ff] h-[48px]"
        >
          <span
            className={`${
              flag ? "opacity-40" : "opacity-100"
            } transition text-sm font-semibold`}
          >
            Monthly
          </span>
          <label className="switch">
          <input type="checkbox" checked={flag} onChange={() => setFlag(flag)} />
            <span className="slider"></span>
          </label>
          <span
            className={`${
              flag ? "opacity-100" : "opacity-40"
            } transition text-sm font-semibold`}
          >
            Yearly
          </span>
        </div>
      
    </section>
  );
};

export default Toggle;
