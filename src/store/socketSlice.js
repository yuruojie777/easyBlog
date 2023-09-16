import { createSlice } from '@reduxjs/toolkit'
import {get} from "../service/ApiService";

export const socketSlice = createSlice({
    name: 'socket',
    initialState: {
        user: "",
        avatarList: [],
    },
    reducers: {
        connectToWebsocket: state => {
            // let socket = new SockJS("/endpoint/ws");
            // state.stompClient = over(socket);
            // state.stompClient.connect(
            //     {},
            //     () => {
            //         state.stompClient.subscribe("/chatroom/public", (payload) => {console.log(payload)});
            //         // private topic is only to receive the messages that send to this user
            //         state.stompClient.subscribe("/user/" + state.user.username + "/private", (payload) => {console.log(payload)});
            //     },
            //     (err) => {
            //         console.log(err);
            //     });
        },
        getAvatars: state => {
            get(`/endpoint/ezblog/user/avatars`).then(
                (res) => {
                    state.avatarList = res.data;
                    console.log(res.data);
                }
            )
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { connectToWebsocket, getAvatars, incrementByAmount } = socketSlice.actions

export default socketSlice.reducer