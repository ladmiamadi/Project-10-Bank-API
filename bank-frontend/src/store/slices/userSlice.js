import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfos: {firstName: "", lastName: ""}
    },
    reducers: {
        setUserInfos: (state, action) => {
            state.userInfos= action.payload;
        }
    }
});

export const {setUserInfos} = userSlice.actions;
export const userReducer = userSlice.reducer;