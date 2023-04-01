import React, {useContext, useEffect, useRef, useState} from 'react'
import '../css/profile.css'
import { EditOutlined } from '@ant-design/icons';
import {Button, Divider, Modal, Form, Input, InputNumber } from 'antd';
import {AuthContext} from "../context/authContext";
import {UserDetailModal} from "../component/modal/userDetailModal";
export const Profile = () => {
    const {user, setUser} = useContext(AuthContext);
    const userDetail = useRef(
        {
            name: "",
            gender: "",
            birthday: "",
            address: {
                detail: "",
                suburb: "",
                city: "",
                state: "",
                country: ""
            }
        }
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    useEffect(()=>{

    }, )
  return (
    <div className='profile-container'>
      <div className='background-container info-box'>
        <div className='person-card-box'>
          <div className='avatar-container'>
              {user.avatar===undefined?(
                  ""
              ):(
                  <img width="100%" src={user.avatar === null? "https://api.dicebear.com/5.x/initials/svg?seed="+user.name+"&backgroundType=gradientLinear":
                      "data:image/png;base64,"+user.avatar} style={{borderRadius: '50%'}}/>
              )}
          </div>
          <span className="name-box">
            <p>{user.name === undefined? "Not login yet": user.name}</p>
            <div className='education-box'>
              <img  width="24px" height="24px"
                    alt="me"
                    src='https://media.licdn.com/dms/image/C560BAQHbPUZaDAMT6g/company-logo_100_100/0/1646696237089?e=1683158400&v=beta&t=1tH1oIZG4PMUc7LO_dw6q_TXoTJ8FVfTPsCa37sKcD4'/>
              <p>University of Sydney</p>            
            </div>
          </span>
        </div>
        <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={showModal}/>
      </div>
        <UserDetailModal open={isModalOpen}/>
      <div className='about-container info-box'>This is about me area</div>
      <div className='project-container info-box'>This is project area</div>
      <div className='friend-box info-box'>These are people you may know</div>
    </div>
  )
}
