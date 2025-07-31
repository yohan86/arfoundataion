import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation  } from "swiper/modules";

const API_URL = import.meta.env.VITE_API_URL;

interface SliderItem {
    title:string;
    caption:string;
    url:string;
}
interface HeroSliderProps {
    slides:SliderItem[];
}

const  HeroSlider = ({slides} : HeroSliderProps) => {

    const SliderIamges =[
        "images/slider/home/slider-1.jpg",
        "images/slider/home/slider-2.jpg",
        "images/slider/home/slider-3.jpg",
    ];

    return (
        <div id="hero-slider" className="w-full h-[80vh] md:h-[460px] lg:h-[560px]">
        <Swiper
            slidesPerView={1}
            navigation={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
                delay:4000
            }}
            className="h-full"
        >
            {SliderIamges.map((image, index)=>(
             
                    <SwiperSlide key={index} className="flex w-full h-full justify-center item-center">
                        <img 
                        src={image} 
                        alt=""
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                        /> 
                    </SwiperSlide>
              
            ))}
        </Swiper>
        </div>
    )
}

export default HeroSlider;