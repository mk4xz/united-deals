import { useEffect, useMemo, useState } from "react";
import { FiChevronLeft, FiGrid, FiList, FiPlus, FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Header from "../components/header";
import Footer from "../components/footer/footer";
import BreadcrumbTrail from "../components/shared/breadcrumb-trail";
import { addToCart } from "../store/slices.jsx/cart-products-slice";
import "./catalog-pages.css";

const brandOptions = ["Nike", "Rebook", "Zara", "Gearo", "Indi", "Aei", "Lulu", "Beast"];
const categorySlugs = ["mens-shirts", "sunglasses", "mens-shoes", "fragrances", "womens-dresses"];

function ZaraPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState(["Zara"]);
  const [toShow, setToShow] = useState(9);
  const [sortBy, setSortBy] = useState("position");

  useEffect(() => {
    const loadFashionProducts = async () => {
      const requests = categorySlugs.map((slug) =>
        fetch(`https://dummyjson.com/products/category/${slug}?limit=20`).then((res) => res.json()),
      );

      const responses = await Promise.all(requests);
      const merged = responses.flatMap((response) => response.products || []);
      const uniqueById = Array.from(new Map(merged.map((item) => [item.id, item])).values());

      const normalized = uniqueById.map((item, index) => ({
        ...item,
        localBrand: index % 2 === 0 ? "Zara" : brandOptions[index % (brandOptions.length - 1)],
        dealText: index % 3 === 0 ? "Flash Deal Ends in 1 Hours !" : "Flash Deal Ends in 5 Hours !",
      }));

      setProducts(normalized);
    };

    loadFashionProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedBrands.length > 0) {
      result = result.filter((product) => selectedBrands.includes(product.localBrand));
    }

    if (sortBy === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result.slice(0, toShow);
  }, [products, selectedBrands, sortBy, toShow]);

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((item) => item !== brand) : [...prev, brand],
    );
  };

  const handleAddToCart = (event, product) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addToCart(product));
    toast.success("Added to cart");
  };

  const handleOpenProduct = (event, productId) => {
    event.preventDefault();
    event.stopPropagation();
    navigate(`/product/${productId}`);
  };

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
              <h1>ZARA</h1>
            </div>

            <div className="catalog-toolbar__right">
              <div className="catalog-view-icons">
                <FiGrid />
                <FiList />
              </div>
              <p>Showing 1 - 40 of 145 items</p>
              <div className="catalog-show">
                <span>To Show:</span>
                <input
                  type="number"
                  value={toShow}
                  min="3"
                  max="30"
                  onChange={(event) => setToShow(Number(event.target.value) || 9)}
                />
              </div>
              <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                <option value="position">Position</option>
                <option value="price-low">Price low to high</option>
                <option value="price-high">Price high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </div>
          </section>

          <div className="zara-layout">
            <aside className="zara-sidebar">
              <div className="zara-filter-row">
                <span>Size</span>
                <FiPlus />
              </div>
              <div className="zara-filter-row is-open">
                <span>Brand</span>
                <span>-</span>
              </div>

              <ul className="zara-brands">
                {brandOptions.map((brand) => (
                  <li key={brand}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                      />
                      <span>{brand}</span>
                    </label>
                  </li>
                ))}
              </ul>

              <div className="zara-filter-row">
                <span>Price Range</span>
                <FiPlus />
              </div>
              <div className="zara-filter-row">
                <span>Discount</span>
                <FiPlus />
              </div>
              <div className="zara-filter-row">
                <span>Availability</span>
                <FiPlus />
              </div>
            </aside>

            <section className="zara-products">
              {filteredProducts.map((product) => (
                <article className="zara-card" key={product.id}>
                  <Link to={`/product/${product.id}`} className="zara-card__image-wrap">
                    <img src={product.thumbnail} alt={product.title} />
                    <div className="zara-card__overlay-actions">
                      <button type="button" onClick={(event) => handleAddToCart(event, product)}>
                        <FiShoppingCart />
                      </button>
                      <button type="button" onClick={(event) => handleOpenProduct(event, product.id)}>
                        <FiPlus />
                      </button>
                    </div>
                  </Link>

                  <p className={`zara-card__flash ${product.dealText.includes("1 Hours") ? "is-hot" : ""}`}>
                    {product.dealText}
                  </p>
                  <div className={`zara-card__line ${product.dealText.includes("1 Hours") ? "is-hot" : ""}`} />
                  <h3>{product.title}</h3>
                  <div className="zara-card__rating">
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span>{Number(product.rating || 4.7).toFixed(1)}</span>
                    <small>(21,671 Ratings)</small>
                  </div>
                  <button
                    type="button"
                    className="zara-card__deal"
                    onClick={() => {
                      dispatch(addToCart(product));
                      toast.success("Added to cart");
                    }}
                  >
                    GET DEAL - {`Rs ${Math.round(product.price)}`}
                  </button>
                  <Link to={`/product/${product.id}`} className="zara-card__buy">
                    BUY NOW - {`Rs ${Math.round(product.price)}`}
                  </Link>
                </article>
              ))}
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ZaraPage;
