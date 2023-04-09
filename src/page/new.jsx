import React from 'react'
import '../css/new.css'
import { Col, Row } from 'antd';
export const New = () => {

    const videoList = [
        "https://www.youtube.com/embed/yN7ypxC7838",
        "https://www.youtube.com/embed/QdHvS0D1zAI",
        "https://www.youtube.com/embed/iL_oZGHLHvU",
        "https://www.youtube.com/embed/8J88mIH_SDU"
    ]

  return (
    <div>
        {
            videoList.map((item) => {
                return (
                    <Row>
                        <Col span={24}>
                            <iframe width="100%" height="500" src={item}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </Col>
                    </Row>
                )
            })
        }
    </div>
  )
}
