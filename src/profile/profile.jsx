import React from 'react'
import './profile.css'
import { EditOutlined } from '@ant-design/icons';
import { Button} from 'antd';
export const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='background-container info-box'>
        <div className='person-card-box'>
          <div className='avatar-container' style={{backgroundColor:"pink", backgroundImage:"url('resource/me.jpg')", backgroundSize:'cover'}}></div>
          <span className="name-box">
            <p>Ruojie Yu</p>
            <div className='education-box'>
              <img  width="24px" height="24px" src='https://media.licdn.com/dms/image/C560BAQHbPUZaDAMT6g/company-logo_100_100/0/1646696237089?e=1683158400&v=beta&t=1tH1oIZG4PMUc7LO_dw6q_TXoTJ8FVfTPsCa37sKcD4'/>
              <p>University of Sydney</p>            
            </div>
          </span>
        </div>
        <Button type="primary" shape="circle" icon={<EditOutlined />} />

      </div>
      <div className='about-container info-box'>This is about me area</div>
      <div className='project-container info-box'>This is project area</div>
      <div className='friend-box info-box'>These are people you may know</div>
    </div>
  )
}
