import {Redirect} from "react-router-dom";
import {Error_NotFound} from "../error/Error_NotFound";
import React from "react";
import {LoginPage} from "../login/Login";
import {Products} from "../products/Produdcts";
import {ProductItem} from "../products/product/ProductItem";
import {EditProduct} from "../editProduct/EditProduct";

const commonRoutes = [
    {
        path: '/404',
        render: () => Error_NotFound,
        name: 'error',
        exact: false,
    },
    {
        render: () => <Redirect from={'*'} to={'/404'}/>,
        name: 'errorRoute',
        exact: false,
    },
]

export const unauthorizedRoutes = [
    {
        path: '/',
        render: () => <Redirect to={'/login'}/>,
        name: 'defaultLoginRedirectRoute',
        exact: true,
    },
    {
        path: '/login',
        render: () => <LoginPage/>,
        name: 'LoginRoute',
        exact: false,
    },
    {
        path: '/products',
        render: () => <Redirect to={'/login'}/>,
        name: 'redirectLoginProducts',
        exact: false,
    },
    {
        path:'/products/:id',
        render:() => <Redirect to={'/login'}/>,
        name:'redirectProductId',
        exact: false,
    },
    {
        path:'/edit/:id',
        render:() => <Redirect to={'/login'}/>,
        name:'redirectEditProduct',
        exact: false,
    },
    ...commonRoutes,
]

export const authorizedRoutes = [
    {
        path: '/login',
        render: () => <Redirect to={'/products'}/>,
        name: 'redirectLoginRoute',
        exact: false,
    },
    {
        path: '/',
        render: () => <Redirect to={'/products'}/>,
        name: 'defaultProfileRoute',
        exact: true,
    },
    {
        path: '/products',
        render: () => <Products/>,
        name: 'Products',
        exact: true,
    },
    {
        path: '/products/:id',
        render: () => <ProductItem/>,
        name:'item',
        exact: true,
    },
    {
        path:'/edit/:id',
        render:() => <EditProduct/>,
        name:'editProduct',
        exact: true,
    },
    ...commonRoutes,
]
