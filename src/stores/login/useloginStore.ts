/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface LoginState {
  isAuthenicated: boolean;
  token: string | null;
  refresh: string | null;
  data: any;
  role: string[] | null;
  signIn: (data: any) => void;
  logOut: () => void;
}

export const useLoginStore = create(
  persist<LoginState>(
    (set) => ({
      isAuthenicated: false,
      token: null,
      refresh: null,
      data: {},
      role: null,
      signIn: (data: any) => {
        set({
          isAuthenicated: true,
          token: data?.accessToken,
          refresh: data?.refreshToken,
          data: data?.user,
          role: data?.user?.roles?.map((item: any) => item.role),
        });
      },
      logOut: () => {
        set({
          isAuthenicated: false,
          token: null,
          refresh: null,
          data: {},
          role: null,
        });
      },
    }),
    {
      name: 'login-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
