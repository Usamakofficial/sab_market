import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import first from '../slider assets/1.png'
import second from '../slider assets/2.png'
import third from '../slider assets/3.png'
import fourth from '../slider assets/4.png'
import fifth from '../slider assets/5.png'
import sixth from '../slider assets/6.png'
import seventh from '../slider assets/7.png'


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slider2() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="card">
                
                 
          <img src={first} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                   
          <img src={second} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                   
          <img src={third} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                   
          <img src={fourth} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                   
          <img src={fifth} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                   
          <img src={sixth} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                   
          <img src={seventh} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
