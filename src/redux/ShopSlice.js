import { createSlice } from "@reduxjs/toolkit"; // 1. Bu qator shart!

const initialState = {
    cart: [],
    favorites: [], 
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const exists = state.cart.find(item => item.id === action.payload.id);
            if (!exists) {
                state.cart.push(action.payload);
            } else {
                console.log("Bu mahsulot savatchada bor");
            }
        },
        toggleFavorite: (state, action) => {
            const index = state.favorites.findIndex(item => item.id === action.payload.id);
            if (index >= 0) {
                state.favorites.splice(index, 1);
            } else {
                state.favorites.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        }
    }
});

export const { addToCart, toggleFavorite, removeFromCart } = shopSlice.actions;
export default shopSlice.reducer;



