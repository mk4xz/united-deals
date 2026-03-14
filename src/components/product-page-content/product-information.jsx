import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar, FaFacebook, FaTwitter, FaPinterestP } from "react-icons/fa";
import localOfferIcon from "../../assets/local-offer.svg";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { RxCopy } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { OrbitProgress } from "react-loading-indicators";
import "./product-page.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import medalIcon from "../../assets/Medal-product-page.svg";
import truckIcon from "../../assets/Truck-product-page.svg";
import handshackIcon from "../../assets/Handshake-product-page.svg";
import headPhonesIcon from "../../assets/Headphones-product-page.svg";
import creditcardIcon from "../../assets/CreditCard-product-page.svg";
import visaIcon from "../../assets/visa-icon.svg";
import expressIcon from "../../assets/express-icon.svg";
import mastercardIcon from "../../assets/master-card-icon.svg";
import tabbyIcon from "../../assets/tabby-icon.svg";
import tamaraIcon from "../../assets/tamara-icon.svg";
import basataIcon from "../../assets/baceta-icon.svg";
import { addToCart } from "../../store/slices.jsx/cart-products-slice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
function ProductInformation() {
    const dispatch = useDispatch();
    const swiperRef = useRef(null);
    const [showHeart, setShowHeart] = useState(true);
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const getProductData = async () => {
        const res = await fetch(`https://dummyjson.com/products/${id}`);

        const data = await res.json();

        setProduct(data);
    }

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <>
            {Object.keys(product).length === 0 ?
                <div className="col-loading w-full min-h-[500px] flex justify-center items-center">
                    <OrbitProgress color="#FA8232" size="medium" text="" textColor="" />
                </div>

                :
                <>
                    <section className="w-full h-full product-information-section">
                        <div className="container min-w-[100%] h-full">
                            <section className="flex w-full h-full section-information-product gap-[51px] pt-[29px] pb-[29px]">
                                <div className="content-product-images w-[40%]">
                                    <div className="all-images-product w-full flex flex-col gap-[22px]">
                                        <div className="col-main-img h-[350px] w-full border-[1px] border-gray100 rounded-[4px] flex justify-center items-center">
                                            <Swiper
                                                slidesPerView={1}
                                                speed={500}
                                                loop={true}
                                                onSwiper={(swiper) => swiperRef.current = swiper}
                                                className="flex items-center justify-center w-full h-full"
                                            >

                                                {product?.images?.map((img, index) => {
                                                    return (
                                                        <SwiperSlide key={index}>
                                                            <img src={img} alt="main-product-img" className="object-contain w-full h-[350px]" />
                                                        </SwiperSlide>
                                                    )
                                                })}
                                            </Swiper>
                                        </div>
                                        <div className="flex items-center justify-center small-images-product">
                                            <button className="left-btn w-[44px] h-[44px] bg-bgbutton rounded-full flex justify-center items-center"
                                                onClick={() => swiperRef.current.slidePrev()}
                                            >
                                                <FaArrowLeft className="text-white" />
                                            </button>

                                            <div className="flex gap-2 all-images-small">
                                                {product?.images?.map((img, index) => {
                                                    return (
                                                        <div className="col-img w-[80px] h-[70px] border-[1px] border-gray100 rounded-sm" key={index}>
                                                            <img src={img} alt="product-img" className="object-contain w-full h-full" />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <button className="right-btn w-[44px] h-[44px] bg-bgbutton rounded-full flex justify-center items-center"
                                                onClick={() => swiperRef.current.slideNext()}
                                            >
                                                <FaArrowRight className="text-white" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-product-information w-[50%]">
                                    <div className="col-rates w-full flex items-center gap-[6px] mb-[7px]">
                                        <div className="flex all-stars items-center gap-[2px] ">
                                            <FaStar className="text-starColor" />
                                            <FaStar className="text-starColor" />
                                            <FaStar className="text-starColor" />
                                            <FaStar className="text-starColor" />
                                            <FaStar className="text-starColor" />
                                        </div>
                                        <span className="text-[15px] text-gray900 font-semibold">{`${product.rating} Star Rating`}</span>
                                        <span className="text-[15px] text-gray600 feedback-p">(21,671 User feedback)</span>
                                    </div>
                                    <h1 className="titl-product text-[23px] text-gray900 font-bold">{product.title
                                    }</h1>
                                    <div className="information-product mt-[15px] mb-[15px] w-full  flex flex-col gap-2">
                                        <div className="flex items-center justify-between col-sku-availability">
                                            <div className="flex items-center gap-1 col-sku">
                                                <p className="text-[15px]  text-gray600">Sku:</p>
                                                <span className="text-[14px] text-gray900">{product.sku}</span>
                                            </div>
                                            <div className="flex items-center gap-1 col-availbility">
                                                <p className="text-[15px]  text-gray600">Availability:</p>
                                                <span className="text-[14px] text-success500">{product.availabilityStatus}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between w-full col-brand-category">
                                            <div className="flex gap-1 col-brand">
                                                <p className="text-[15px]  text-gray600">Brand:</p>
                                                <span className="text-[14px] text-gray900">{product.brand}</span>
                                            </div>
                                            <div className="flex gap-1 col-category">
                                                <p className="text-[15px]  text-gray600">Category:</p>
                                                <span className="text-[14px] text-gray900">{product.category}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex col-price items-center gap-[10px]">
                                        <span className="price-product text-[22px] text-colorprice font-bold">{`₹${product.price}`}</span>

                                        <div className="col-off w-[72px] h-[28px] bg-warning400 rounded-sm  flex justify-center items-center">
                                            <p className="text-[13px] font-semibold text-gray900">21% OFF</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center w-full gap-4 col-get-deal-cart mt-[15px] mb-[15px]">
                                        <div className="col-get w-[282px] h-[51px] rounded-[33px] bg-bgbutton flex justify-center items-center gap-1">
                                            <img src={localOfferIcon} alt="icon" />
                                            <p className="text-sm font-semibold text-whiteColor">Get DEAL ( ₹90k )</p>
                                        </div>
                                        <div className="col-cart w-[140px] h-[51px] rounded-[33px] border-[2px] border-bgshopnow cursor-pointer flex justify-center items-center gap-[11px]"
                                            onClick={() => {
                                                dispatch(addToCart(product));
                                                toast.success("Added to cart successfully");
                                            }}
                                        >
                                            <FiShoppingCart className="text-bgshopnow text-[21px]" />
                                            <p className="font-sans text-sm font-bold capitalize text-bgshopnow">add to cart</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between col-wishlist-share">
                                        <div className="col-wishlist flex gap-[6px] items-center cursor-pointer"
                                            onClick={() => {
                                                setShowHeart(false)
                                            }}
                                        >
                                            {showHeart ?
                                                <FiHeart className="text-[22px] text-gray-700" />
                                                :
                                                <FaHeart className="text-[22px] text-red-600" />
                                            }

                                            <span className="text-[17px] text-gray-700 ">Add to Wishlist</span>
                                        </div>
                                        <div className="col-share flex items-center gap-[10px]">
                                            <span className="text-[17px] text-gray-700">Share product:</span>
                                            <div className="flex items-center gap-5 social-icons">
                                                <RxCopy className="text-base transition-colors duration-500 cursor-pointer text-gray600 hover:text-starColor" />
                                                <FaFacebook className="text-base transition-colors duration-500 cursor-pointer text-gray600 hover:text-starColor" />
                                                <FaTwitter className="text-base transition-colors duration-500 cursor-pointer text-gray600 hover:text-starColor" />
                                                <FaPinterestP className="text-base transition-colors duration-500 cursor-pointer text-gray600 hover:text-starColor" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 col-payment w-full h-fit border-[1px] border-borderColor p-[18px] rounded-[3px]">
                                        <p className="text-[15px] text-gray900 mb-[10px]">100% Guarantee Safe Checkout</p>
                                        <div className="flex flex-wrap items-center justify-start w-full h-full gap-2">
                                            <img src={visaIcon} alt="visa-icon" />
                                            <img src={expressIcon} alt="express-icon" />
                                            <img src={mastercardIcon} alt="masterCard-icon" />
                                            <img src={tabbyIcon} alt="tabby-icon" />
                                            <img src={tamaraIcon} alt="tamara-icon" />
                                            <img src={basataIcon} alt="basata-icon" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section className="w-full h-full all-information-product mt-[40px] mb-[40px]">
                        <div className="container min-w-[100%] h-full">
                            <div className="all-content-information border-[1px] border-gray-100 w-full h-full rounded-[4px] p-5 flex justify-between">
                                <div className="col-description w-[30%]">
                                    <h2 className="text-[17px] font-medium text-gray900 mb-2">Description</h2>
                                    <p className="text-[14px] text-gray600">{product.description}</p>
                                </div>
                                <div className="col-feature">
                                    <h2 className="text-[17px] font-medium text-gray900 mb-2">Feature</h2>
                                    <div className="all-cols flex flex-col gap-[10px]">
                                        <div className="flex items-center gap-2 col">
                                            <img src={medalIcon} alt="icon" />
                                            <p className="text-[15px] text-gray900">Free 1 Year Warranty</p>
                                        </div>
                                        <div className="flex items-center gap-2 col">
                                            <img src={truckIcon} alt="icon" />
                                            <p className="text-[15px] text-gray900">Free Shipping & Fasted Delivery</p>
                                        </div>
                                        <div className="flex items-center gap-2 col">
                                            <img src={handshackIcon} alt="icon" />
                                            <p className="text-[15px] text-gray900">100% Money-back guarantee</p>
                                        </div>
                                        <div className="flex items-center gap-2 col">
                                            <img src={headPhonesIcon} alt="icon" />
                                            <p className="text-[15px] text-gray900">24/7 Customer support</p>
                                        </div>
                                        <div className="flex items-center gap-2 col">
                                            <img src={creditcardIcon} alt="icon" />
                                            <p className="text-[15px] text-gray900">Secure payment method</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-information-shipping border-l-[1px] border-gray100 pl-5">
                                    <h2 className="text-[17px] font-medium text-gray900 mb-2">Shipping Information</h2>
                                    <div className="all-cols flex flex-col gap-[10px]">
                                        <div className="flex items-center col gap-[2px]">
                                            <h3 className="text-[15px] text-gray900">Courier:</h3>
                                            <p className="text-[15px] text-gray600">2 - 4 days, free shipping</p>
                                        </div>
                                        <div className="flex items-center col gap-[2px]">
                                            <h3 className="text-[15px] text-gray900">Local Shipping:</h3>
                                            <p className="text-[15px] text-gray600">up to one week, ₹19.00</p>
                                        </div>
                                        <div className="flex items-center col gap-[2px]">
                                            <h3 className="text-[15px] text-gray900">UPS Ground Shipping:</h3>
                                            <p className="text-[15px] text-gray600">4 - 6 days, ₹29.00</p>
                                        </div>
                                        <div className="flex items-center col gap-[2px]">
                                            <h3 className="text-[15px] text-gray900">Unishop Global Export:</h3>
                                            <p className="text-[15px] text-gray600"> 3 - 4 days, ₹39.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}
export default ProductInformation;
