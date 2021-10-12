import React, {FC, memo} from 'react';
import style from './App.module.scss';
import {useAppSelector} from "../../store/hooks";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {authorizedRoutes, unauthorizedRoutes} from "../routes/Routes";
import {Header} from "../header/Header";

export const App:FC = memo(() => {
    const isAuth = useAppSelector(state => state.auth.isAuth);

    if (!isAuth) {
        return (
            <div className={style.page}>
                <BrowserRouter>
                    <Switch>
                        {unauthorizedRoutes.map((route) => (
                            <Route key={route.name} {...route} />
                        ))}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }

    return (
        <div className={style.page}>
            <BrowserRouter>
                <Header/>
                <Switch>
                    {authorizedRoutes.map((route) => (
                        <Route key={route.name} {...route} />
                    ))}
                </Switch>
            </BrowserRouter>
        </div>
    );
})
