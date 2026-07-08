import "./FlashSale.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Countdown from "./Countdown";
import FlashProduct from "./FlashProduct";  

import flashSale from "../../../src/data/flashSale";

export default function FlashSale() {
  return (
    <section className="flash-sale">

      <div className="container">

        <div className="flash-wrapper">

          <div className="flash-header">

            <div className="flash-title">

              ⚡ FLASH SALE

            </div>

            <Countdown />

          </div>

          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={16}
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 3
              },
              992: {
                slidesPerView: 4
              },
              1200: {
                slidesPerView: 5
              }
            }}
          >
            {flashSale.map((item) => (
              <SwiperSlide key={item.id}>
                <FlashProduct item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>

    </section>
  );
}
