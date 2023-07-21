import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    loading: false,
    error: null,
    products: [],
    product: null,
    reviewSend: false,
    productUpdate: false,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setProducts: (state, { payload }) => {
            state.loading = false;
            state.error = null;
            state.products = payload;
        },
        setProduct: (state, { payload }) => {
            state.loading = false;
            state.error = null;
            state.product = payload;
        },
        setError: (state, { payload }) => {
            state.error = payload;
            state.loading = false;
        },
        productReviewed: (state) => {
            state.loading = false;
            state.error = null;
            state.reviewSend = true;
        },
        resetError: (state) => {
            state.error = null;
            state.reviewSend = false;
            state.productUpdate = false;
        },
        setProductUpdateFlag: (state) => {
            state.productUpdate = true;
            state.loading = false;
        },
        setReviewRemovalFlag: (state) => {
            state.error = null;
            state.reviewRemoval = true;
            state.loading = false;
        },
    },
});

export const {
    setLoading,
    setProducts,
    setError,
    setProduct,
    productReviewed,
    resetError,
    setProductUpdateFlag,
    setReviewRemovalFlag,
} = productsSlice.actions;
export default productsSlice.reducer;

export const productsSelector = (state) => state.products;
