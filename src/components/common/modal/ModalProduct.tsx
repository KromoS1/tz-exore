import {FC, memo, useCallback} from "react";
import {Box, Modal} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {FormContainer} from "./form/FormModal";
import {DataProductType} from "../../../DAL/api";
import {addProductMe} from "../../products/productsMe/ProductsReducerMe";
import style from './Modal.module.scss';
import {shows} from "./ModalReducer";
import {showModal} from "../../../utils/utils";

export const ModalProduct: FC = memo(() => {
    const modalShow = useAppSelector(state => state.modal.modalShow);
    const dispatch = useAppDispatch();

    const addProduct = useCallback((dataProduct: DataProductType) => {
        dispatch(addProductMe(dataProduct));
        dispatch(shows({modalShow:false}));
    }, [dispatch])

    return (
        <>
            <Modal
                open={modalShow}
                onClose={() => showModal(false, dispatch)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box className={style.box}>
                    <FormContainer onSubmit={addProduct}/>
                </Box>
            </Modal>
        </>
    )
})

