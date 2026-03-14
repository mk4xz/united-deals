import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPlus, FiShoppingCart } from "react-icons/fi";
import { OrbitProgress } from "react-loading-indicators";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addToCart } from "../../store/slices.jsx/cart-products-slice";
import ViewAllButton from "../view-all-btn/view-all-btn";
import "./todays-deals-products.css";

function TodaysDealsProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dealProducts, setDealProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadDealProducts = async () => {
      try {
        const [phonesResponse, motorcyclesResponse] = await Promise.all([
          fetch("https://dummyjson.com/products/category/smartphones?limit=6"),
          fetch("https://dummyjson.com/products/category/motorcycle?limit=4"),
        ]);

        const [phonesData, motorcyclesData] = await Promise.all([
          phonesResponse.json(),
          motorcyclesResponse.json(),
        ]);

        const mergedProducts = [
          ...(phonesData.products || []).slice(0, 3),
          ...(motorcyclesData.products || []).slice(0, 1),
        ].map((product, index) => ({
          ...product,
          isHot: index % 2 === 1,
          dealText: index % 2 === 1 ? "Flash Deal Ends in 1 Hours !" : "Flash Deal Ends in 5 Hours !",
        }));

        if (isMounted) {
          setDealProducts(mergedProducts);
        }
      } catch {
        if (isMounted) {
          setDealProducts([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadDealProducts();

    return () => {
      isMounted = false;
    };
  }, []);

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
    <section className="todays-deals">
      <div className="container">
        <div className="todays-deals__header">
          <h2>TODAY'S DEALS OF THE DAY</h2>
          <div className="todays-deals__meta">
            <p>Deals ends in</p>
            <div className="todays-deals__timer">16d : 21h : 57m : 23s</div>
            <Link to="/zara">
              <ViewAllButton />
            </Link>
          </div>
        </div>

        {isLoading ? (
          <div className="todays-deals__loading">
            <OrbitProgress color="#FA8232" size="medium" text="" textColor="" />
          </div>
        ) : (
          <div className="todays-deals__grid">
            {dealProducts.map((product) => (
              <article className="todays-deals__card" key={product.id}>
                <Link to={`/product/${product.id}`} className="todays-deals__image-wrap">
                  <div className="todays-deals__badge">New</div>
                  <img src={product.thumbnail} alt={product.title} />
                  <div className="todays-deals__overlay-actions">
                    <button
                      type="button"
                      aria-label="add to cart"
                      onClick={(event) => handleAddToCart(event, product)}
                    >
                      <FiShoppingCart />
                    </button>
                    <button
                      type="button"
                      aria-label="open product"
                      onClick={(event) => handleOpenProduct(event, product.id)}
                    >
                      <FiPlus />
                    </button>
                  </div>
                </Link>

                <p className={`todays-deals__flash ${product.isHot ? "is-hot" : ""}`}>{product.dealText}</p>
                <div className={`todays-deals__line ${product.isHot ? "is-hot" : ""}`} />
                <h3>{product.title}</h3>
                <p className="todays-deals__price">{`Rs ${Math.round(product.price)}`}</p>
                <button
                  className="todays-deals__buy-btn"
                  type="button"
                  onClick={(event) => handleAddToCart(event, product)}
                >
                  BUY NOW - {`Rs ${Math.round(product.price)}`}
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default TodaysDealsProducts;
