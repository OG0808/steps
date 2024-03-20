import { useNavigate } from "react-router-dom";

export const handleNavigate = () => {
  const nav = useNavigate();

  const navigate = (page: string) => {
    nav(page);
  };

  return{
    navigate
  }
};
