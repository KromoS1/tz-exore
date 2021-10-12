import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import {authReducer} from "../components/login/LoginReducer";
import {ProductsReducerOut} from "../components/products/productsOut/ProductsReducerOut";
import {ProductsReducerMe} from "../components/products/productsMe/ProductsReducerMe";
import {ModalReducer} from "../components/common/modal/ModalReducer";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        productsOut: ProductsReducerOut,
        productsMe: ProductsReducerMe,
        modal: ModalReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
});

export type StateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
