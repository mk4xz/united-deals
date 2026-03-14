import { configureStore } from "@reduxjs/toolkit";
import heartSlice from "./slices.jsx/heart-slice";
import cartProductsSlice from "./slices.jsx/cart-products-slice";

const store = configureStore({
    reducer: {
        heartsProducts: heartSlice,
        cartProducts: cartProductsSlice,
    }
})

export default store;
