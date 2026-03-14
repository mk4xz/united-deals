import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import nikeShoes from "../../assets/image-51.png";
import iqooPhone from "../../assets/iqoo.png";
import redmiPhone from "../../assets/redmi.png";
import pocoPhone from "../../assets/poco.png";
import bikeImage from "../../assets/moped.png";
import xperiaPhone from "../../assets/Image-product7.png";
import "./banner.css";

const bannerSlides = [
  {
    id: 1,
    eyebrow: "Best Deal Online on smart watches",
    title: "LATEST NIKE SHOES",
    subtitle: "UP to 80% OFF",
    image: nikeShoes,
  },
  {
    id: 2,
    eyebrow: "Flash Deal on top mobiles",
    title: "IQOO Z6 LITE 5G",
    subtitle: "Sale price starts now",
    image: iqooPhone,
  },
  {
    id: 3,
    eyebrow: "Bestseller in electronics",
    title: "REDMI 13C SERIES",
    subtitle: "Hot pick this week",
    image: redmiPhone,
  },
  {
    id: 4,
    eyebrow: "Latest gadgets online",
    title: "POCO M6 PRO 5G",
    subtitle: "Limited stock sale",
    image: pocoPhone,
  },
  {
    id: 5,
    eyebrow: "Top value rides",
    title: "ELECTRIC CITY BIKE",
    subtitle: "New arrival deal",
    image: bikeImage,
  },
  {
    id: 6,
    eyebrow: "Premium smartphone offer",
    title: "XPERIA 5G PHONE",
    subtitle: "Today only discount",
    image: xperiaPhone,
  },
];

function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bannerSlides.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const showPrevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const showNextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % bannerSlides.length);
  };

  return (
    <section className="home-banner">
      <div className="container">
        <div className="home-banner__carousel">
          <button type="button" className="home-banner__arrow home-banner__arrow--left" onClick={showPrevSlide}>
            <FiChevronLeft />
          </button>

          <div className="home-banner__slides">
            {bannerSlides.map((slide, index) => (
              <article
                key={slide.id}
                className={`home-banner__slide ${index === activeIndex ? "is-active" : ""}`}
                aria-hidden={index !== activeIndex}
              >
                <div className="home-banner__decor home-banner__decor--top" />
                <div className="home-banner__decor home-banner__decor--bottom" />
                <div className="home-banner__text">
                  <p>{slide.eyebrow}</p>
                  <h2>{slide.title}</h2>
                  <h3>{slide.subtitle}</h3>
                </div>
                <div className="home-banner__image-wrap">
                  <img src={slide.image} alt={slide.title} />
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="home-banner__arrow home-banner__arrow--right"
            onClick={showNextSlide}
          >
            <FiChevronRight />
          </button>

          <div className="home-banner__dots">
            {bannerSlides.map((slide, index) => (
              <button
                type="button"
                key={`dot-${slide.id}`}
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => setActiveIndex(index)}
                aria-label={`slide-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
