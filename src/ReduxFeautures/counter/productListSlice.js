import {
  createAsyncThunk,
  createSlice,
  prepareAutoBatched,
} from "@reduxjs/toolkit";
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "./ProductConstants";
import axios from "axios";

const initialState = {
  loading: false,
  productListArray: [],
  error: null,
};

export const fetchProductsList = createAsyncThunk("productList", async () => {
  return await axios
    .get("http://localhost:5000/api/products")
    .then((response) => response.data);
});

export const productListSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    extraReducers: (builder) => {
      builder
        .addcase(fetchProductsList.pending, (state) => {
          state.loading = true;
        })
        .addcase(fetchProductsList.fulfilled, (state, action) => {
          state.loading = false;
          state.productListArray = action.payload;
          state.error = null;
        })
        .addcase(fetchProductsList.rejected, (state, action) => {
          state.loading = false;
          state.productListArray = [];
          state.error = action.error.message;
        });
    },
  },
});
export default productListSlice.reducer;

// reducers: {
//   extraReducers: (builder) => {
//     builder.addcase(fetchProductsList.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addcase(fetchProductsList.fulfilled, (state, action) => {
//       state.loading = false;
//       state.productListArray = action.payload;
//       state.error = null;
//     });
//     builder.addcase(fetchProductsList.rejected, (state, action) => {
//       state.loading = false;
//       state.productListArray = [];
//       state.error = action.error.message;
//     });
//   }
// },
