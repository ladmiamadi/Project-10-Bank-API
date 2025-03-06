import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./api/userApi.js";
import { loginReducer } from "./slices/loginSlice.js";
import {userReducer} from "./slices/userSlice.js";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        login: loginReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);
