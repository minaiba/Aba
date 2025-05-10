
import { createSlice } from '@reduxjs/toolkit';

const CosmoSlice = createSlice({
  name: 'Cosmo',
  initialState: {
    cartItems: [],
  },
  reducers: {
      setActiveSlide: (state, action) => {
          state.activeSlide = action.payload;
      },
      increment: (state, action) => {
        const product = state.cartItems.find((item) => item.id === action.payload.id);
        if (product) product.quantity += 1;
      },
      decrement: (state, action) => {
        const product = state.cartItems.find((item) => item.id === action.payload.id);
        if (product && product.quantity > 1) product.quantity -= 1;
      },
      addToCart: (state, action) => {
        const existingProduct = state.cartItems.find(item => item.id === action.payload.id);
        if (existingProduct) {
          existingProduct.quantity += 1; 
        } else {
          state.cartItems.push({ ...action.payload, quantity: 1 }); 
        }
      },
      removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
      },
  },
});

export const { setActiveSlide, addToCart, decrement, increment, removeFromCart} = CosmoSlice.actions;

export default CosmoSlice.reducer;
