import "./cart-style.css";
function TopHeaderCart() {
    return (
        <section className="top-header-cart w-full h-[42px] bg-bgblack">
            <div className="container min-w-[100%] h-full flex justify-between items-center text-textColor text-sm">
                <p className="welcome-p">Welcome to worldwide Megamart!</p>
                <div className="flex gap-10 all-text">
                    <p className="border-r pr-7 border-textColor">Deliver to 423651</p>
                    <p className="border-r pr-7 border-textColor">Track your order</p>
                    <p>All Offers</p>
                </div>
            </div>
        </section>
    )
}
export default TopHeaderCart;