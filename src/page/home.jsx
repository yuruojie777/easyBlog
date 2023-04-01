import React from 'react'
import {Calendar} from 'antd';
import '../css/home.css'
import MyCarousel from "../component/carousel/carousel";
export const Home = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };

      return (
          <div style={{display: "flex", flexDirection:"column", gap: "10px"}}>
              <div className='carousel-box'><MyCarousel/></div>
              <div className='home-container'>
                  <div className='weather-box home-box'></div>
                  <div className='another-box home-box'></div>
                  <div className='recent-post-box home-box'>
                  </div>
                  <div className='calendar-box home-box'><Calendar onPanelChange={onPanelChange} fullscreen={false}/></div>
              </div>
          </div>
      );
}
