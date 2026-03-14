import "./featured-products.css";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import { FiPlus, FiShoppingCart } from "react-icons/fi";
import { useEffect, useMemo, useState } from "react";
import { Element } from "react-scroll";
import { OrbitProgress } from "react-loading-indicators";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../store/slices.jsx/cart-products-slice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const categoryTabs = [
  { id: "all", label: "All Product" },
  { id: "smartphones", label: "Smart Phones" },
  { id: "laptops", label: "Laptops" },
  { id: "tablets", label: "Tablets" },
  { id: "mobile-accessories", label: "Mobile Accessories" },
];

const categoryOrder = [
  { category: "smartphones", limit: 3 },
  { category: "laptops", limit: 3 },
  { category: "tablets", limit: 2 },
  { category: "mobile-accessories", limit: 2 },
];

function FeaturedProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const getAllProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=194");
        const data = await response.json();

        if (isMounted) {
          setAllProducts(data.products || []);
        }
      } catch {
        if (isMounted) {
          setAllProducts([]);
        }
      }
    };

    getAllProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return categoryOrder.flatMap(({ category, limit }) =>
        allProducts.filter((product) => product.category === category).slice(0, limit),
      );
    }

    return allProducts.filter((product) => product.category === activeCategory).slice(0, 10);
  }, [activeCategory, allProducts]);

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
    <Element name="Featured-Products">
      <section className="w-full h-full featured-products mt-[72px] mb-[72px]">
        <div className="container flex min-w-[100%] h-full gap-6">
          <div className="w-full featured-products-content">
            <div className="flex items-center justify-between w-full heading-col">
              <h1 className="text-2xl font-semibold text-gray900">FREQUENTLY BOUGHT TOGETHER</h1>
              <ul className="flex gap-4 category-links">
                {categoryTabs.map((tab) => (
                  <li
                    key={tab.id}
                    className={activeCategory === tab.id ? "active" : ""}
                    onClick={() => setActiveCategory(tab.id)}
                  >
                    <span className="text-sm font-medium capitalize text-gray600 cursor-pointer">
                      {tab.label}
                    </span>
                  </li>
                ))}
                <Link to="/categories" className="flex items-center gap-2 navigate-all-products">
                  <span className="text-sm font-semibold text-primary500 cursor-pointer">
                    Browse All Product
                  </span>
                  <FaArrowRight className="w-5 h-5 cursor-pointer text-primary500" />
                </Link>
              </ul>
            </div>

            {allProducts.length === 0 ? (
              <div className="col-loading w-full min-h-[400px] flex justify-center items-center">
                <OrbitProgress color="#FA8232" size="medium" text="" textColor="" />
              </div>
            ) : (
              <div className="flex flex-wrap gap-4 mt-6 all-featured-products">
                {filteredProducts.map((product) => (
                  <article className="col-product w-[234px] h-[320px] rounded-[3px] p-3" key={product.id}>
                    <Link to={`/product/${product.id}`} className="all-images w-[202px] h-[172px] relative mb-5">
                      <img
                        src={product.images?.[0] || product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 h-c-v-icons">
                        <button
                          type="button"
                          className="col-plus w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer"
                          onClick={(event) => handleOpenProduct(event, product.id)}
                        >
                          <FiPlus className="w-5 h-5 text-black" />
                        </button>
                        <button
                          type="button"
                          className="col-cart  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer"
                          onClick={(event) => handleAddToCart(event, product)}
                        >
                          <FiShoppingCart className="w-5 h-5 text-black" />
                        </button>
                      </div>
                    </Link>

                    <div className="flex flex-col gap-2 information-product">
                      <div className="flex items-center gap-1 all-stars-content">
                        <div className="flex all-stars">
                          <FaStar className="w-4 h-4 text-primary500" />
                          <FaStar className="w-4 h-4 text-primary500" />
                          <FaStar className="w-4 h-4 text-primary500" />
                          <FaStar className="w-4 h-4 text-primary500" />
                          <FaStar className="w-4 h-4 text-primary500" />
                        </div>
                        <p className="text-xs p-rate text-gray500">{`(${Number(product.rating || 4.7).toFixed(1)})`}</p>
                      </div>
                      <p className="text-sm title-product text-gray900">{product.title}</p>
                      <span className="text-sm font-semibold price-product text-secondary500">
                        {`Rs ${Math.round(product.price)}`}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default FeaturedProducts;
