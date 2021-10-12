import React, {FC, memo, useCallback} from 'react'
import style from './EditProduct.module.scss';
import {useHistory, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {FormContainer} from "../common/modal/form/FormModal";
import {DataProductType} from "../../DAL/api";
import {changeProductMe, deleteProductMe} from "../products/productsMe/ProductsReducerMe";
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export const EditProduct: FC = memo(() => {

    const {id} = useParams<{ id: string }>()
    const history = useHistory();
    const products = useAppSelector(state => state.productsOut);
    const dispatch = useAppDispatch();

    const prod = products.filter(p => p.id === +id ? p : '');

    const updateProduct = useCallback((formData: DataProductType) => {
        dispatch(changeProductMe({id: id, product: formData}));
        history.push('/products');
    }, [dispatch, id,history])

    const deleteProd = useCallback(() => {
        dispatch(deleteProductMe(id));
        history.push('/products');
    },[dispatch,history,id])

    return (
        <div className={style.container}>
            <FormContainer onSubmit={updateProduct}
                           initTitle={prod[0].title}
                           initCategory={prod[0].category}
                           initPrice={prod[0].price}
                           initDescription={prod[0].description}
                           initImage={prod[0].image}
            />
            <IconButton className={style.del} onClick={() => deleteProd()}>
                <DeleteIcon/>
            </IconButton>
        </div>
    )
})
