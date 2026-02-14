import { createSlice } from "@reduxjs/toolkit"; // 1. Bu qator shart!

// Load initial state from localStorage
const loadInitialState = () => {
    try {
        const savedState = localStorage.getItem('shopState');
        if (savedState) {
            return JSON.parse(savedState);
        }
    } catch (error) {
        console.error('Error loading from localStorage:', error);
    }
    return {
        cart: [],
        favorites: []
    };
};

const initialState = loadInitialState();

// Helper function to save state to localStorage
const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem('shopState', JSON.stringify(state));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const exists = state.cart.find(item => item.id === action.payload.id);
            if (!exists) {
                state.cart.push({...action.payload, quantity: 1});
                saveToLocalStorage(state);
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
            saveToLocalStorage(state);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            saveToLocalStorage(state);
        },
        updateQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
                if (item.quantity <= 0) {
                    state.cart = state.cart.filter(i => i.id !== action.payload.id);
                }
                saveToLocalStorage(state);
            }
        },
        clearCart: (state) => {
            state.cart = [];
            saveToLocalStorage(state);
        },
        clearFavorites: (state) => {
            state.favorites = [];
            saveToLocalStorage(state);
        }
    }
});

export const { addToCart, toggleFavorite, removeFromCart, updateQuantity, clearCart, clearFavorites } = shopSlice.actions;
export default shopSlice.reducer;