import { configureStore } from '@reduxjs/toolkit'
import uireducer from "./ui_states/uiSlice"

export const store = configureStore({
  reducer: {
    ui:uireducer
  },
})