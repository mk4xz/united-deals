import { Link } from "react-router-dom";
import zaraLogo from "../../assets/path815.png";
import dgLogo from "../../assets/vector-dg.png";
import hmLogo from "../../assets/layer1.png";
import chanelLogo from "../../assets/chanel-logo.png";
import pradaLogo from "../../assets/vector-prada.png";
import bibaLogo from "../../assets/logo-biba.png";
import "./shop-by-brands.css";

const brands = [
  { id: 1, name: "Zara", image: zaraLogo },
  { id: 2, name: "D&G", image: dgLogo },
  { id: 3, name: "H&M", image: hmLogo },
  { id: 4, name: "Chanel", image: chanelLogo },
  { id: 5, name: "Prada", image: pradaLogo },
  { id: 6, name: "Biba", image: bibaLogo },
];

function ShopByBrands() {
  return (
    <section className="shop-brands">
      <div className="container">
        <h2 className="shop-brands__title">SHOP BY BRANDS</h2>
        <div className="shop-brands__grid">
          {brands.map((brand) => (
            <Link key={brand.id} to="/zara" className="shop-brands__card" aria-label={brand.name}>
              <img src={brand.image} alt={brand.name} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopByBrands;
