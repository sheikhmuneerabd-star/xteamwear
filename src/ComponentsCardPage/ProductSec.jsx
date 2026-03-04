import sPShirtData from "../SizingPageShirt"
import SizingPShirtItem from "./SizingPShirtItem"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

function ProductSec({ handleClick }) {
  return (
    <div className="mt-16">
        <div className="h-[1px] border"></div>
        <h2 className="font-semibold text-center text-xl mt-6">RELATED PRODUCTS</h2>
        <div className="mt-6 relative">

        {/* Custom Arrows */}
        <div className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full">
            <MdOutlineArrowBackIos />
        </div>

        <div className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full">
            <MdOutlineArrowForwardIos />
        </div>

            <Swiper
                modules={[Navigation]}
                className="pb-10"
                spaceBetween={16}
                slidesPerView={4}
                slidesPerGroup={4}
                navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
                }}
                breakpoints={{
                    0: { slidesPerView: 1, slidesPerGroup: 1 },
                    375: { slidesPerView: 2, slidesPerGroup: 2 },
                    768: { slidesPerView: 3, slidesPerGroup: 3 },
                    1024: { slidesPerView: 4, slidesPerGroup: 4 },
                }}
                loop={true}
                speed={700}
            >
                {sPShirtData.map((shirt) => (
                <SwiperSlide key={shirt.id}>
                    <SizingPShirtItem shirt={shirt} handleClick={handleClick} />
                </SwiperSlide>
                ))}
            </Swiper>

        </div>
    </div>
  )
}

export default ProductSec