import { useForm } from "react-hook-form";
import { inputs } from "../../interfaces/types";

export const handleInfo = () => {


  const { register, reset, handleSubmit } = useForm<inputs>();

  const onSubmit = (data: inputs) => {
    console.log(data);
    localStorage.setItem("UserInfo", JSON.stringify(data));
    reset({
      name: "",
      phone: "",
      email: "",
    });
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
