import React, {FC, memo} from 'react'
import {Button} from "@mui/material";
import {ProductOutType} from "../../../DAL/api";

type PropsType = {
    products: ProductOutType[]
    sort: number
    limit: (limit: number) => void
}

export const ButtonSort: FC<PropsType> = memo(props => {
    return (
        <>
            <Button onClick={() => props.limit(props.sort)}
                    variant={props.products.length === props.sort ? 'contained' : 'outlined'}>
                {props.sort}
            </Button>
        </>
    )
})
