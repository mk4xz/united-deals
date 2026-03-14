import { FiChevronLeft, FiGrid, FiList } from "react-icons/fi";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer/footer";
import BreadcrumbTrail from "../components/shared/breadcrumb-trail";
import "./catalog-pages.css";
import mobileImg from "../assets/mobile-category-img.png";
import cosmeticsImg from "../assets/Image-category-1.png";
import electronicsImg from "../assets/Image-category-2.png";
import furnitureImg from "../assets/Image-category-4.png";
import watchImg from "../assets/watches-category-img.png";
import decorImg from "../assets/Image-category-5.png";

const baseCategories = [
  { id: 1, title: "Mobile", image: mobileImg },
  { id: 2, title: "Cosmetics", image: cosmeticsImg },
  { id: 3, title: "Electronics", image: electronicsImg },
  { id: 4, title: "Furniture", image: furnitureImg },
  { id: 5, title: "Watches", image: watchImg },
  { id: 6, title: "Decor", image: decorImg },
];

const allCategories = Array.from({ length: 8 }).flatMap((_, rowIndex) =>
  baseCategories.map((item, itemIndex) => ({
    ...item,
    id: `${rowIndex}-${itemIndex}`,
  })),
);

function CategoriesPage() {
  return (
    <>
      <Header />
      <div className="page-offset catalog-page">
        <BreadcrumbTrail
          items={[
            { label: "Home", to: "/" },
            { label: "Shop", to: "/categories" },
            { label: "Shop Grid", to: "/categories" },
            { label: "Electronics Devices", to: "/categories" },
            { label: "Macbook Pro" },
          ]}
        />

        <main className="container catalog-main">
          <section className="catalog-toolbar">
            <div className="catalog-toolbar__left">
              <button className="catalog-back-btn" type="button" aria-label="back">
                <FiChevronLeft />
              </button>
              <h1>All Categories</h1>
            </div>

            <div className="catalog-toolbar__right">
              <div className="catalog-view-icons">
                <FiGrid />
                <FiList />
              </div>
              <p>Showing 1 - 40 of 145 items</p>
              <div className="catalog-show">
                <span>To Show:</span>
                <input type="number" value="9" readOnly />
              </div>
              <select>
                <option>Position</option>
                <option>Price low to high</option>
                <option>Price high to low</option>
              </select>
            </div>
          </section>

          <section className="catalog-circle-grid">
            {allCategories.map((item, index) => (
              <Link to="/zara" className="catalog-circle-item" key={item.id}>
                <div className={`catalog-circle-image ${index === 0 ? "is-active" : ""}`}>
                  <img src={item.image} alt={item.title} />
                </div>
                <p>{item.title}</p>
              </Link>
            ))}
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default CategoriesPage;
