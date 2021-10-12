import React, {FC, memo} from 'react'
import style from './Product.module.scss';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../store/hooks";

export const ProductItem: FC = memo(() => {

    const {id} = useParams<{ id: string }>()
    const products = useAppSelector(state => state.productsOut);

    const prod = products.filter(p => p.id === +id ? p : '');

    return (
        <div className={style.container}>
            <div className={style.imgBox}>
               <img src={prod[0].image} alt="" className={style.img}/>
            </div>
            <div className={style.desc}>
                <span>Title: {prod[0].title}</span>
                <span>Price: {prod[0].price}</span>
                <span>Category: {prod[0].category}</span>
                <span>Description: {prod[0].description}</span>
                <span>Rating: {prod[0].rating.rate}</span>
            </div>
        </div>
    )
})
