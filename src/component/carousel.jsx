import { Carousel } from 'antd';
const contentStyle = {
    margin: 0,
    height: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    borderRadius: '10px'
};

const MyCarousel = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange}>
            <div >
                <h3 style={contentStyle}>1</h3>
            </div>
            <div >
                <h3 style={contentStyle}>2</h3>
            </div>
            <div >
                <h3 style={contentStyle}>3</h3>
            </div>
            <div >
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    );
};
export default MyCarousel;