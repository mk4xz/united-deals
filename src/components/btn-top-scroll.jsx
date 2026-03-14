import { FaChevronUp } from "react-icons/fa6";
import { Link } from "react-scroll";
function ScrollBtnTop() {
    return(
        <Link
            to="top" 
            smooth={true}
            duration={500}
        >
            <div className="scroll-btn w-[40px] h-[40px] bg-warning400 fixed bottom-[40px] right-[20px] flex justify-center items-center cursor-pointer">
                <FaChevronUp className="text-white"/>
            </div>
        </Link>
    )
}
export default ScrollBtnTop;