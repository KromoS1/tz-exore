import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginType} from "./Login";
import {apiAuth} from "../../DAL/api";

export interface IsAuthType {
    isAuth: boolean,
    meProd:boolean,
}

const initialState: IsAuthType = {
    isAuth: false,
    meProd:false,
}

export const login = createAsyncThunk(
    'auth/login',
    async (data: LoginType, {dispatch}) => {
        try {
            await apiAuth.login({userName:data.userName,password:data.password}).then(res => {
                return
            })
        } catch (err) {
            console.log(err)
        }
    }
)

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setMeProd:(state,action:PayloadAction<{meProd:boolean}>) => {
            state.meProd = action.payload.meProd;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled,
                (state) => {
                    state.isAuth = true;
                })
    }
})

export const authAction = {login};
export const {setMeProd} = slice.actions;
export const authReducer = slice.reducer;
