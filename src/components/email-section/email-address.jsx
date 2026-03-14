import { FaArrowRight } from "react-icons/fa6";
import googleImg from "../../assets/google-play-icon.svg";
import amazonImg from "../../assets/Frame.svg";
import philipsImg from "../../assets/philips-logo.svg";
import toshibaImg from "../../assets/toshiba-logo.svg";
import samsungImg from "../../assets/samsung-logo.svg";
import "./email-address.css";
function EmailAddress() {
    return(
        <section className="email-address-section w-full h-full bg-secondary700 pt-[72px] pb-[72px]">
            <div className="container min-w-[100%] h-full flex flex-col justify-center items-center gap-3">
                <h1 className="text-2xl font-semibold text-white">Subscribe to our newsletter</h1>
                <p className="mb-2 text-xs text-whiteColor max-w-[500px] text-center leading-[1.6]">Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>
                <form action="" className="flex items-center justify-between w-[40%] h-[72px] bg-whiteColor p-3 rounded-[3px] gap-4 mb-3 form-subscribe">
                    <input type="text" placeholder="Email address" className="w-[65%] h-full border-none outline-none text-base text-gray500 placeholder:pl-2 focus:bg-white"/>
                    <button type="submit" className="flex items-center w-[160px] h-[48px] bg-primary500 pl-6 pr-6 rounded-sm justify-center gap-2 cursor-pointer">
                        <p className="text-sm text-whiteColor font-semibold">Subscribe</p>
                        <FaArrowRight className="text-white"/>
                    </button>
                </form>
                <div className="col-websites flex gap-12 flex-wrap justify-center">
                    <img src={googleImg} alt="google" />
                    <img src={amazonImg} alt="amazon" />
                    <img src={philipsImg} alt="philips" />
                    <img src={toshibaImg} alt="toshiba" />
                    <img src={samsungImg} alt="samsung" />
                </div>
            </div>
        </section>
    )
}
export default EmailAddress;
