import {Dispatch} from "redux";
import {shows} from "../components/common/modal/ModalReducer";

export const showModal = (show:boolean,dispatch:Dispatch) => {
    dispatch(shows({modalShow:show}));
}
