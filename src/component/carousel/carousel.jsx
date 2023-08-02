import { Carousel } from 'antd';
const contentStyle = {
    margin: 0,
    height: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const MyCarousel = () => {
    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange} autoplay={true}>
            <div>
                <h3 style={contentStyle}>小饼干</h3>
            </div>
            <div>
                <h3 style={contentStyle}>我</h3>
            </div>
            <div>
                <h3 style={contentStyle}>爱</h3>
            </div>
            <div>
                <h3 style={contentStyle}>你</h3>
            </div>
        </Carousel>
    );
};
export default MyCarousel;