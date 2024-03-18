import { create } from "zustand";

type flag = {
  setFlag: (newFlag: boolean) => void;
  flag: boolean;
};
const useStoreFlag = create<flag>((set) => ({
  flag: false,

  setFlag: () => set((state)=>({ flag: !state.flag })),
}));

export default useStoreFlag;
