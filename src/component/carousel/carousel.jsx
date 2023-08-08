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
                <h3 style={contentStyle}>Created</h3>
            </div>
            <div>
                <h3 style={contentStyle}>By</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Roger</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Yu</h3>
            </div>
        </Carousel>
    );
};
export default MyCarousel;