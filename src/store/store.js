import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './slices/login-slice'
import reservationsReducer from "./slices/reservations-slice";


export const store = configureStore({
    reducer:{
        login:loginReducer,
        reservations:reservationsReducer
    },
})