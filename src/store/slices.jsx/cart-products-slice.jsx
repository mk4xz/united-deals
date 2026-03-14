import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: JSON.parse(localStorage.getItem("cart-products")) || [],
}

const cartProductsSlice = createSlice({
    name: "cart-products",
    initialState,
    reducers: {
        addToCart: (state,action) => {
            const product = action.payload

            const exist = state.cartProducts.find(item => item.id == product.id);

            if (exist) return;

            state.cartProducts.push({
                ...product,
                quantity: 1
            });

            localStorage.setItem("cart-products", JSON.stringify(state.cartProducts));
        },
        removeProduct: (state,action) => {
            state.cartProducts = state.cartProducts.filter(
                (item) => item.id !== action.payload
            )
            localStorage.setItem("cart-products", JSON.stringify(state.cartProducts));
        },
        increaseQuantity: (state,action) => {
            const product = state.cartProducts.find(product => product.id === action.payload);

            if (product) {
                product.quantity += 1
            }
        },
        decreaseQuantity: (state,action) => {
            const product = state.cartProducts.find(product => product.id === action.payload);

            if (product.quantity > 1){
                product.quantity -= 1;
            }
        }
    }
})

export const { addToCart,removeProduct,increaseQuantity,decreaseQuantity } = cartProductsSlice.actions;

export default cartProductsSlice.reducer;