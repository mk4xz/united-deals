import { Link } from "react-router-dom";
import homeIcon from "../../assets/House.svg";
import rightIcon from "../../assets/CaretRight.svg";
import "./breadcrumb-trail.css";

function BreadcrumbTrail({ items }) {
  return (
    <section className="breadcrumb-trail">
      <div className="container">
        <ul>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.label}-${index}`}>
                {index === 0 && <img src={homeIcon} alt="home" className="breadcrumb-home" />}
                {item.to && !isLast ? (
                  <Link to={item.to}>{item.label}</Link>
                ) : (
                  <span className={isLast ? "is-last" : ""}>{item.label}</span>
                )}
                {!isLast && <img src={rightIcon} alt="separator" className="breadcrumb-separator" />}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default BreadcrumbTrail;
