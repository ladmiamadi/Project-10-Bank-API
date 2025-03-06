import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        token: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        getLogout: (state, action) => {
            state.token = null;
        },
    }
});

export const { setToken, getLogout } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
