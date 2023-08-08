import React, {useContext, useEffect, useRef, useState} from 'react'
import '../css/profile.css'
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {AuthContext} from "../context/authContext";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export const Profile = () => {
    const {user, setUser} = useContext(AuthContext);
  return (
    <div className='profile-container'>
      <div className='background-container info-box'>
        <div className='person-card-box'>
          <div className='avatar-container' style={{backgroundImage: '/resource/me.jpg'}}>
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
        <Button type="primary" shape="circle" icon={<EditOutlined />}/>
      </div>
      <div className='about-container info-box'>This is about me area</div>
      <div className='project-container info-box'>This is project area</div>
      <div className='friend-box info-box'>These are people you may know</div>
    </div>
  )
}
