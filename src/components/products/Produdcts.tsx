import React, {FC, memo, useEffect} from 'react'
import style from './Products.module.scss';
import {getLimitProducts} from "./productsOut/ProductsReducerOut";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {ProductsOutPage} from "./productsOut/ProductsOutPage";
import {ProductsMePage} from "./productsMe/ProductsMePage";
import {ButtonsBar} from "../common/ButtonsBar/ButtonsBar";
import {ModalProduct} from "../common/modal/ModalProduct";

export const Products: FC = memo(() => {

    const meProd = useAppSelector(state => state.auth.meProd);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getLimitProducts(8));
    }, [dispatch])

    return (
        <div className={style.container}>
            <ButtonsBar/>
            <ModalProduct/>
            <>
                {meProd
                    ? <ProductsMePage/>
                    : <ProductsOutPage/>
                }
            </>
        </div>
    )
})


