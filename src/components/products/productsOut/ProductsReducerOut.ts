import {apiProducts, ProductOutType, SortType} from "../../../DAL/api";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState: ProductOutType[] = [];

export const getProducts = createAsyncThunk(
    'productsOut/getProducts',
    async (_, {dispatch}) => {
        try {
            const res = await apiProducts.getAll();
            return {products: res}
        } catch (error) {
            console.log(error)
        }
    }
)

export const getLimitProducts = createAsyncThunk(
    'productsOut/getLimitProducts',
    async (limit: number, {dispatch}) => {
        try {
            const res = await apiProducts.getLimitProducts(limit);
            return {product: res};
        } catch (error) {
            console.log(error)
        }
    }
)

export const getSortProducts = createAsyncThunk(
    'productsOut/getSortProducts',
    async (sort: SortType, {dispatch}) => {
        try {
            const res = await apiProducts.sortProduct(sort);
            return {product:res};
        } catch (error) {
            console.log(error);
        }
    }
)

const slice = createSlice({
    name: 'productsOut',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            if (action.payload) return action.payload.products.map(prod => prod);
        })
            .addCase(getLimitProducts.fulfilled, (state, action) => {
                if (action.payload) return action.payload.product.map(prod => prod);
            })
            .addCase(getSortProducts.fulfilled, (state,action) =>{
                if (action.payload) return action.payload.product.map(prod => prod);
            })
    }
})

export const ProductsReducerOut = slice.reducer;
