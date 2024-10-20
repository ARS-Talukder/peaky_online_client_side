import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <div className='mb-6'>
            <Swiper
                // spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co.com/hfxCS5D/Slider-1.jpg"
                        loading="lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co.com/cLHnNhm/Slider-2.jpg"
                        loading="lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co.com/52mrLnm/Slider-3.jpg"
                        loading="lazy"
                    />
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Slider;