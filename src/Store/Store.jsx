import { configureStore } from "@reduxjs/toolkit";
import CosmoReducer from './CartSlice'

const MyStore = configureStore ({
    reducer: {
        cart: CosmoReducer,
        }
})

export default MyStore