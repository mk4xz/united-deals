import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    heartsProducts: JSON.parse(localStorage.getItem("hearts")) || [],
}

const heartSlice = createSlice({  
    name: "Heart-Slice",    
    initialState,
    reducers: {
        addHeartProduct: (state,action) => {
            const product = action.payload;

            const exists = state.heartsProducts.find(item => item.id === product.id);

            if (exists) return ;
 
            state.heartsProducts.push(product);

            localStorage.setItem("hearts", JSON.stringify(state.heartsProducts));
        }
    }
})
export const { addHeartProduct } = heartSlice.actions;
export default heartSlice.reducer;