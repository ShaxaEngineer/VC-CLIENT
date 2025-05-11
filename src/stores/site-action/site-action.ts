import { create } from 'zustand';

export interface IUseStoreSiteAction {
  darkMode: boolean;
  checkedSerachData: boolean;
  setdarkMode: (value: boolean) => void;
  setCheckedSerachData: (value: boolean) => void;
}

export const useStoreSiteAction = create<IUseStoreSiteAction>((set) => ({
  darkMode: true,
  checkedSerachData: false,
  setdarkMode: (value: boolean) => set(() => ({ darkMode: value })),
  setCheckedSerachData: (value: boolean) => {
    set(() => ({ checkedSerachData: value }));
  },
}));
