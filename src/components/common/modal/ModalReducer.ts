import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    modalShow:false
}

const slice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        shows:(state,action:PayloadAction<{modalShow:boolean}>) => {
            state.modalShow = action.payload.modalShow;
        },
    }
})

export const {shows} = slice.actions;
export const ModalReducer = slice.reducer;
