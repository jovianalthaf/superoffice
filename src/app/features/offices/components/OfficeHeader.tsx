"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function OfficeHeader({
  image,
  images,
}: {
  image: string;
  images: string[];
}) {
  return (
    <section id="Gallery" className="-mb-[50px]">
      <div className="swiper w-full">
        <Swiper
          className="swiper-wrapper"
          slidesPerView="auto"
          spaceBetween={10}
          slidesOffsetBefore={10}
          slidesOffsetAfter={10}
        >
          <SwiperSlide className="swiper-slide !w-fit">
            <div className="w-[700px] h-[550px] overflow-hidden relative">
              <Image
                fill
                src={image}
                className="w-full h-full object-cover"
                alt="thumbnail"
              />
            </div>
          </SwiperSlide>
          {images.map((img, index) => (
            <SwiperSlide key={index} className="swiper-slide !w-fit">
              <div className="w-[700px] h-[550px] overflow-hidden relative">
                <Image
                  fill
                  src={img}
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
