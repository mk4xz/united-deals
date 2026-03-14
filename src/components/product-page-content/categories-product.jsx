import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import "./product-page.css";
function CategoriesProducts() {
    const [categories, setCategories] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    const getAllCategories = async () => {
        const res = await fetch(`https://dummyjson.com/products/category-list`);

        const data = await res.json();

        setCategories(data);
    }
    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <section className="w-full h-full categories-section border-t-[1px] border-borderColor">
            <div className="container min-w-[100%] h-full">
                <div className="all-categories w-full h-[69px] flex  items-center">
                    <>
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={2}
                            spaceBetween={20}
                            speed={500}
                            loop={true}
                            autoplay={
                                { delay: 2000, pauseOnMouseEnter: true }
                            }
                            breakpoints={{

                                600: { slidesPerView: 4 },
                                1100: { slidesPerView: 5 },
                                1400: { slidesPerView: 6 },
                                1800: { slidesPerView: 8 },

                            }}
                        >
                            {categories.map((category, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className={`${activeIndex === index ? "active" : ""} col-category cursor-pointer text-colorCategories  h-9 bg-bgColor pt-[9px] pb-[9px] pl-[14px] pr-[14px] rounded-[18px] flex justify-center items-center w-fit transition-colors duration-100`}
                                            onClick={() => setActiveIndex(index)}
                                        >
                                            <p className="w-[130px] text-sm font-medium text-center capitalize">{category}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                            }
                        </Swiper>
                    </>
                </div>
            </div>
        </section>
    )
}
export default CategoriesProducts;