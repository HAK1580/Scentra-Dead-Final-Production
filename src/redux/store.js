import { configureStore } from '@reduxjs/toolkit'
import uireducer from "./ui_states/uiSlice"
import cartReducer from "./cart/cartSlice"
import ProductReducer from './products/productSlice'

// Load cart from localStorage if it exists
const savedCart = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : undefined

export const store = configureStore({
  reducer: {
    ui: uireducer,
    cart: cartReducer,
    products: ProductReducer,
  },
  preloadedState: {
    cart: savedCart ? { items: savedCart.items } : undefined,
  },
})

// Subscribe to store changes to save cart to localStorage
store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('cart', JSON.stringify(state.cart))
})
