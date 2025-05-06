import type { UserState } from "@/types";
import { defineStore } from "pinia";

export const useUser = defineStore("user", {
    state: (): UserState => ({
        profile: undefined,
    }),
    actions: {
        setProfile(profile: UserState["profile"]) {
            this.profile = profile;
        },
    },
});
