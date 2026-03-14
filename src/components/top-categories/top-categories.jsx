import { Link } from "react-router-dom";
import ViewAllButton from "../view-all-btn/view-all-btn";
import mobileImg from "../../assets/mobile-category-img.png";
import cosmeticsImg from "../../assets/Image-category-1.png";
import electronicsImg from "../../assets/Image-category-2.png";
import furnitureImg from "../../assets/Image-category-4.png";
import watchImg from "../../assets/watches-category-img.png";
import decorImg from "../../assets/Image-category-5.png";
import accessoriesImg from "../../assets/Image-category-6.png";
import "./top-categories.css";

const categories = [
  { id: 1, title: "Mobile", image: mobileImg, active: true },
  { id: 2, title: "Cosmetics", image: cosmeticsImg },
  { id: 3, title: "Electronics", image: electronicsImg },
  { id: 4, title: "Furniture", image: furnitureImg },
  { id: 5, title: "Watches", image: watchImg },
  { id: 6, title: "Decor", image: decorImg },
  { id: 7, title: "Accessories", image: accessoriesImg },
];

function TopCategories() {
  return (
    <section className="top-categories-section">
      <div className="container">
        <div className="top-categories__header">
          <h2 className="top-categories__title">
            SHOP FROM <span>TOP CATEGORIES</span>
          </h2>
          <Link to="/categories">
            <ViewAllButton />
          </Link>
        </div>

        <div className="top-categories__list">
          {categories.map((category) => (
            <Link to="/categories" className="top-categories__item" key={category.id}>
              <div className={`top-categories__image-wrap ${category.active ? "is-active" : ""}`}>
                <img src={category.image} alt={category.title} />
              </div>
              <p>{category.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCategories;
