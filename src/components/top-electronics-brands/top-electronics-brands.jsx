import ViewAllButton from "../view-all-btn/view-all-btn";
import brandImg1 from "../../assets/brand-img-1.png";
import brandImg2 from "../../assets/brand-img-2.png";
import brandImg3 from "../../assets/brand-img-3.png";
import "./top-electronics-brands.css";
function TopElectronicsBrands() {
    return (
        <section className="w-full h-full top-electronics-brands mt-[40px] mb-[40px]">
            <div className="container min-w-[100%] h-full">
                <div className="flex items-center justify-between w-full col-heading border-b-[1px] border-textColor pb-5">
                    <h1 className="sm:text-[22px] md:text-[25px] lg:text-[28px] font-bold text-headingcolor uppercase">Top<span className="text-primary500">Electronics Brands</span></h1>
                    <ViewAllButton />
                </div>
                <div className="flex w-full gap-5 mt-5 all-brands-img">
                    <div className="col-brand">
                        <img src={brandImg2} alt="brand-img" className="object-contain w-fit h-fit" />
                    </div>
                    <div className="col-brand">
                        <img src={brandImg3} alt="brand-img" className="object-contain w-fit h-fit" />
                    </div>
                    <div className="col-brand">
                        <img src={brandImg1} alt="brand-img" className="object-contain w-fit h-fit" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TopElectronicsBrands;
