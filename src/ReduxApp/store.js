 import {configureStore } from '@reduxjs/toolkit'
import counterReducer from '../ReduxFeautures/counter/counterSlice'
import productListReducer from '../ReduxFeautures/counter/productListSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        productList: productListReducer
    }
 })
 

