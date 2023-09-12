import { createSlice } from '@reduxjs/toolkit'

export const socketSlice = createSlice({
    name: 'socket',
    initialState: {
        user: "",
        connected: false,
    },
    reducers: {
        connectToWebsocket: state => {
            state.value += 1;
            console.log(state.value);
        },
        decrement: state => {
            state.value -= 1;
            console.log(state.value);
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer