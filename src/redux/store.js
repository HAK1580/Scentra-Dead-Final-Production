import { configureStore } from '@reduxjs/toolkit'
import uireducer from "./ui_states/uiSlice"
import cartReducer from "./cart/cartSlice"
import ProductReducer, { productSlice } from './products/productSlice'

export const store = configureStore({
  reducer: {
    ui:uireducer,
    cart:cartReducer,
    products:ProductReducer,
  },
})