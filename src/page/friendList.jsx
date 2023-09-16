import "../css/friendList.css";
import { Avatar, List } from 'antd';
import {useEffect, useState} from "react";
import {get} from "../service/ApiService";
export const FriendList = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        get(`/endpoint/ezblog/user/friends`).then(
            (res) => {
                setFriends(res.data);
                console.log(res);
            }
        )
    }, []);
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },

    ];
    return (
        <div className="friend-list-container">
            <List
                itemLayout="horizontal"
                dataSource={friends}
                renderItem={(item, index) => (
                    <List.Item className={"user-friend-box"} onContextMenu={(e) => {e.preventDefault(); alert("right click")}}>
                        <List.Item.Meta
                            avatar={<Avatar src={item.imgBase64} shape={"square"} size={"large"}/>}
                            title={item.firstname + ' ' + item.lastname}
                            description={"Click and chat with me now"}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}