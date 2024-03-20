import { useForm } from "react-hook-form";
import { inputs } from "../../interfaces/types";
import { useNavigate } from "react-router-dom";
import useStoreFlag from "../../store/useStore";


export const handleInfo = () => {

  const { register, reset, handleSubmit } = useForm<inputs>();
  const counter = useStoreFlag((state)=> state.setCounter)

  const navigate = useNavigate()

  const onSubmit = (data: inputs) => {
    localStorage.setItem("UserInfo", JSON.stringify(data));
    reset({
      name: "",
      phone: "",
      email: "",
    });
    if (data) {
      counter()
      navigate("/plan")
    }
  };

  const resetValues = () => {
    const storedData = localStorage.getItem("UserInfo");
    if (storedData) {
      const item: inputs = JSON.parse(storedData);
      reset(item);
    }
  };

 

  return {
   
    register,
    handleSubmit,
    onSubmit,
    resetValues,
  };
};
