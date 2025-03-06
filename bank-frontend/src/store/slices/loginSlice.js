import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        token: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            state.error = null;
        },
        getLogout: (state, action) => {
            state.token = null;
        }
    }
});

export const { setToken, setError, getLogout } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
