import {apiProducts, DataProductType, MeProductType} from "../../../DAL/api";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: MeProductType[] = [];

export const addProductMe = createAsyncThunk(
    'productsMe/addProductMe',
    async (product: DataProductType, {dispatch}) => {
        try {
            const res = await apiProducts.addProduct(product);
            dispatch(addProduct({...res}));
        } catch (error) {
            console.log(error)
        }
    }
)

export const changeProductMe = createAsyncThunk(
    'productMe/changeProduct',
    async (param: { product: DataProductType, id: string }, {dispatch}) => {
        try {
            const res = await apiProducts.changeProduct(param.id, param.product);
            dispatch(changeProduct({...res}))
        } catch (error) {
            console.log(error)
        }
    }
)

export const deleteProductMe = createAsyncThunk(
    'productMe/deleteProduct',
    async (id: string, {dispatch}) => {
        try {
            const res = await apiProducts.delete(id);
            console.log(res)
            // dispatch(deleteProduct({...res}))
        } catch (error) {
            console.log(error)
        }
    }
)

const slice = createSlice({
    name: 'productsMe',
    initialState,
    reducers: {
        setMeProducts(state, action: PayloadAction<MeProductType[]>) {
            return action.payload.map(prod => prod)
        },
        addProduct(state, action: PayloadAction<MeProductType>) {
            state.push(action.payload);
            localStorage.setItem('meProduct', JSON.stringify(state));
        },
        changeProduct(state, action: PayloadAction<MeProductType>) {
            state.filter(p => p.id === action.payload.id ? action.payload : p);
            localStorage.setItem('meProduct', JSON.stringify(state));
        },
        deleteProduct(state, action: PayloadAction<MeProductType>) {
            const index = state.findIndex(pr => pr.id === action.payload.id);
            if (index > -1) {
                state.splice(index,1);
            }
        }
    }
})

export const {setMeProducts, addProduct, changeProduct, deleteProduct} = slice.actions;
export const ProductsReducerMe = slice.reducer;
