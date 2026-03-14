import HomeIcon from "../../assets/House.svg";
import RightIcon from "../../assets/CaretRight.svg";
import { Link } from "react-router-dom";
import "./cart-style.css";
function BottomHeaderCart() {
    return (
        <section className="bottom-header-cart w-full h-[69px] border-t-[1px] border-borderColor border-b-[1px]">
            <div className="container min-w-[100%] h-full">
                <ul className="flex items-center h-full gap-5">
                    <li className="flex items-center gap-3">
                        <Link to={"/"}>
                            <img src={HomeIcon} alt="home-icon" className="cursor-pointer" />
                        </Link>
                        <Link to={"/"} className="text-base font-medium transition-colors duration-500 text-gray600 hover:text-blueColor">Home</Link>
                        <img src={RightIcon} alt="right-icon" />
                    </li>
                    <li className="flex items-center gap-3">
                        <Link to={"/cart"} className="text-base font-medium transition-colors duration-500 text-gray600 hover:text-blueColor">Cart</Link>
                        <img src={RightIcon} alt="right-icon" />
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default BottomHeaderCart;