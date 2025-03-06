import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./api/userApi.js";
import { loginReducer } from "./slices/loginSlice.js";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        login: loginReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);
