import React, {FC, memo, useEffect} from "react";
import style from './ProductsMePage.module.scss';
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {Paper} from "@mui/material";
import {ComponentProductsForTab} from "../../common/componentForTab/ComponentProductsForTab";
import {setMeProducts} from "./ProductsReducerMe";

export const ProductsMePage:FC = memo(() => {
    const productMe = useAppSelector(state => state.productsMe);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const prods = localStorage.getItem('meProduct');
        if (typeof prods !== 'undefined' && prods !== null){
            dispatch(setMeProducts(JSON.parse(prods)));
        }
    },[dispatch])

    return (
        <>
            <Paper elevation={10} className={style.paper}>
                <ComponentProductsForTab products={productMe}/>
            </Paper>
        </>
    )
})
