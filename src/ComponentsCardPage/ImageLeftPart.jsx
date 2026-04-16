import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";

function ImageLeftPart({ product, selectedColor }) {

  const selectedVariant =
    product.variants.find((v) => v.color === selectedColor) || product.variants[0];

  const [activeImage, setActiveImage] = useState(
    selectedVariant.images[0]
  );

  // 🔥 Important: jab color change ho to image update ho
  useEffect(() => {
    setActiveImage(selectedVariant.images[0]);
  }, [selectedVariant]);

  return (
    <div className="xl:w-[55%] md:w-[45%] w-[90%] md:mx-0 mx-auto sticky top-8">

      {/* Main Image */}
      <div className="relative">
        <img className="w-full" src={activeImage} alt="" />
        <span className="bg-red-500 text-[14px] absolute top-0 right-0 text-white px-2 py-[1px]">Sale 37%</span>
      </div>

      {/* Slider */}
      <div className="relative mt-10 md:block hidden">

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          slidesPerView={3}
          spaceBetween={16}
          loop={true}
          onSlideChange={(swiper) =>
            setActiveImage(selectedVariant.images[swiper.realIndex])
          }
        >
          {selectedVariant.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                onClick={() => setActiveImage(img)}
                className="cursor-pointer"
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows */}
        <div className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full cursor-pointer z-50">
          <IoIosArrowBack />
        </div>

        <div className="custom-next absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full cursor-pointer z-50">
          <IoIosArrowForward />
        </div>

      </div>
    </div>
  );
}

export default ImageLeftPart;