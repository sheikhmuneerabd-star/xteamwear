import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function LatestCards() {

    const data = [
        {
        title:"Free Standard Delivery",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
        title:"Secure Shopping",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
        title:"Shop With Confidence",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
        title:"24/7 Help Center",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ]

  return (
    <div className="border-t xl:px-[50px] px-[16px]">

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        slidesPerView={1}

        breakpoints={{
          768: {
            slidesPerView: 2,
            enabled: true
          },

          1024: {
            slidesPerView: 4,
            enabled: false
          },

          1440: {
            slidesPerView: 4,
            enabled: false  
          }
        }}
      >

        {data.map((item,i)=>(
          <SwiperSlide key={i}>
            <div className="xl:p-6 py-12 border">
              <div className="text-center cursor-pointer space-y-2">
                <h2 className="font-medium text-[17px]">
                  {item.title}
                </h2>

                <p className="md:text-sm text-[13px]">
                  {item.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  )
}

export default LatestCards