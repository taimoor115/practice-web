import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  products: [],
  productsDetail: {},
  status: STATUSES.IDLE,
};
const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.productsDetail = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const fetchProductById = createAsyncThunk(
  "fetch/product/id",
  async (id) => {
    console.log(id);
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  }
);

export const fetchProducts = createAsyncThunk("fetch/products", async () => {
  const response = await axios.get(`https://fakestoreapi.com/products`);
  return response.data;
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;
