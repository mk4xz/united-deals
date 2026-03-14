import "./latest-news.css";
import { FaArrowRight } from "react-icons/fa6";
import userCircleIcon from "../../assets/UserCircle.svg";
import calendarIcon from "../../assets/CalendarBlank.svg";
import chatcirclIcon from "../../assets/ChatCircleDots.svg";
import latestnewsImg1 from "../../assets/latest-news-img1.png";
import latestnewsImg2 from "../../assets/latest-news-img2.png";
import latestnewsImg3 from "../../assets/latest-news-img3.png";
function LatestNews() {
    const allLatestNews = [
        { id: 1, img: latestnewsImg1, icons: [{ id: 1, user: "Store Admin", calender: "19Dec, 2013", chats: "453" }], title: "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.", description: "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus." },
        { id: 2, img: latestnewsImg2, icons: [{ id: 1, user: "Store Admin", calender: "28 Nov, 2015", chats: "738" }], title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ", description: "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. " },
        { id: 3, img: latestnewsImg3, icons: [{ id: 1, user: "Store Admin", calender: "9 May, 2014", chats: "826" }], title: "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.", description: "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus." }
    ];

    return (
        <section className="w-full h-full latest-news-section pt-[72px] pb-[72px] bg-gray50">
            <div className="container min-w-[100%] h-full">
                <h1 className="w-full text-center mb-10 text-[32px] text-gray900 font-semibold font-sans">Latest News</h1>
                <div className="flex justify-center w-full h-full gap-6 all-cols-latestnews">
                    {allLatestNews.map((latest, index) => {
                        return (
                            <div className="p-8 col-news w-[424px] h-[572px] flex flex-col gap-4" key={latest.id}>
                                <div className="flex items-center justify-center w-full h-full col-img">
                                    <img src={latest.img} alt="img-news" className="object-contain w-full h-full" />
                                </div>
                                {latest.icons.map((icon, index) => {
                                    return (
                                        <div className="flex items-center gap-4 all-icons" key={icon.id}>
                                            <div className="flex gap-[6px] items-center">
                                                <img src={userCircleIcon} alt="img-icon" />
                                                <p>{icon.user}</p>
                                            </div>
                                            <div className="flex gap-[6px] items-center">
                                                <img src={calendarIcon} alt="img-icon" />
                                                <p>{icon.calender}</p>
                                            </div>
                                            <div className="flex gap-[6px] items-center">
                                                <img src={chatcirclIcon} alt="img-icon" />
                                                <p>{icon.chats}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                                <h2 className="font-sans text-lg font-medium text-gray900">{latest.title}</h2>
                                <p className="font-sans text-base text-gray500">{latest.description}</p>
                                <div className="text-white btn-read-more bg-primary500 w-[165px] min-h-[48px] flex justify-center items-center gap-2 cursor-pointer">
                                    <span className="text-sm font-bold text-white uppercase">Read more</span>
                                    <FaArrowRight className="text-white" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default LatestNews;
