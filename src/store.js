import { create } from "zustand";
import { immer } from 'zustand/middleware/immer'
import { devtools } from "zustand/middleware";


const useStore = create(
  devtools(
    immer((set) => ({
      count: 0,

      addCount() {
        set((state) => {
          state.count = state.count + 1;
        });
      },

      subCount() {
        set((state) => {
          state.count = state.count - 1;
        });
      },

      setCount(count) {
        set((state) => {
          state.count = count;
        });
      },

    }))
  )
);

export default useStore;
