import { userReducer, navigationbarReducer } from "./slices";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        navbar: navigationbarReducer,
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from "./slices";
export { store };
