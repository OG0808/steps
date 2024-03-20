import { create } from "zustand";

type flag = {
  setFlag: (newFlag: boolean) => void;
  setAlert: (newAlert: boolean) => void;
  setCounter: () => void;
  setCounterMinus: () => void;
  setResetCounter:()=> void,
  counter: number
  flag: boolean;
  alert: boolean;
};
const useStoreFlag = create<flag>((set) => ({
  flag: false,
  alert: false,
  counter: 0,
  setCounterMinus: () => set((state)=> ({ counter: state.counter - 1})),
  setCounter: () => set((state)=>({ counter: state.counter + 1 })),
  setResetCounter: () => set((state)=>({counter: state.counter = 0 })),
  setFlag: () => set((state)=>({ flag: !state.flag })),
  setAlert: () => set((state)=>({ alert: !state.alert })),
}));

export default useStoreFlag;
