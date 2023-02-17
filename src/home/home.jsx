import React from 'react'
import { Calendar } from 'antd';
import './home.css'
import { useEffect } from 'react';
import { api } from './api';
import axios from 'axios';
export const Home = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };

    //   useEffect(()=>{
    //     axios.get('http://api.weatherapi.com/v1?key=0a815a221c564add81e05849233101&&q=Sydney')
    //     .then(res=>console.log(res))
    //   })
      return (
        <div className='home-container'>
            <div className='weather-box home-box'></div>
            <div className='another-box home-box'></div>
            <div className='recent-post-box home-box'>
              
            </div>
            <div className='calendar-box home-box'><Calendar onPanelChange={onPanelChange} fullscreen={false}/></div>
        </div>
        
      );
}
