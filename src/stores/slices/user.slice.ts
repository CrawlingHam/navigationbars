import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User, SavedAccount, UserState } from "@/types";
import { defaultUser } from "@/data";

const initialState: UserState = {
    user: defaultUser,
    savedAccounts: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User | null>) {
            state.user = action.payload;
        },
        setSavedAccounts(state, action: PayloadAction<SavedAccount[]>) {
            state.savedAccounts = action.payload;
        },
        addSavedAccount(state, action: PayloadAction<SavedAccount>) {
            state.savedAccounts.push(action.payload);
        },
        removeSavedAccount(state, action: PayloadAction<string>) {
            state.savedAccounts = state.savedAccounts.filter((account) => account.id !== action.payload);
        },
        clearSavedAccounts(state) {
            state.savedAccounts = [];
        },
    },
});

const { setUser, setSavedAccounts, addSavedAccount, removeSavedAccount, clearSavedAccounts } = userSlice.actions;
const userReducer = userSlice.reducer;
export { userReducer, setUser, setSavedAccounts, addSavedAccount, removeSavedAccount, clearSavedAccounts };
