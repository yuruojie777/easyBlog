import React, {useContext, useEffect} from 'react'
import {Calendar, Carousel} from 'antd';
import './home.css'
import MyCarousel from "../component/carousel";
import Cookies from "universal-cookie/es6";
import axios from "axios";
import {AuthContext} from "../context/authContext";
export const Home = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };

    const {value, setValue} = useContext(AuthContext);
    useEffect(()=>{
        axios.get("http://localhost:8082/api/v1/demo", {headers: {'Authorization': 'Bearer ' + new Cookies().get('token')}})
            .then(res=>{
                console.log(res)
            })
    })
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
