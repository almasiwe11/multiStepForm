import { configureStore } from "@reduxjs/toolkit"
import formSlice from "./Slices/FormSlice"

const store = configureStore({
  reducer: {
    form: formSlice,
  },
})

export default store
