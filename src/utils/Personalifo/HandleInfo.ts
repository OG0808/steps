import { useForm } from "react-hook-form";
import { inputs } from "../../interfaces/types";
import { useNavigate } from "react-router-dom";

export const handleInfo = () => {
  const { register, reset, handleSubmit } = useForm<inputs>();
  const onSubmit = (data: inputs) => {
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

  const navigate = useNavigate()

  return {
    navigate,
    register,
    handleSubmit,
    onSubmit,
    resetValues,
  };
};
