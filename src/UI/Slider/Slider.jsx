import { Navigation, Pagination, Scrollbar, Autoplay, A11y, EffectCards } from 'swiper';
import {Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css'
import React from 'react'
import '../../../node_modules/swiper//modules/pagination/pagination.scss'
import '../../../node_modules/swiper//modules/navigation/navigation.scss'
import '../../../node_modules/swiper//modules/scrollbar/scrollbar.scss'
import '../../../node_modules/swiper/swiper.scss'
function Slider() {
  return (
    <Swiper
      className='swiper'
      modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y, EffectCards]}
      autoplay={{
        delay: 5000
      }}
      effect={'cards'}
      navigation
      pagination={{ clickable: true }} 
      scrollbar={{ draggable: true }}
      slidesPerView={1} 
      onSlideChange={() => console.log('slide change')} 
      onSwiper={(swiper) => console.log(swiper)} > 
      <SwiperSlide>
        <img className='slider__image' src='images/Slide01.jpg' alt="photo1" />
      </SwiperSlide> 
      <SwiperSlide>
        <img className='slider__image' src='images/Slide01.jpg' alt="photo2" />
      </SwiperSlide> 
      <SwiperSlide>
        <img className='slider__image' src='images/Slide01.jpg' alt="photo3" />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
