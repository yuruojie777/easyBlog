import React, {useContext, useEffect, useRef, useState} from 'react'
import '../css/profile.css';
import '../css/projectBox.css'
import {CommentOutlined, EditOutlined} from '@ant-design/icons';
import {Button, FloatButton, Form, Input, Modal} from 'antd';
import {useAuth} from "../context/authContext";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {get} from "../service/ApiService";
dayjs.extend(customParseFormat);

export const Profile = () => {
    const {user} = useAuth();
    // const [user, setUser] = useState(null);
    // useEffect(() => {
    //     get(`/endpoint/ezblog/user`).then((res) => {
    //         console.log("Now we got user info");
    //         console.log(res.data);
    //         setUser(res.data);
    //     })
    // }, []);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = () => {
        setIsModalOpen(false);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    }
  return (
    <div className='profile-container'>
        <Modal title="Personal Info"
               open={isModalOpen}
               onOk={handleOk}
               onCancel={handleCancel}
               okText={"save"}
        >
            <Form>
                <Form.Item name={['user', 'name']} rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
      <div className='background-container info-box'>
        <div className='person-card-box'>
          <div className='avatar-container' style={{backgroundImage: `url(${user?.imgBase64})`}}>
          </div>
          <span className="name-box">
            <p>{user === null? "Not login yet": (user.firstname + ' ' + user.lastname)}</p>
            <div className='education-box'>
              <img  width="24px" height="24px"
                    alt="me"
                    src='/resource/image.png'/>
              <p>University of Sydney</p>            
            </div>
          </span>
        </div>
        <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={() => setIsModalOpen(true)}/>
      </div>
      <div className='about-container info-box'>
          About me
      </div>
      <div className='project-container info-box'>This is project area</div>
      <div className='friend-box info-box'>These are people you may know</div>
    </div>
  )
}
