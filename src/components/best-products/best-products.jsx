import { FaArrowRight } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { OrbitProgress } from "react-loading-indicators";
import { addToCart } from "../../store/slices.jsx/cart-products-slice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
function BestProducts() {
    const dispatch = useDispatch();
    const [activeCategory, setActiveCategory] = useState("All Product");
    const [allProducts, setAllProducts] = useState([]);

    /*Start Get All Product Data With Api Function*/
    const getAllProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=200`)

        const data = await res.json();

        setAllProducts(data.products);

    }
    useEffect(() => {
        getAllProducts();
    }, []);

    const mensWatches = allProducts.filter((product) => product.category === "mens-watches");
    const mensShirts = allProducts.filter((product) => product.category === "mens-shirts");
    const mensShoes = allProducts.filter((product) => product.category === "mens-shoes");
    const sportsAccessories = allProducts.filter((product) => product.category === "sports-accessories").slice(0, 10);
    const allElectroProducts = [...mensWatches.sort((a, b) => b.price - a.price).slice(0, 3), ...mensShirts.sort((a, b) => b.price - a.price).slice(0, 3), ...mensShoes.sort((a, b) => b.price - a.price).slice(0, 3), ...sportsAccessories.sort((a, b) => b.price - a.price).slice(0, 1)];

    return (
        <section className="w-full h-full computer-accessories mt-[72px] mb-[72px]">
            <div className="container min-w-[100%] h-full">
                <div className="flex items-center justify-between w-full heading-col">
                    <h1 className="text-2xl font-semibold text-gray900">Best Products</h1>
                    <ul className="flex gap-4 category-links">
                        <li className={activeCategory === "All Product" ? "active" : ""} onClick={() => setActiveCategory("All Product")}>
                            <span className="text-sm font-semibold capitalize text-gray900 cursor-pointer">All Product</span>
                        </li>
                        <li onClick={() => setActiveCategory("mens-watches")} className={activeCategory === "mens-watches" ? "active" : ""}>
                            <span className="text-sm font-medium capitalize text-gray600 cursor-pointer">mens-watches</span>
                        </li>
                        <li onClick={() => setActiveCategory("mens-shirts")} className={activeCategory === "mens-shirts" ? "active" : ""}>
                            <span className="text-sm font-medium capitalize text-gray600 cursor-pointer">mens-shirts</span>
                        </li>
                        <li onClick={() => setActiveCategory("mens-shoes")} className={activeCategory === "mens-shoes" ? "active" : ""}>
                            <span className="text-sm font-medium capitalize text-gray600 cursor-pointer">mens-shoes</span>
                        </li>
                        <li onClick={() => setActiveCategory("sports-accessories")} className={activeCategory === "sports-accessories" ? "active" : ""}>
                            <span className="text-sm font-medium capitalize text-gray600 cursor-pointer">sports-accessories</span>
                        </li>
                        <div className="flex items-center gap-2 navigate-all-products">
                            <span className="text-sm font-semibold text-primary500 cursor-pointer">Browse All Product</span>
                            <FaArrowRight className="w-5 h-5 cursor-pointer text-primary500" />
                        </div>
                    </ul>
                </div>
                {allProducts.length === 0 ?
                    <div className="col-loading w-full min-h-[400px] flex justify-center items-center">
                        <OrbitProgress color="#FA8232" size="medium" text="" textColor="" />
                    </div>
                    :
                    <div className="flex flex-wrap gap-4 mt-6 all-products-accessories">
                        {activeCategory === "All Product" ?
                            <>
                                {allElectroProducts.map((product, index) => {
                                    return (
                                        <div className="col-product w-[234px] h-[320px] rounded-[3px] p-3" key={product.id}>
                                            <div className="all-images w-[202px] h-[172px] relative mb-5">
                                                <img src={product.images[0]} alt="product-img" className="object-contain w-full h-full" />
                                                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 h-c-v-icons">
                                                    <div className="col-heart w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer">
                                                        <FaRegHeart className="w-5 h-5 text-black" />
                                                    </div>
                                                    <div className="col-cart  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer"
                                                        onClick={() => {
                                                            dispatch(addToCart(product));
                                                            toast.success("Added to cart successfully");
                                                        }}
                                                    >
                                                        <FiShoppingCart className="w-5 h-5 text-black" />
                                                    </div>
                                                    <div className="col-view  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer">
                                                        <FiEye className="w-5 h-5 text-black" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 information-product">
                                                <div className="flex items-center gap-1 all-stars-content">
                                                    <div className="flex all-stars">
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                    </div>
                                                    <p className="text-xs p-rate text-gray500">{`(${product.rating})`}</p>
                                                </div>
                                                <p className="text-sm title-product text-gray900">{product.title}</p>
                                                <span className="text-sm font-semibold price-product text-secondary500">{`₹${product.price}`}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                            :
                            ""
                        }
                        {activeCategory === "mens-watches" ?
                            <>
                                {mensWatches.map((product, index) => {
                                    return (
                                        <div className="col-product w-[234px] h-[320px] rounded-[3px] p-3" key={product.id}>
                                            <div className="all-images w-[202px] h-[172px] relative mb-5">
                                                <img src={product.images[0]} alt="product-img" className="object-contain w-full h-full" />
                                                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 h-c-v-icons">
                                                    <div className="col-heart w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer">
                                                        <FaRegHeart className="w-5 h-5 text-black" />
                                                    </div>
                                                    <div className="col-cart  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer"
                                                        onClick={() => {
                                                            dispatch(addToCart(product));
                                                            toast.success("Added to cart successfully");
                                                        }}
                                                    >
                                                        <FiShoppingCart className="w-5 h-5 text-black" />
                                                    </div>
                                                    <div className="col-view  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer">
                                                        <FiEye className="w-5 h-5 text-black" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 information-product">
                                                <div className="flex items-center gap-1 all-stars-content">
                                                    <div className="flex all-stars">
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                    </div>
                                                    <p className="text-xs p-rate text-gray500">{`(${product.rating})`}</p>
                                                </div>
                                                <p className="text-sm title-product text-gray900">{product.title}</p>
                                                <span className="text-sm font-semibold price-product text-secondary500">{`₹${product.price}`}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                            :
                            ""
                        }
                        {activeCategory === "mens-shirts" ?
                            <>
                                {mensShirts.map((product, index) => {
                                    return (
                                        <div className="col-product w-[234px] h-[320px] rounded-[3px] p-3" key={product.id}>
                                            <div className="all-images w-[202px] h-[172px] relative mb-5">
                                                <img src={product.images[0]} alt="product-img" className="object-contain w-full h-full" />
                                                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 h-c-v-icons">
                                                    <div className="col-heart w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer">
                                                        <FaRegHeart className="w-5 h-5 text-black" />
                                                    </div>
                                                    <div className="col-cart  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer"
                                                        onClick={() => {
                                                            dispatch(addToCart(product));
                                                            toast.success("Added to cart successfully");
                                                        }}
                                                    >
                                                        <FiShoppingCart className="w-5 h-5 text-black" />
                                                    </div>
                                                    <div className="col-view  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer">
                                                        <FiEye className="w-5 h-5 text-black" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 information-product">
                                                <div className="flex items-center gap-1 all-stars-content">
                                                    <div className="flex all-stars">
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                    </div>
                                                    <p className="text-xs p-rate text-gray500">{`(${product.rating})`}</p>
                                                </div>
                                                <p className="text-sm title-product text-gray900">{product.title}</p>
                                                <span className="text-sm font-semibold price-product text-secondary500">{`₹${product.price}`}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                            :
                            ""
                        }
                        {activeCategory === "mens-shoes" ?
                            <>
                                {mensShoes.map((product, index) => {
                                    return (
                                        <div className="col-product w-[234px] h-[320px] rounded-[3px] p-3" key={product.id}>
                                            <div className="all-images w-[202px] h-[172px] relative mb-5">
                                                <img src={product.images[0]} alt="product-img" className="object-contain w-full h-full" />
                                                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 h-c-v-icons">
                                                    <div className="col-heart w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer">
                                                        <FaRegHeart className="w-5 h-5 text-black" />
                                                    </div>
                                                    <div className="col-cart  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer"
                                                        onClick={() => {
                                                            dispatch(addToCart(product));
                                                            toast.success("Added to cart successfully");
                                                        }}
                                                    >
                                                        <FiShoppingCart className="w-5 h-5 text-black" />
                                                    </div>
                                                    <div className="col-view  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer">
                                                        <FiEye className="w-5 h-5 text-black" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 information-product">
                                                <div className="flex items-center gap-1 all-stars-content">
                                                    <div className="flex all-stars">
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                    </div>
                                                    <p className="text-xs p-rate text-gray500">{`(${product.rating})`}</p>
                                                </div>
                                                <p className="text-sm title-product text-gray900">{product.title}</p>
                                                <span className="text-sm font-semibold price-product text-secondary500">{`₹${product.price}`}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                            :
                            ""
                        }
                        {activeCategory === "sports-accessories" ?
                            <>
                                {sportsAccessories.map((product, index) => {
                                    return (
                                        <div className="col-product w-[234px] h-[320px] rounded-[3px] p-3" key={product.id}>
                                            <div className="all-images w-[202px] h-[172px] relative mb-5">
                                                <img src={product.images[0]} alt="product-img" className="object-contain w-full h-full" />
                                                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 h-c-v-icons">
                                                    <div className="col-heart w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer">
                                                        <FaRegHeart className="w-5 h-5 text-black" />
                                                    </div>
                                                    <div className="col-cart  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer"
                                                        onClick={() => {
                                                            dispatch(addToCart(product));
                                                            toast.success("Added to cart successfully");
                                                        }}
                                                    >
                                                        <FiShoppingCart className="w-5 h-5 text-black" />
                                                    </div>
                                                    <div className="col-view  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer">
                                                        <FiEye className="w-5 h-5 text-black" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 information-product">
                                                <div className="flex items-center gap-1 all-stars-content">
                                                    <div className="flex all-stars">
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                        <FaStar className="w-4 h-4 text-primary500" />
                                                    </div>
                                                    <p className="text-xs p-rate text-gray500">{`(${product.rating})`}</p>
                                                </div>
                                                <p className="text-sm title-product text-gray900">{product.title}</p>
                                                <span className="text-sm font-semibold price-product text-secondary500">{`₹${product.price}`}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                            :
                            ""
                        }
                    </div>
                }
            </div>
        </section>
    )
}
export default BestProducts;