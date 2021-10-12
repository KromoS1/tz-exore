import style from './ButtonsBar.module.scss';
import {Button, ButtonGroup, Switch} from "@mui/material";
import {ButtonSort} from "./ButtonSort";
import React, {FC, memo, useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {getLimitProducts} from "../../products/productsOut/ProductsReducerOut";
import {setMeProd} from "../../login/LoginReducer";
import {showModal} from "../../../utils/utils";

export const ButtonsBar:FC = memo(() => {

    const productsOut = useAppSelector(state => state.productsOut);
    const meProd = useAppSelector(state => state.auth.meProd);
    const dispatch = useAppDispatch();

    const redirectPageMeProd = useCallback(() => {
        dispatch(setMeProd({meProd:!meProd}));
    },[dispatch,meProd]);

    const clickLimit = useCallback((limit: number) => {
        dispatch(getLimitProducts(limit));
    }, [dispatch]);

    return (
        <div className={style.container}>
            <ButtonGroup size="medium" aria-label="small button group">
                <ButtonSort sort={8} products={productsOut} limit={clickLimit}/>
                <ButtonSort sort={16} products={productsOut} limit={clickLimit}/>
                <ButtonSort sort={20} products={productsOut} limit={clickLimit}/>
            </ButtonGroup>
            <div>
                <Button onClick={() => showModal(true,dispatch)}>Add Product</Button>
            </div>
            <div>
                Out <Switch defaultChecked={false} color={'secondary'} onChange={() => redirectPageMeProd()}/> Me
            </div>
        </div>
    )
})
