import React, {FC, memo, useCallback} from 'react'
import {useAppDispatch} from "../../store/hooks";
import {authAction} from "./LoginReducer";
import style from './Login.module.scss';
import {FormLoginContainer, ValuesType} from "./FormLogin";

export interface LoginType {
    userName: string,
    password: string,
}

export const LoginPage:FC = memo(() => {

    const dispatch = useAppDispatch();

    const login = useCallback((formData: ValuesType) => {
        dispatch(authAction.login(formData));
    },[dispatch])

    return (
        <div className={style.container}>
            <FormLoginContainer onSubmit={login} initialUserName={'mor_2314'} initialPassword={'83r5^_'}/>
        </div>
    )
})


