import Header from "../components/header";
import NavLinksProduct from "../components/product-page-content/nav-links-product";
import ProductInformation from "../components/product-page-content/product-information";
import FrequentlyProducts from "../components/product-page-content/frequently-products";
function ProductPage() {
    return(
        <>
            <Header/>          
            <div className="product-page-content page-offset">
                <NavLinksProduct/>
                <ProductInformation/>
                <FrequentlyProducts/>
            </div>
        </>
    )
}
export default ProductPage;
