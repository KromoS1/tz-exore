import React, {FC, memo} from 'react'
import {Card, CardContent, IconButton, Typography} from "@mui/material";
import style from './ComponentProdForTab.module.scss';
import {NavLink} from "react-router-dom";
import {MeProductType, ProductOutType} from "../../../DAL/api";
import BorderColorIcon from '@mui/icons-material/BorderColor';

interface PropsType {
    products:MeProductType[] | ProductOutType[]
}

export const ComponentProductsForTab:FC<PropsType> = memo(props => {

    const products = props.products.map(prod => {
        return (
            <Card className={style.card} key={prod.id}>
                <CardContent className={style.content}>
                    <div className={style.cardHeader}>
                        <NavLink to={`/products/${prod.id}`} className={style.link}>
                            <Typography>{
                                prod.title.length > 30 ? prod.title.slice(0, 30) + "..." : prod.title
                            }</Typography>
                        </NavLink>
                        <IconButton>
                            <NavLink to={`/edit/${prod.id}`} className={style.link}>
                                <BorderColorIcon/>
                            </NavLink>
                        </IconButton>
                    </div>
                    {prod.image && <img src={prod.image} className={style.img} alt=""/>}
                    <Typography>{prod.price}$</Typography>
                </CardContent>
            </Card>
        )
    })

    return (
        <>
            {products}
        </>
    )
})
