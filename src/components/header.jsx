import TopHeaderCart from "./cart-content/top-header-cart";
import CenterHeaderCart from "./cart-content/center-header-cart";
import MainNav from "./main-nav/main-nav";
import "./header.css";

function Header() {
    return (
        <header className="site-header">
            <TopHeaderCart />
            <CenterHeaderCart />
            <MainNav />
        </header>
    );
}

export default Header;
