import leftBtn from "../../assets/ArrowLeft.svg";
import rightBtn from "../../assets/ArrowRight-categories.svg";
import "./shop-categories.css";
import categoryImg1 from "../../assets/Image-category-1.png";
import categoryImg2 from "../../assets/Image-category-2.png";
import categoryImg3 from "../../assets/Image-category-3.png";
import categoryImg4 from "../../assets/Image-category-4.png";
import categoryImg5 from "../../assets/Image-category-5.png";
import categoryImg6 from "../../assets/Image-category-6.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import { useRef } from "react";

function ShopWithCategories() {
    const allCategories = [
        { id: 1, title: "Computer & Laptop", img: categoryImg1 },
        { id: 2, title: "SmartPhone", img: categoryImg2 },
        { id: 3, title: "Headphones", img: categoryImg3 },
        { id: 4, title: "Accessories", img: categoryImg4 },
        { id: 5, title: "Camera & Photo", img: categoryImg5 },
        { id: 6, title: "TV & Homes", img: categoryImg6 },
    ]

    const swiperRef = useRef(null);

    return (
        <section className="shop-with-categories mt-[40px] mb-[160px] w-full h-full">
            <div className="container min-w-[100%]">
                <div className="flex items-center justify-center mb-10 heading-categories">
                    <h1 className="text-[32px] font-semibold  text-gray900 tracking-[0.2px]">Shop with Categorys</h1>
                </div>
                <div className="relative w-full all-categories">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={5}
                        spaceBetween={20}
                        speed={500}
                        autoplay={
                            { delay: 2000, pauseOnMouseEnter: true }
                        }
                        loop={true}
                        onSwiper={(swiper) => swiperRef.current = swiper}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            520: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            992: { slidesPerView: 3 },
                            1100: { slidesPerView: 4 },
                            1400: { slidesPerView: 5 }
                        }}
                    >
                        {allCategories.map((category, index) => {
                            return (
                                <SwiperSlide key={category.id} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div className="col-category w-[205px] h-[236px] pt-6 pb-6 pl-3 pr-3 rounded-[4px] flex justify-center items-center flex-col gap-4 cursor-pointer">
                                        <img src={category.img} alt="united-deals" className="object-contain" />
                                        <h3 className="text-base font-medium text-gray900">{category.title}</h3>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className="relative top-0 z-10 flex justify-between swiper-btns mt-[-130px]">
                    <div className="relative right-0 w-12 h-12 p-3 rounded-full cursor-pointer left-btn bg-primary500"
                        onClick={() => swiperRef.current.slidePrev()}
                    >
                        <img src={leftBtn} alt="left-btn" />
                    </div>
                    <div className="relative left-0 w-12 h-12 p-3 rounded-full cursor-pointer right-btn bg-primary500"
                        onClick={() => swiperRef.current.slideNext()}
                    >
                        <img src={rightBtn} alt="right-btn" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopWithCategories;