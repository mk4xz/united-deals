import Header from "../components/header";
import Banner from "../components/banners.jsx/banner";
import Freedelivery from "../components/freedelivery/freedelivery";
import ShopByBrands from "../components/shop-by-brands/shop-by-brands";
import TodaysDealsProducts from "../components/todays-deals-products/todays-deals-products";
import TopCategories from "../components/top-categories/top-categories";
import TopElectronicsBrands from "../components/top-electronics-brands/top-electronics-brands";
import FeaturedProducts from "../components/featured-products/featured-products";
import Footer from "../components/footer/footer";

function HomePage() {
  return (
    <>
      <Header />
      <div className="home-page-content page-offset">
        <Banner />
        <Freedelivery />
        <ShopByBrands />
        <TodaysDealsProducts />
        <TopCategories />
        <TopElectronicsBrands />
        <FeaturedProducts />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
