import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import ReactImageMagnify from 'react-image-magnify';

const ProductSlider = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='lg:w-1/2 md:w-1/2 lg:mr-4 md:mr-4'>
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
                {
                    images?.map(i => <SwiperSlide key={i._id} i={i}>
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: "Product",
                                    isFluidWidth: true,
                                    src: i.url,
                                },
                                largeImage: {
                                    src: i.url,
                                    width: 1200, // Large image width for zoomed-in effect
                                    height: 800, // Large image height
                                },
                                enlargedImageContainerStyle: { zIndex: 9 },
                            }}
                        />
                    </SwiperSlide>)
                }
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
                {
                    images?.map(i => <SwiperSlide key={i._id} i={i}>
                        <img src={i.url} />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default ProductSlider;