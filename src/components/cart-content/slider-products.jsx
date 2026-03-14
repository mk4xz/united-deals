import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import { ThreeDot } from "react-loading-indicators";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices.jsx/cart-products-slice";
import toast from "react-hot-toast";
function ProductsSlider() {
    const dispath = useDispatch();
    const swiperRef = useRef(null);

    const [allProducts, setAllProducts] = useState([]);
    const getAllProducts = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/products?limit=200`);

            const data = await res.json();

            setAllProducts(data.products);
        }
        catch {
            console.error("Product not found data");
        }
    }

    useEffect(() => {
        getAllProducts()
    }, []);

    const allPhones = allProducts.filter((product) => product.category == "smartphones");
    const allmobileAccessories = allProducts.filter((product) => product.category == "mobile-accessories");
    const allLaptops = allProducts.filter((product) => product.category == "laptops");
    const allSliderProductsCart = [...allPhones, ...allmobileAccessories, ...allLaptops].sort((a, b) => b.price - a.price).slice(5, 15);

    return (
        <section className="w-full h-full products-slider mb-[72px] overflow-hidden">
            <div className="container min-w-[100%] h-full">
                <div className="flex items-center justify-between w-full h-full col-heading">
                    <h2 className="text-sm font-bold uppercase text-textcolorPrimary">You might also like</h2>
                    <div className="flex next-prev-btns border-[1px] border-textColor w-[85px] h-9  pl-3 pr-3 rounded-[4px] justify-center items-center">
                        <div className="prev-btn border-r-[1px] border-textColor h-full flex justify-center items-center w-[50%] cursor-pointer"
                            onClick={() => swiperRef.current.slidePrev()}
                        >
                            <FaCaretLeft className="text-xl transition-colors duration-500 hover:text-textColor" />
                        </div>
                        <div className="next-btn w-[50%] flex justify-center items-center cursor-pointer"
                            onClick={() => swiperRef.current.slideNext()}
                        >
                            <FaCaretRight className="text-xl transition-colors duration-500 hover:text-textColor" />
                        </div>
                    </div>
                </div>
                <div className="mt-5 all-products">
                    {allSliderProductsCart.length === 0 ?
                        <div className="co0l-loading w-full h-[200px] flex justify-center items-center">
                            <ThreeDot color="#FF2E00" size="medium" text="" textColor="" />
                        </div>
                        :
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            spaceBetween={20}
                            speed={500}
                            loop={true}
                            autoplay={
                                { delay: 2000, pauseOnMouseEnter: true }
                            }
                            onSwiper={(swiper) => swiperRef.current = swiper}
                            breakpoints={{
                                450: { slidesPerView: 1 },
                                600: { slidesPerView: 1 },
                                650: { slidesPerView: 2 },
                                992: { slidesPerView: 2 },
                                1400: { slidesPerView: 3 },
                                1600: { slidesPerView: 4 }
                            }}
                        >
                            {allSliderProductsCart.map((product, index) => {
                                return (
                                    <SwiperSlide key={product.id}>
                                        <div className="flex gap-3 col-product max-w-[300px]">
                                            <div className="col-image-product w-[90px] h-[100px] bg-gray-100">
                                                <img src={product.images[0]} alt="product-img" className="object-contain w-full h-full" />
                                            </div>
                                            <div className="flex flex-col w-full gap-3 information-product ">
                                                <p className="text-sm uppercase title-product text-textcolorPrimary">{product.title.slice(0, 20)}</p>
                                                <div className="flex justify-between content-price-rates">
                                                    <span className="text-sm font-bold price-product text-redcolor">{`₹${product.price}`}</span>
                                                    <span className="rate-product w-[32px] h-[15px] bg-redcolor text-center text-whiteColor text-[8px] flex justify-center items-center">{product.rating}</span>
                                                </div>
                                                <button className="add-to-cart flex items-center w-full border-[1px] border-borderColor h-[36px] rounded-[4px] justify-center gap-3 cursor-pointer"
                                                    onClick={() => {
                                                        dispath(addToCart(product));
                                                        toast.success("Added to cart successfully");
                                                    }}
                                                >
                                                    <FiShoppingCart />
                                                    <p className="text-sm font-bold text-textcolorPrimary">Add to cart</p>
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    }

                </div>
            </div>
        </section>
    )
}
export default ProductsSlider;