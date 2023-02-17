import React from 'react'
import {Card } from 'antd';
import './new.css'

import { Register } from '../login/register';
import { Login } from '../login/login';

const { Meta } = Card;
export const New = () => {

  function handleOnClick() {
    const card = document.getElementById('card')
    if(card.classList.contains('active')) card.classList.remove('active')
    else card.classList.add('active')
  }

  return (
    <div id='card' class="card-filp" onClick={handleOnClick}>

    </div>
  )
}
