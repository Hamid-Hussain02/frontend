import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './slices/login-slice'
import reservationsReducer from "./slices/reservations-slice";
import customerReducer from './slices/cutomer-slice'


export const store = configureStore({
    reducer:{
        login:loginReducer,
        reservations:reservationsReducer,
        userReservation:customerReducer
    },
})