import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import socketReducer from "./socketSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        socketConnector: socketReducer
    }
})