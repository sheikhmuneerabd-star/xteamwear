import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import imageShirt from '../assets/factoryCardImage/shirt.webp';
import qsp from '../assets/factoryCardImage/quick-sample-production.webp';
import osm from '../assets/factoryCardImage/one-set-minimum.webp';
import wwd from '../assets/factoryCardImage/world-wide-delivery.webp';
import ed from '../assets/factoryCardImage/expert-designers.webp';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

function FactoryCard() {

    const data = [
        {img:imageShirt, title:"Sublimation printing and dyeing . No fading"},
        {img:qsp, title:"Quick sample production in 2-3 days"},
        {img:osm, title:"One-set minimum order for flexibility"},
        {img:wwd, title:"Worldwide delivery . 7-15 days"},
        {img:ed, title:"Expert designers for diverse needs"}
    ]

    useGSAP(() => {
      let tl = gsap.timeline();
      tl.from(".swiper-slide", {
        y: 100,
        duration:0.9,
        opacity:0,
        stagger:0.4,
        delay:0.3,
        scrollTrigger:{
          trigger:".p-10",
          scroll:"body",
          scrub:2,
          once: true,
          start: "top 80%",
          end:"top 30%"
        }
      })
    }, []);

  return (
    <div className="p-10 relative">

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        slidesPerView={1}

        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          
          1024: {
            slidesPerView: 5,
            enabled: false,
          }
        }}
      >

        {data.map((item,i)=>(
          <SwiperSlide key={i}>
            <div className='border group hover:border-black cursor-pointer transition-all overflow-hidden duration-200 rounded-md space-y-2 text-center'>

              <img className='pt-2 hover:scale-105 transition-all duration-700'
                   src={item.img} />

              <div className='pb-2'>
                <h2 className='text-[17.5px] group-hover:text-blue-600 transition-all duration-200 group-hover:underline'>
                  {item.title}
                </h2>

                <span className='text-gray-700 text-[13px]'>
                  Vibrant one-piece molding, washable, high-frequency jerseys stay looking brand new for longer.
                </span>
              </div>

            </div>
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  )
}

export default FactoryCard