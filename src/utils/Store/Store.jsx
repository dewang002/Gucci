import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from './Slice/addToCartSlice'
import menShoesReducer from './Slice/menShoesSlice'
export const store = configureStore({
    reducer:{
        menshoes:menShoesReducer,
        cart:addToCartReducer,
    },
})