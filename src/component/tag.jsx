import React from 'react';
import { Divider, Space, Tag } from 'antd';

const MyTag = ({title, tags}) => (
  <>
    <Space size={[0, 8]} wrap>
      {tags.map((tag)=>{return (<li key={tag.toString()}><Tag color={'#'+Math.floor(Math.random()*16777215).toString(16)}>{tag}</Tag></li>)})}
    </Space>
    <Divider orientation="left">{title}</Divider>
  </>
);

export default MyTag;