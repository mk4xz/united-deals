import { FaStar } from "react-icons/fa6";
import { useState,useEffect } from "react";
import { OrbitProgress } from "react-loading-indicators";
function FrequentlyProducts() {
    const [products,setProducts] = useState([]);
    const getAllProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=200`)

        const data = await res.json();

        setProducts(data.products);
    }

    useEffect(() => {
        getAllProducts();
    },[])

    console.log(products);

    const electroProducts = products.filter(product => ["laptops","smartphones","electronics"]
        .some(category => 
            product.tags.includes(category)
        )
    );

    const sortElectroProducts = electroProducts.sort((a,b) => b.price - a.price).slice(0,12);
    console.log(sortElectroProducts);
   
    return(
        <section className="frequently-products w-full h-full mb-[72px]">
            <div className="container min-w-[100%] h-full">
                <div className="col-heading w-full flex justify-between items-center">
                    <h2 className="text-[26px] text-black uppercase font-bold">frequently bought together</h2>
                    <button className="w-[117px] h-[43px] bg-starColor rounded-lg text-[14px] text-black font-medium">VIEW ALL</button>
                </div>
                <div className="all-frequently-products w-full flex gap-[14px] mt-5 mb-5 flex-wrap">
                    {sortElectroProducts.length === 0 ? 
                        <div className="col-loading w-full min-h-[400px] flex justify-center items-center">
                            <OrbitProgress color="#FA8232" size="medium" text="" textColor="" />
                        </div>
                        :
                        <>
                            {sortElectroProducts.map((product,index) => {
                                return(
                                    <div className="col-product w-[290px]" key={product.id}>
                                        <div className="col-img-product w-[290px] h-[270px] rounded-[25px] bg-bgproductImg flex justify-center items-center mb-2">
                                            <img src={product.images[0]} alt="product-img" />
                                        </div>
                                        <div className="information-product flex flex-col gap-2">
                                            <h2 className="text-[20px] text-darkgray font-semibold">{product.title}</h2>
                                            <div className="col-rating flex gap-[5px] items-center">
                                                <div className="all-stars flex items-center gap-[2px]">
                                                    <FaStar className="text-starColor"/>
                                                    <FaStar className="text-starColor"/>
                                                    <FaStar className="text-starColor"/>
                                                    <FaStar className="text-starColor"/>
                                                    <FaStar className="text-starColor"/>
                                                    <p className="rate-p text-[13px] text-gray900 font-semibold">{product.rating}</p>
                                                </div>
                                                <div className="rating text-[13px]  text-gray600">
                                                    (21,671 Ratings)
                                                </div>
                                            </div>
                                            <div className="col-buy-now w-full h-[44px] flex justify-center items-center bg-darkgray rounded-lg cursor-pointer mt-2">
                                                <p className="text-[13px] text-whiteColor font-semibold tracking-[0.5px]">BUY NOW-</p>
                                                <span className="price-product text-[13px] text-buycolor font-semibold tracking-[0.5px]">{`₹${product.price}`}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    }
                </div>
            </div>
        </section>
    )
}
export default FrequentlyProducts;
