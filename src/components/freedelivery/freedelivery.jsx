import FastdeliveryIcon from "../../assets/fast-delivery.svg";
import HoursreturnIcon from "../../assets/hours-return.svg";
import PaymentIcon from "../../assets/CreditCard.svg";
import SupportIcon from "../../assets/Headphones.svg";
import "../freedelivery/freedelivery.css";
function Freedelivery() {
    const contentInformation = [
        { id: 1, img: FastdeliveryIcon, title: "Fasted Delivery", description: "Delivery in 24/H" },
        { id: 2, img: HoursreturnIcon, title: "24 Hours Return", description: "100% money-back guarantee" },
        { id: 3, img: PaymentIcon, title: "Secure Payment", description: "Your money is safe" },
        { id: 4, img: SupportIcon, title: "Support 24/7", description: "Live contact/message" }
    ]
    return (
        <div className="w-full free-delivery-departament">
            <div className="container min-w-[100%] h-[108px]">
                <div className="flex items-center justify-between w-full h-full p-4 gap-7 all-content-delivery">
                    {contentInformation.map((item, index) => {
                        return (
                            <div className="flex gap-4 col-div" key={item.id}>
                                <img src={item.img} alt="img-icon" />
                                <div className="content-text">
                                    <h3 className="text-base uppercase text-gray900">{item.title}</h3>
                                    <p className="text-sm text-gray600">{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Freedelivery;