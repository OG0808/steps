import { useState } from "react";
import { handleNavigate } from "../navigate/navigate";
import useStoreFlag from "../../store/useStore";
import { Picks } from "../../interfaces/types";

export const handlePickInfo = () => {

  const [picksAdd, setPickadd] = useState<Picks[]>([]);

  localStorage.setItem("picks", JSON.stringify(picksAdd));

  const { navigate } = handleNavigate();

  const flag = useStoreFlag((state) => state.flag);

  const addPick = (pick: Picks) => {
    if (picksAdd.includes(pick)) {
      setPickadd(picksAdd.filter((pic) => pic.service !== pick.service));
    } else {
      setPickadd([...picksAdd, pick]);
    }
  };


  
  return {
    addPick,
    flag,
    navigate,
    picksAdd,
  };
};
