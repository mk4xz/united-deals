import logoImg from "../../assets/logo-footer.png";
import googlePlayImg from "../../assets/google-play-badge.png";
import appleStoreImg from "../../assets/app-store-badge.png";
import { FaArrowRight } from "react-icons/fa6";
import "./footer.css";

function Footer() {
    return(
        <footer className="w-full h-full bg-gray900 pt-[72px] pb-[72px]">
            <div className="container flex justify-between min-w-[100%] h-full flex-wrap gap-10">
                <div className="col-one">
                    <img src={logoImg} alt="logo" className="cursor-pointer mb-7"/>
                    <div className="customer-support flex flex-col gap-1 mb-5">
                        <h2 className="text-sm  font-medium text-gray500 tracking-[0.5px]">Customer Supports:</h2>
                        <p className="text-[18px] text-white font-medium">(629) 555-0129</p>
                    </div>
                    <p className="p-location text-base font-sans tracking-[0.5px] text-gray300 max-w-[250px] mb-5">4517 Washington Ave. Manchester, Kentucky 39495</p>
                    <a href="mailto:info@kinbo.com" className="text-base font-sans text-white">info@kinbo.com</a>
                </div>
                <div className="col-two flex gap-20 flex-wrap">
                    <ul className="TopCategory-links">
                        <h2 className="text-base text-white font-sans uppercase font-medium mb-6">Top Category</h2>
                        <div className="all-links flex flex-col gap-3">
                            <li>
                                <a href="#" className="text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500">Computer & Laptop</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500">SmartPhone</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500">Headphone</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500">Accessories</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500">Camera & Photo</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500">TV & Homes</a>
                            </li>
                            <div className="go-to-products flex gap-2 items-center justify-center h-[32px]">
                                <a href="#" className="text-sm font-sans font-medium text-warning500">Browse All Product</a>
                                <FaArrowRight className="text-warning500 cursor-pointer"/>
                            </div>
                        </div>
                    </ul>
                    <ul className="Quicklinks-links">
                        <h2 className="text-base text-white font-sans uppercase font-medium mb-6">Quick links</h2>
                        <div className="all-links flex flex-col gap-3">
                            <li>
                                <a href="#" className="text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500">Shop Product</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500">Shoping Cart</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500">Wishlist</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500">Compare</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500">Track Order</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500">Customer Help</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500">About Us</a>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="col-three flex gap-6 flex-wrap">
                    <div className="Download-APP-Col">
                        <h2 className="text-base text-white font-sans uppercase font-medium mb-6">Download APP</h2>
                        <div className="images-download flex flex-col gap-3">
                            <img src={googlePlayImg} alt="google-play" className="cursor-pointer"/>
                            <img src={appleStoreImg} alt="apple-store" className="cursor-pointer"/>
                        </div>
                    </div>
                    <div className="Popular-Tag">
                        <h2 className="text-base text-white font-sans uppercase font-medium mb-6">Popular Tag</h2>
                        <div className="all-tags flex w-[350px] flex-wrap gap-2">
                            <div className="col-tag w-fit h-8 pt-[6px] pb-[6px] pl-3 pr-3">Game</div>
                            <div className="col-tag">iPhone</div>
                            <div className="col-tag">TV</div>
                            <div className="col-tag">Asus Laptops</div>
                            <div className="col-tag">Macbook</div>
                            <div className="col-tag">SSD</div>
                            <div className="col-tag">Graphics Card</div>
                            <div className="col-tag">Power Bank</div>
                            <div className="col-tag">Smart TV</div>
                            <div className="col-tag">Speaker</div>
                            <div className="col-tag">Tablet</div>
                            <div className="col-tag">Microwave</div>
                            <div className="col-tag">Samsung</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
