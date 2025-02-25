import {configureStore} from "@reduxjs/toolkit";

let state = {}

const reducer = () => {}

export const store = configureStore({
    preloadedState: state,
    reducer
})