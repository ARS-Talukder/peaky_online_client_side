import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import ReactImageMagnify from 'react-image-magnify';

const ProductSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='w-1/2 mr-4'>
            <Swiper
                style={{
                    '--swiper-navigation-color': 'black',
                    '--swiper-navigation-size': '20px',
                    '--swiper-pagination-color': 'black',

                    'width': '100%',
                    'height': '471px',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: "Product",
                                isFluidWidth: true,
                                src: "https://i.ibb.co/G2PRMP2/set-menu.jpg",
                            },
                            largeImage: {
                                src: "https://i.ibb.co/G2PRMP2/set-menu.jpg",
                                width: 1200, // Large image width for zoomed-in effect
                                height: 800, // Large image height
                            },
                            enlargedImageContainerStyle: { zIndex: 9 },
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/TTtVhz6/formal-shirt.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/G2PRMP2/set-menu.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/TTtVhz6/formal-shirt.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/TTtVhz6/formal-shirt.jpg" />
                </SwiperSlide>
            </Swiper>
            <Swiper
                style={{
                    '--swiper-navigation-color': 'black',
                    '--swiper-pagination-color': 'black',
                    'width': '100%',
                    'height': '120px',
                    'cursor': 'pointer',
                }}
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/G2PRMP2/set-menu.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/TTtVhz6/formal-shirt.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/G2PRMP2/set-menu.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/TTtVhz6/formal-shirt.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/TTtVhz6/formal-shirt.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProductSlider;