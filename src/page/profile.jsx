import React, {useContext, useEffect, useRef, useState} from 'react'
import '../css/profile.css'
import { EditOutlined } from '@ant-design/icons';
import {Button, Divider, Modal, Form, Input, InputNumber, DatePicker, Space} from 'antd';
import {AuthContext} from "../context/authContext";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {get} from "../service/ApiService";
import Cookies from "universal-cookie/es6";
dayjs.extend(customParseFormat);

export const Profile = () => {
    const {user, setUser} = useContext(AuthContext);
    const dateFormat = 'YYYY/MM/DD';
    const userDetail = useRef(
        {
            name: "",
            avatar: null,
            gender: "",
            birthday: "1997/10/11",
            address: {
                detail: "78Stanley St.",
                suburb: "Burwood",
                city: "Sydney",
                state: "NSW",
                country: "Australia"
            },
            intro: "Hello everyone, my name is Roger! Nice to meet you"
        }
    );
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = () => {
        setIsModalOpen(false);
        console.log("finished")
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    useEffect(()=>{
        get("/customer/users?uid=" + new Cookies().get("uid")).then(
            (res) => {
                console.log(res.data)
                userDetail.current = res.data;
            }
        )
    }, [])
  return (
    <div className='profile-container'>
      <div className='background-container info-box'>
        <div className='person-card-box'>
          <div className='avatar-container' style={{backgroundImage: '/resource/me.jpg'}}>
              {/*<img width="100%" src='/resource/me.jpg' style={{borderRadius: '50%'}}/>*/}
              {/*{(*/}
              {/*    <img width="100%" src={user.avatar === null || user.avatar === undefined? "https://api.dicebear.com/5.x/initials/svg?seed="+user.name+"&backgroundType=gradientLinear":*/}
              {/*        "data:image/png;base64,"+user.avatar} style={{borderRadius: '50%'}}/>*/}
              {/*)}*/}
          </div>
          <span className="name-box">
            <p>{user.name === undefined? "Not login yet": user.name}</p>
            <div className='education-box'>
              <img  width="24px" height="24px"
                    alt="me"
                    src='/resource/image.png'/>
              <p>University of Sydney</p>            
            </div>
          </span>
        </div>
        <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={showModal}/>
      </div>
        <Modal title="Edit profile"
               okText="Save"
               open={isModalOpen}
               onCancel={handleCancel}
               onOk={handleOk}
               okButtonProps={{size:'middle', shape:'round'}}
               cancelButtonProps={{size:'middle', shape:'round'}}
        >
            <Divider/>
            <Form
                {...layout}
                name="nest-messages"
                style={{
                    maxWidth: 600,
                }}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name={['user', 'name']}
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={userDetail.current.name}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'birthday']}
                    label="Birthday"
                    initialValue={dayjs(userDetail.current.birthday===null?"2023/03/14":userDetail.current.birthday, dateFormat)} format={dateFormat}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="Website">
                    <Input addonBefore="https://" allowClear />
                </Form.Item>
                <Form.Item name={['user', 'address']} label="Address">
                    <Space direction="vertical" size="small">
                        <Space.Compact>
                            <Input
                                style={{
                                    width: '40%',
                                }}
                                defaultValue={userDetail.current.address!==null?userDetail.current.address.detail:""}
                            />
                            <Input
                                style={{
                                    width: '20%',
                                }}
                                defaultValue={userDetail.current.address!==null?userDetail.current.address.suburb:""}
                            />
                            <Input
                                style={{
                                    width: '20%',
                                }}
                                defaultValue={userDetail.current.address!==null?userDetail.current.address.city:""}
                            />
                            <Input
                                style={{
                                    width: '20%',
                                }}
                                defaultValue={userDetail.current.address!==null?userDetail.current.address.state:""}
                            />
                            <Input
                                style={{
                                    width: '20%',
                                }}
                                defaultValue={userDetail.current.address!==null?userDetail.current.address.country:""}
                            />
                        </Space.Compact>
                    </Space>
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Introduction"
                           initialValue={userDetail.current.intro}>
                    <Input.TextArea />
                </Form.Item>
            </Form>
        </Modal>
      <div className='about-container info-box'>This is about me area</div>
      <div className='project-container info-box'>This is project area</div>
      <div className='friend-box info-box'>These are people you may know</div>
    </div>
  )
}
