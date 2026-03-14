import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import phoneImageOne from "../../assets/Image-product1.png";
import phoneImageTwo from "../../assets/Image-product2.png";
import headsetImage from "../../assets/Image-product4.png";
import cameraPhoneImage from "../../assets/Image-product7.png";
import "./main-nav.css";

const navItems = [
  { key: "groceries", label: "Groceries", to: "/categories" },
  { key: "premium", label: "Premium Fruits", to: "/" },
  { key: "kitchen", label: "Home & Kitchen", to: "/" },
  { key: "fashion", label: "Fashion", to: "/zara" },
  { key: "electronics", label: "Electronics", to: "/categories" },
  { key: "beauty", label: "Beauty", to: "/categories" },
  { key: "improvement", label: "Home Improvement", to: "/categories" },
  { key: "sports", label: "Sports, Toys & Luggage", to: "/categories" },
];

const departmentLinks = [
  "Computer & Laptop",
  "Computer Accessories",
  "SmartPhone",
  "Headphone",
  "Mobile Accessories",
  "Gaming Console",
  "Camera & Photo",
  "TV & Homes Appliances",
  "Watches & Accessories",
  "GPS & Navigation",
  "Wearable Technology",
];

const brandLinks = ["All", "iPhone", "Samsung", "Realme", "Xiaomi", "Oppo", "Vivo", "OnePlus", "Huawei", "Infinix", "Tecno"];

const featuredPhones = [
  {
    id: 1,
    title: "Samsung Electronics Samsung Galaxy S21 5G",
    oldPrice: null,
    price: "Rs 160",
    image: phoneImageTwo,
  },
  {
    id: 2,
    title: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone",
    oldPrice: null,
    price: "Rs 1,500",
    image: headsetImage,
  },
  {
    id: 3,
    title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
    oldPrice: "Rs 2800",
    price: "Rs 2,300",
    image: cameraPhoneImage,
  },
];

function MainNav() {
  const location = useLocation();
  const navRef = useRef(null);
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  const getIsActive = (item) => {
    if (item.key === "fashion") return location.pathname.startsWith("/zara");
    if (item.key === "electronics") {
      return location.pathname.startsWith("/categories") || location.pathname.startsWith("/product");
    }
    return item.to === "/" && location.pathname === "/";
  };

  const closeMegaMenu = () => {
    setIsMegaOpen(false);
  };

  const openMegaMenuOnHover = () => {
    setIsMegaOpen(true);
  };

  const handleNavMouseLeave = () => {
    setIsMegaOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMegaMenu();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeMegaMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    closeMegaMenu();
  }, [location.pathname]);

  return (
    <nav className="main-nav" ref={navRef} onMouseLeave={handleNavMouseLeave}>
      <div className="container main-nav__container">
        <ul className="main-nav__list">
          {navItems.map((item) => (
            <li
              key={item.key}
              className={`main-nav__item ${item.key === "groceries" ? "has-dropdown" : ""}`}
              onMouseEnter={item.key === "groceries" ? openMegaMenuOnHover : undefined}
            >
              {item.key === "groceries" ? (
                <Link
                  to={item.to}
                  className={`main-nav__pill ${getIsActive(item) ? "is-active" : ""} ${
                    isMegaOpen ? "is-open" : ""
                  }`}
                  onMouseEnter={openMegaMenuOnHover}
                  aria-expanded={isMegaOpen}
                  aria-haspopup="menu"
                >
                  <span>{item.label}</span>
                  <FiChevronDown className="main-nav__icon" />
                </Link>
              ) : (
                <Link to={item.to} className={`main-nav__pill ${getIsActive(item) ? "is-active" : ""}`}>
                  <span>{item.label}</span>
                  <FiChevronDown className="main-nav__icon" />
                </Link>
              )}
            </li>
          ))}
        </ul>

        {isMegaOpen && (
          <div className="main-nav__mega-menu" role="menu" onMouseEnter={openMegaMenuOnHover}>
            <aside className="main-nav__mega-departments">
              <ul>
                {departmentLinks.map((item) => (
                  <li key={item} className={item === "SmartPhone" ? "is-highlighted" : ""}>
                    <span>{item}</span>
                    {item === "SmartPhone" && <FiChevronRight />}
                  </li>
                ))}
              </ul>
            </aside>

            <aside className="main-nav__mega-brands">
              <ul>
                {brandLinks.map((item) => (
                  <li key={item} className={item === "iPhone" ? "is-active" : ""}>
                    {item}
                  </li>
                ))}
              </ul>
            </aside>

            <section className="main-nav__mega-featured">
              <h3>FEATURED PHONES</h3>
              <div className="main-nav__mega-featured-list">
                {featuredPhones.map((phone) => (
                  <article key={phone.id} className="main-nav__mega-product">
                    <img src={phone.image} alt={phone.title} />
                    <div>
                      <h4>{phone.title}</h4>
                      <p>
                        {phone.oldPrice ? <span className="old-price">{phone.oldPrice}</span> : null}
                        <span className="new-price">{phone.price}</span>
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <aside className="main-nav__mega-offer">
              <img src={phoneImageOne} alt="discount phone" />
              <h3>21% Discount</h3>
              <p>Escape the noise. It&apos;s time to hear the magic with Xiaomi Earbuds.</p>
              <div className="main-nav__mega-offer-price">
                <span>Starting price:</span>
                <strong>$99 USD</strong>
              </div>
              <Link to="/categories" className="main-nav__mega-offer-btn" onClick={closeMegaMenu}>
                SHOP NOW
                <FiChevronRight />
              </Link>
            </aside>
          </div>
        )}
      </div>
    </nav>
  );
}

export default MainNav;
