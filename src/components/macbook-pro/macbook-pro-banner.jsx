import MacbookProImg from "../../assets/macbook-pro.png";
import "./macbook-pro.css";
function MacbookProBanner() {
    return (
        <section className="macbook-pro w-full h-full mb-[72px]">
            <div className="container min-w-[100%] h-full">
                <div className="w-full h-full col-banner">
                    <img src={MacbookProImg} alt="banner-img" className="object-contain h-full min-w-full" />
                </div>
            </div>
        </section>
    )
}
export default MacbookProBanner;