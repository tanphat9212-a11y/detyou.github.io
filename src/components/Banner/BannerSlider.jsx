import "./BannerSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import banners from "../../assets/data/banners";
import BannerItem from "./BannerItem";
import SmallBanner from "./SmallBanner";

export default function BannerSlider() {
  return (
    <section className="banner-section">

      <div className="container">

        <div className="banner-layout">

          <div className="banner-left">

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false
              }}
              pagination={{
                clickable: true
              }}
              loop={true}
            >
              {banners.map((item) => (
                <SwiperSlide key={item.id}>
                  <BannerItem image={item.image} />
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

          <div className="banner-right">

            <SmallBanner image="/images/banners/right1.jpg" />

            <SmallBanner image="/images/banners/right2.jpg" />

          </div>

        </div>

      </div>

    </section>
  );
}