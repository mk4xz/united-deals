import iconLogo from "../../assets/icon-logo-cart.svg";
import searchIcon from "../../assets/Search.svg";
import flashSaleIcon from "../../assets/flash-sale.svg";
import myDealsIcon from "../../assets/my-deals-icon.svg";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./cart-style.css";
function CenterHeaderCart() {
    const [search,setSearch] = useState("");
    const [products,setProducts] = useState([]);

    const getSearchProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products/search?q=${search}`);
        const data = await res.json();
        setProducts(data.products);
    }

    useEffect(() => {
        getSearchProducts()
    },[search]);

    return (
        <>
        <section className="w-full h-[90px] center-header-cart bg-whiteColor">
            <div className="container min-w-[100%] h-full flex justify-between items-center relative">
                <Link to={"/"}>
                    <div className="flex items-center gap-5 col-logo cursor-pointer">
                        <img src={iconLogo} alt="icon-logo-cart" className="cursor-pointer" />
                        <h1 className="text-[30px] font-extrabold uppercase text-black">United Deals</h1>
                        <img src={flashSaleIcon} alt="flash-sale-icon" className="flash-sale-img"/>
                    </div>
                </Link>
                <form action="" className="flex items-center w-[25%] h-12 bg-bgColor rounded-lg pl-3 pr-3 gap-3">
                    <button type="submit">
                        <img src={searchIcon} alt="search-icon" />
                    </button>
                    <input type="text" 
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search essentials, groceries and more..." 
                        className="w-full h-full text-sm bg-transparent border-none outline-none text-colorPlaceholder" />
                </form>
                {search.length >= 3 
                    ? 
                <div className="content-result-search absolute top-[70px] w-full flex justify-center items-center">
                    <div className="all-result-search w-[35%] max-h-[320px] overflow-y-auto shadow-lg bg-white rounded p-2">
                        {products.length === 0 ?
                            <div className="h-[250px] flex justify-center items-center">
                                <h1 className="text-center text-black capitalize">product not found</h1>
                            </div>
                            :
                            <>
                                {products.map((product,index) => {
                                    return(
                                        <Link to={`/product/${product.id}`}>
                                            <div className="col-product flex justify-between items-center border-b-[1px] border-borderColor p-1 cursor-pointer" key={product.id}>
                                                <div className="col-img w-[120px] h-[70px]">
                                                    <img src={product?.images[0]} alt="product-img" className="w-full h-full object-contain"/>
                                                </div>
                                                <h1 className="text-base text-black font-bold">{product.title}</h1>
                                                <span className="text-[14px] font-bold text-primary500">{`₹${product.price}`}</span>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </>
                            
                        }
                    </div>
                </div>
                    :
                    null
                }
                <div className="flex items-center gap-5 sign-in-cart-content">
                    <FiSearch className="search-icon w-[20px] h-[20px] text-black cursor-pointer hover:text-dealsColor transition-colors duration-500"/>
                    <Link to={"/zara"} className="col-deals flex items-center gap-[6px]">
                        <img src={myDealsIcon} alt="my-deals-icon" />
                        <p className="text-base text-dealsColor my-deals-p">My Deals</p>
                    </Link>
                    <Link to={"/signup"} className="flex gap-[6px] col-user items-center cursor-pointer">
                        <FiUser className="w-[20px] h-[20px] text-black hover:text-dealsColor transition-colors duration-500"/>
                        <p className="sign-p text-base text-colorPlaceholder hover:text-dealsColor transition-colors duration-500">Sign Up/Sign In</p>
                    </Link>
                    <Link to={"/cart"}>
                        <div className="flex gap-[6px] col-cart items-center cursor-pointer">
                            <FiShoppingCart className="w-[20px] h-[20px] text-black hover:text-dealsColor transition-colors duration-500"/>
                            <p className="cart-p text-base text-colorPlaceholder  hover:text-dealsColor transition-colors duration-500">Cart</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
        </>
    )
}
export default CenterHeaderCart;
