import React, {useEffect, useRef, useState} from "react";
import {get, post} from "../service/ApiService";
import {Avatar, Button, Input} from "antd";
import {SendOutlined} from "@ant-design/icons";
import '../css/chatroom.css';
import SockJS from "sockjs-client";
import {over} from 'stompjs';
import {useSelector} from "react-redux";
let stompClient = null;
export const Chatroom = (props) => {
    const [userData, setUserData] = useState(
        {
            sender: "",
            username: "",
            receiver: "",
            connected: false,
            content: ""
        }
    )
    const [userInfo, setUserInfo] = useState(
        {
            username: "",
            avatar: ""
        }
    )

    const [avatars, setAvatars] = useState([]);
    useEffect(() => {
        get(`/endpoint/ezblog/user/avatars`).then(
            (res) => {
                setAvatars(res.data);
                console.log(res);
            }
        )
    }, []);

    useEffect(() => {
        get(`/endpoint/ezblog/user`).then(
            (res) => {
                console.log(res.data);
                const email = res.data.email;
                setUserInfo({
                    username: res.data.username,
                    avatar: res.data.imgBase64
                })
                setUserData(pre => (
                    {...pre,
                        username: email,
                        sender: email,
                    }
                ));
                // connect socket
                let socket = new SockJS("/endpoint/ws");
                // build stomp client
                stompClient = over(socket);
                // connect using stomp client
                stompClient.connect({}, onConnected, onError);
            }
        )
    },[])
    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    })

    function onPublicMessageReceived(payload) {
        let res = JSON.parse(payload.body);
        console.log(res);
        if(res.sender !== userData.sender) {
            setChatContent((prevState) => [...prevState, res]);
            chatRef.current = [...chatRef.current, res];
            console.log("sender is " + res.sender);
            console.log("content is " + res.content);
            props.onReceiveNewMessage(res.content, res.sender);
        }
    }

    function onPrivateMessageReceived(payload) {
        console.log(payload)
    }

    const onConnected = () => {
        setUserData(pre => ({...pre, connected: true}));
        // subscribe public and private topic
        // public topic is to receive public message
        stompClient.subscribe("/chatroom/public", onPublicMessageReceived);
        // private topic is only to receive the messages that send to this user
        stompClient.subscribe("/user/" + userData.username + "/private", onPrivateMessageReceived);
        console.log(userData);
    }

    const onError = (err) => {
        console.log(err);
    }
    const [chatContent, setChatContent] = useState([]);
    const chatRef = useRef([]);
    const [text, setText] = useState("");
    const inputRef = useRef("");
    const chatBoxRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const onSend = () => {
        if(text.length !== 0) {
            setLoading(true);
            const newContent = {
                "sender": userData.sender,
                "username": userData.sender,
                "content": inputRef.current.input.value,
                "timestamp": new Date().getTime()
            }
            stompClient.send("/app/message", {}, JSON.stringify(newContent));
            setText("");
            setLoading(false);
        }
    }
    const count = useSelector(state => state.counter.value)
    return (
        <div className="personal-chatroom-container">
            <div className="personal-chat-room-box" ref={chatBoxRef}>
                {
                    chatContent.map(
                        (chat, index) => {
                            if(chat.sender === userData.sender) {
                                return (
                                    <li key={index} style={{textAlign: "right"}}>
                                        <div className="personal-chat-block personal-chat-block-right">
                                            <span className="personal-chat-content-box personal-chat-right">{chat.content}</span>
                                            <Avatar
                                                shape="square"
                                                src={userInfo.avatar}
                                                style={{
                                                    // backgroundColor: "pink",
                                                    verticalAlign: 'middle',
                                                    cursor: 'pointer'
                                                }}
                                                size="large"
                                            >
                                                {userData.sender}
                                            </Avatar>
                                        </div>
                                    </li>
                                )
                            } else {
                                return (
                                    <li key={index} style={{textAlign: "left"}}>
                                        <div className="personal-chat-block personal-chat-block-left">
                                            <Avatar
                                                shape="square"
                                                style={{
                                                    // backgroundColor: "pink",
                                                    verticalAlign: 'middle',
                                                    cursor: 'pointer'
                                                }}
                                                size="large"
                                                src={avatars.find((elem) => elem.email === chat.sender).avatar}
                                            >
                                            </Avatar>
                                            <span className="personal-chat-content-box personal-chat-left">{chat.content}</span>
                                        </div>
                                    </li>
                                )
                            }
                        }
                    )
                }
            </div>
            <div className="personal-chat-input-box">
                <Input onPressEnter={onSend} ref={inputRef} value={text} onChange={e => setText(e.target.value)}/>
                <Button type="primary"
                        loading={loading}
                        onClick={() => onSend()}><SendOutlined /></Button>
            </div>
        </div>
    )
}