import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [] // each item will look like { id, title, price, image, quantity }
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload; // expect full product object
      const existing = state.items.find((p) => p.id === product.id);

      if (existing) {
        existing.quantity += 1; // increase qty if already in cart
      } else {
        state.items.push({ ...product, quantity: 1 }); // add new with qty 1
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const existing = state.items.find((p) => p.id === id);

      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1; // decrease qty
        } else {
          state.items = state.items.filter((p) => p.id !== id); // remove if qty=1
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    }
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
