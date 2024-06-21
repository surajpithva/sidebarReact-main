import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// View All Product
export const AllProduct = createAsyncThunk(
    "user/AllProduct",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`https://crudnext.onrender.com/api/products`);
        console.log(response, "response");
        return response?.data.result // return the data directly
      } catch (error) {
        // Provide a custom error message or pass the error object directly
        return rejectWithValue(error.response ? error.response.data : error.message);
      }
    }
  );

//   Delete Perticular Product
  export const deleteProducts = createAsyncThunk(
    "user/deleteProduct",
    async (_id) => {
      console.log(_id, "id in blahh");
      try {
        const response = await axios.delete(`https://crudnext.onrender.com/api/products/${_id}`);
        console.log(response, "response for delete data");
        return response.data; // return the data directly
      } catch (error) {
        throw error;
      }
    }
  );
  




// View Product Slice
  const productSlice = createSlice({
    name: "allProducts",
    initialState:{
        products: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(AllProduct.pending, (state) => {
          state.loading = true;
          state.products = null;
          state.error = null;
        })
        .addCase(AllProduct.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload;
        })
        .addCase(AllProduct.rejected, (state, action) => {
          state.loading = false;
          state.products = null;
          state.error = action.payload || "Something went wrong";
        });
    },
  });




//   Delete product slice 
const deleteproductSlice = createSlice({
    name: "allProducts",
    initialState: {
      deleteProd: null,
      deleteLoading: false,
      deleteError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(deleteProducts.pending, (state) => {
          state.deleteLoading = true;
          state.deleteProd = null;
          state.deleteError = null;
        })
        .addCase(deleteProducts.fulfilled, (state, action) => {
          state.deleteLoading = false;
          state.deleteProd = action.payload;
        })
        .addCase(deleteProducts.rejected, (state, action) => {
          state.deleteLoading = false;
          state.deleteProd = null;
          state.deleteError = action.error.message || "Something went wrong";
        });
    },
  });
export const deleteProductSliceReducer = deleteproductSlice.reducer
export const productSliceSliceReducer = productSlice.reducer







  
//  export default productSlice.reducer;
