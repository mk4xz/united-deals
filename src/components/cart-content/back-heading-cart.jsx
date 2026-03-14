import iconBack from "../../assets/icon-notif.svg";
import shareIcon from "../../assets/share-icon.svg";
import { Link } from "react-router-dom";
function BackandHeadingCart() {
    return (
        <section className="w-full h-full pt-5 pb-10 back-heading-cart">
            <div className="container min-w-[100%] h-full">
                <div className="flex items-center justify-between w-full h-full mb-10 col-back">
                    <Link to={"/"}>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <img src={iconBack} alt="back-img" className="cursor-pointer back-icon" />
                            <h3 className="text-[22px] font-semibold text-black">Back</h3>
                        </div>
                    </Link>
                    <img src={shareIcon} alt="share-icon" className="share-icon" />
                </div>
                <div className="col-heading">
                    <h1 className="mb-3 text-5xl font-bold text-black">My Cart</h1>
                    <p className="text-3xl text-gray500">Let’s create your account</p>
                </div>
            </div>
        </section>
    )
}
export default BackandHeadingCart;
