import bannerImg1 from "../../assets/Banner.png";
import bannerImg2 from "../../assets/banner-secondary.png";
import "./new-apple-banner.css";
function NewAppleBanner() {
    return (
        <section className="w-full h-full new-apple-banner mt-[72px] mb-[72px]">
            <div className="container min-w-[100%] flex gap-6">
                <div className="col-img-banner w-[50%] h-full">
                    <img src={bannerImg1} alt="banner-img" className="cursor-pointer" />
                </div>
                <div className="col-img-banner w-[50%] h-full">
                    <img src={bannerImg2} alt="banner-img" className="cursor-pointer" />
                </div>
            </div>
        </section>
    )
}
export default NewAppleBanner;
