/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';

import { FileType } from '@/components';

export interface IUseDataSortsAction {
  candinate_position: number | string | null;
  setcandinate_position: (value: number | string | null) => void;
  candinate_eligibl_uk: 'yes' | 'no' | null;
  setcandinate_eligibl_uk: (value: 'yes' | 'no' | null) => void;
  candinate_name: string | null;
  setcandinate_name: (value: string | null) => void;
  candinate_email: string | null;
  setcandinate_email: (value: string | null) => void;
  candinate_number: string | null;
  setcandinate_number: (value: string | null) => void;
  candinate_message: string | null;
  setcandinate_message: (value: string | null) => void;
  clearAllData: () => void;
  files: FileType;
  setfiles: any;
}

export const useDataSortsAction = create<IUseDataSortsAction>((set) => ({
  // candinate_position
  candinate_position: null,
  setcandinate_position: (value: number | string | null) => {
    set(() => ({ candinate_position: value }));
  },
  // candinate_eligibl_uk
  candinate_eligibl_uk: null,
  setcandinate_eligibl_uk: (value: 'yes' | 'no' | null) => {
    set(() => ({ candinate_eligibl_uk: value }));
  },
  // candinate_name
  candinate_name: null,
  setcandinate_name: (value: string | null) => {
    set(() => ({ candinate_name: value }));
  },
  // candinate_email
  candinate_email: null,
  setcandinate_email: (value: string | null) => {
    set(() => ({ candinate_email: value }));
  },
  // candinate_number
  candinate_number: null,
  setcandinate_number: (value: string | null) => {
    set(() => ({ candinate_number: value }));
  },
  // candinate_message
  candinate_message: null,
  setcandinate_message: (value: string | null) => {
    set(() => ({ candinate_message: value }));
  },
  // files
  files: null,
  setfiles: (value: FileType) => {
    set(() => ({ files: value }));
  },
  clearAllData: () => {
    set(() => ({
      candinate_position: null,
      candinate_eligibl_uk: null,
      candinate_name: null,
      candinate_email: null,
      candinate_number: null,
      candinate_message: null,
      files: null,
    }));
  },
}));
