import productImg from "../../assets/product-image-test.png";
import "./flash-products.css";
import { useState, useEffect } from "react";
import { OrbitProgress } from "react-loading-indicators";
function FlashProducts() {
    const [allProducts, setAllProducts] = useState([]);
    const getAllProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=200`)

        const data = await res.json();

        setAllProducts(data.products);
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    const smartphones = allProducts.filter((product) => product.category == "smartphones").sort((a, b) => b.price - a.price).slice(0, 3);
    const laptops = allProducts.filter((product) => product.category == "laptops").sort((a, b) => b.price - a.price).slice(0, 3);
    const tablets = allProducts.filter((product) => product.category == "tablets").sort((a, b) => b.price - a.price).slice(0, 3);
    const mobileaccessories = allProducts.filter((product) => product.category == "mobile-accessories").sort((a, b) => b.price - a.price).slice(0, 3);

    const flashSaleProducts = [...smartphones.slice(0, 1), ...laptops.slice(0, 1), ...tablets.slice(0, 1)];
    const bestSellersProducts = [...laptops.slice(1, 2), ...tablets.slice(1, 2), ...smartphones.slice(1, 2),];
    const topRatedProducts = [...smartphones.slice(2, 3), ...mobileaccessories.slice(0, 1), ...tablets.slice(2, 3)];
    const newArrivalProducts = [...laptops.slice(2, 3), ...smartphones.slice(2, 3), ...mobileaccessories.slice(1, 2)];

    return (
        <section className="all-products-section w-full h-full mb-[72px]">
            {allProducts.length === 0 ?
                <div className="col-loading w-full min-h-[400px] flex justify-center items-center">
                    <OrbitProgress color="#FA8232" size="medium" text="" textColor="" />
                </div>
                :
                <div className="container min-w-[100%] h-full flex gap-6">
                    <div className="flash-sale-products">
                        <h1 className="mb-4 font-sans text-base font-semibold text-gray900">FLASH SALE TODAY</h1>
                        <div className="flex flex-col gap-4 all-products">
                            {flashSaleProducts.map((product, index) => {
                                return (
                                    <div className="flex items-center justify-center w-full gap-3 cursor-pointer col-product" key={product.id}>
                                        <div className="col-image w-[120px] h-[120px]">
                                            <img src={product.images[0]} alt="img-product" className="object-contain w-full h-full" />
                                        </div>
                                        <div className="flex flex-col gap-2 col-information">
                                            <p className="text-sm text-gray900">{product.description.slice(0, 40)}...</p>
                                            <span className="text-sm font-semibold price-product text-secondary500">₹ {product.price}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="BEST-SELLERS-products">
                        <h1 className="mb-4 font-sans text-base font-semibold text-gray900">BEST SELLERS</h1>
                        <div className="flex flex-col gap-4 all-products">
                            {bestSellersProducts.map((product, index) => {
                                return (
                                    <div className="flex items-center justify-center w-full gap-3 cursor-pointer col-product" key={product.id}>
                                        <div className="col-image w-[120px] h-[120px]">
                                            <img src={product.images[0]} alt="img-product" className="object-contain w-full h-full" />
                                        </div>
                                        <div className="flex flex-col gap-2 col-information">
                                            <p className="text-sm text-gray900">{product.description.slice(0, 40)}...</p>
                                            <span className="text-sm font-semibold price-product text-secondary500">₹ {product.price}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="TOP-RATED-products">
                        <h1 className="mb-4 font-sans text-base font-semibold text-gray900">TOP RATED</h1>
                        <div className="flex flex-col gap-4 all-products">
                            {topRatedProducts.map((product, index) => {
                                return (
                                    <div className="flex items-center justify-center w-full gap-3 cursor-pointer col-product" key={product.id}>
                                        <div className="col-image w-[120px] h-[120px]">
                                            <img src={product.images[0]} alt="img-product" className="object-contain w-full h-full" />
                                        </div>
                                        <div className="flex flex-col gap-2 col-information">
                                            <p className="text-sm text-gray900">{product.description.slice(0, 40)}...</p>
                                            <span className="text-sm font-semibold price-product text-secondary500">₹ {product.price}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="NEW-ARRIVAL-products">
                        <h1 className="mb-4 font-sans text-base font-semibold text-gray900">NEW ARRIVAL</h1>
                        <div className="flex flex-col gap-4 all-products">
                            {newArrivalProducts.map((product, index) => {
                                return (
                                    <div className="flex items-center justify-center w-full gap-3 cursor-pointer col-product" key={product.id}>
                                        <div className="col-image w-[120px] h-[120px]">
                                            <img src={product.images[0]} alt="img-product" className="object-contain w-full h-full" />
                                        </div>
                                        <div className="flex flex-col gap-2 col-information">
                                            <p className="text-sm text-gray900">{product.description.slice(0, 40)}...</p>
                                            <span className="text-sm font-semibold price-product text-secondary500">₹ {product.price}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}
export default FlashProducts;