export default function Home() {
  return (
    <>
      <div className="page">
        <div className="container">
          <h1>TGDD Clone</h1>
        </div>
      </div>
    </>
  );
}



import BannerSlider from "../components/Banner/BannerSlider";
import CategorySection from "../components/Category/CategorySection";
import DealSection from "../components/Deal/DealSection";
import CouponSection from "../components/Coupon/CouponSection";
import FlashSale from "../components/FlashSale/FlashSale";
import ProductList from "../components/ProductList/ProductList";
import BrandSection from "../components/Brand/BrandSection";
import BrandLogoSection from "../components/BrandLogo/BrandLogoSection";
import SuggestSection from "../components/Suggest/SuggestSection";
import CheapPhone from "../components/CheapPhone/CheapPhone";
import StudentSection from "../components/Student/StudentSection";
import StoreBanner from "../components/StoreBanner/StoreBanner";
import NewsSection from "../components/News/NewsSection";
import VideoSection from "../components/Video/VideoSection";
import ServiceSection from "../components/Service/ServiceSection";



export default function Home(){

    return(

        <>


            


            <BannerSlider />


            <CategorySection />


            <DealSection />


            <CouponSection />


            <FlashSale />


            <ProductList />


            <BrandSection />


            <BrandLogoSection />


            <SuggestSection />


            <CheapPhone />


            <StudentSection />


            <StoreBanner />


            <NewsSection />


            <VideoSection />


            <ServiceSection />


            


        </>

    );

}