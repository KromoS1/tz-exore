import style from "../Products.module.scss";
import {Paper} from "@mui/material";
import React, {FC, memo} from "react";
import {useAppSelector} from "../../../store/hooks";
import {ComponentProductsForTab} from "../../common/componentForTab/ComponentProductsForTab";

export const ProductsOutPage:FC = memo(() => {

    const productsOut = useAppSelector(state => state.productsOut);

    return (
        <>
            <Paper elevation={10} className={style.paper}>
                <ComponentProductsForTab products={productsOut}/>
            </Paper>
        </>
    )
})
