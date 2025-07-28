import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation  } from "swiper/modules";
import axios from "axios";
import { useTranslation } from "react-i18next";



const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

interface Image{
    id:number;
    attributes:{
        name:string;
        url:string;
        caption:string;
    }

}
interface SliderItem {
    title:string;
    caption:string;
    url:string;
  }
  interface HeroSliderProps {
    slides:SliderItem[];
  }

const  HeroSlider = ({slides} : HeroSliderProps) => {

    return (
        <div id="hero-slider" className="w-full h-[320px] md:h-[460px] lg:h-[560px]">
        <Swiper
            slidesPerView={1}
            navigation={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
                delay:4000
            }}
            className="h-full"
        >
            {slides.map((image:SliderItem)=>(
             
                    <SwiperSlide key={image.title} className="flex w-full h-full justify-center item-center">
                        <img 
                        src={`${API_URL}${image?.url}`} 
                        alt={`${image?.title}`}
                        className="w-full h-full object-cover"
                        /> 
                    </SwiperSlide>
              
            ))}
        </Swiper>
        </div>
    )
}

export default HeroSlider;