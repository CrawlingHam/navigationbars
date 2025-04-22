import { UserStore } from "@/types";
import { create } from "zustand";

export const useUser = create<UserStore>((set) => ({
    setUser: (user) => set({ user }),
    user: undefined,
}));
