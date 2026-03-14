import { FaPlus, FaMinus, FaCheck } from "react-icons/fa6";
import deleteIcon from "../../assets/trash.svg";
import IconShopSummary from "../../assets/Icon-shop-summary.svg";
import { useSelector,useDispatch } from "react-redux";
import { removeProduct,increaseQuantity,decreaseQuantity } from "../../store/slices.jsx/cart-products-slice";
function CartProducts() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.cartProducts.cartProducts);

    const totalPrice = state.reduce((total,product) => {
        return total + (product.price * product.quantity) - 47.10;
    },0)
    .toFixed(2);

    return (
        <section className="w-full h-full cart-products mb-[72px]">
            <div className="container min-w-[100%] h-full flex justify-between flex-wrap">
                <div className="all-products-cart">
                    <div className="col-number-items flex items-center gap-[5px] mb-[33px]">
                        <h2 className="text-xl font-bold text-textcolorPrimary">Number of Items</h2>
                        <span className="text-lg number-items text-textcolorLight">{state.length}</span>
                    </div>
                    <div className="all-products flex flex-col gap-[25px] min-w-full">
                        {state.map((product,index) => {
                            return(
                                <div className="flex  col-product items-center min-w-[600px] justify-between" key={product.id}>
                                    <div className="flex items-center gap-4 image-title-product">
                                        <div className="image-product min-w-[90px] h-[72px] shadow-lg p-[2px] rounded-[10px] border-[1px] border-textColor flex justify-center items-center bg-slate-50">
                                            <img src={product.images[0]} alt="img-product" className="object-contain w-full h-full" />
                                        </div>
                                        <h2 className="text-[15px] font-bold text-textcolorPrimary">{product.title.slice(0,8)}</h2>
                                    </div>
                                    <span className="price-product text-[15px] text-colorPrice">{`₹${product.price}`}</span>
                                    <div className="flex items-center col-quantity w-[105px] h-[42px] pt-[10px] pb-[10px] pl-[16px] pr-[16px] border-[1px] border-textColor rounded-[4px] gap-[10px] justify-center">
                                        <FaMinus className="transition-colors duration-500 cursor-pointer hover:text-textcolorLight"
                                            onClick={() => {
                                                dispatch(decreaseQuantity(product.id))
                                            }}
                                        />
                                        <span className="number-quantity text-[15px] text-textcolorPrimary">{product.quantity}</span>
                                        <FaPlus className="transition-colors duration-500 cursor-pointer hover:text-textcolorLight"
                                            onClick={() => {
                                                dispatch(increaseQuantity(product.id))
                                            }}
                                        />
                                    </div>
                                    <span className="total-price-product text-[15px] text-colorPrice">{`₹${(product.price * product.quantity).toFixed(2)}`}</span>
                                    <div className="cursor-pointer delete-product"
                                        onClick={() => {
                                            dispatch(removeProduct(product.id))
                                        }}
                                    >
                                        <img src={deleteIcon} alt="delete-icon" />
                                    </div>
                                </div>
                           )
                        })}
                    </div>
                </div>
                <div className="shadow-sm order-summary bg-bgSummary w-[309px] h-[365px] pt-5 pb-5 pl-10 pr-10 rounded-lg flex flex-col gap-7">
                    <h2 className="text-base font-bold text-textcolorPrimary">Order Summary</h2>
                    <div className="flex flex-col w-full gap-3 content-information-order">
                        <div className="flex items-center justify-between w-full h-full col-price">
                            <p className="text-sm font-medium text-colorPrice">Price</p>
                            <span className="text-sm font-medium text-colorPrice">₹99.23</span>
                        </div>
                        <div className="flex items-center justify-between w-full h-full col-shipping">
                            <p className="text-sm font-medium text-colorPrice">Shipping</p>
                            <span className="text-sm font-medium text-colorPrice">₹0</span>
                        </div>
                        <div className="flex items-center justify-between w-full h-full col-tax">
                            <p className="text-sm font-medium text-colorPrice">Tax</p>
                            <span className="text-sm font-medium text-colorPrice">₹0</span>
                        </div>
                        <div className="flex items-center justify-between w-full h-full col-discount-price">
                            <p className="text-sm font-medium text-colorPrice">Discount price</p>
                            <span className="text-sm font-medium text-colorPrice">₹47.10</span>
                        </div>
                        <div className="flex items-center justify-between w-full h-full col-gift-box">
                            <div className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-5 h-5 col-checkbox bg-bgshopnow">
                                    <FaCheck className="text-white" />
                                </span>
                                <p className="text-sm font-medium text-colorPrice">Pack in a Gift Box</p>
                            </div>
                            <span className="text-sm font-medium text-colorPrice">₹10.90</span>
                        </div>
                        <div className="flex items-center justify-between w-full h-full pt-2 border-t-2 col-total-price border-textColor">
                            <p className="text-sm font-bold text-textcolorPrimary">Total Price</p>
                            <span className="text-sm font-bold text-textcolorPrimary">{`₹${totalPrice}`}</span>
                        </div>
                    </div>
                    <button className="shop-now w-full h-[52px] bg-bgshopnow pt-4 pb-4 pl-8 pr-8 rounded-lg flex justify-center items-center gap-2">
                        <img src={IconShopSummary} alt="icon-shop" />
                        <span className="text-sm font-medium text-white">Shop now</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default CartProducts;  