import { configureStore } from "@reduxjs/toolkit";
import {productSliceSliceReducer} from "./crudSlice"
import { deleteProductSliceReducer } from "./crudSlice"


const store = configureStore({
  reducer: {
    allProducts: productSliceSliceReducer,  
    deleteProduct : deleteProductSliceReducer    
  },
});

export default store;