import axios from "axios";
import {LoginType} from "../components/login/Login";

interface RatingType {
    count: number,
    rate: number,
}

export interface ProductOutType extends DataProductType{
    id: number,
    rating: RatingType,
}

export interface MeProductType extends DataProductType{
    // _id?:string,
    id?: number,
}

export interface DataProductType {
    title: string,
    price: string,
    category: string,
    description: string,
    image: string,
}


export type SortType = 'desc' | 'asc'

export const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com/',
})

export const apiAuth = {
    login(data:LoginType){
        return axiosInstance.post('auth/login', {username:data.userName,password:data.password}).then(res => res.data);
    }
}

export const apiProducts = {
    getAll() {
        return axiosInstance.get<ProductOutType[]>('/products').then(response => response.data);
    },
    getOneProduct(id: number) {
        return axiosInstance.get<ProductOutType>(`/products/${id}`).then(response => response.data);
    },
    sortProduct(sort: SortType) {
        return axiosInstance.get<ProductOutType[]>(`/products?sort=${sort}`).then(response => response.data);
    },
    getLimitProducts(limit:number){
        return axiosInstance.get<ProductOutType[]>(`/products?limit=${limit}`).then(response => response.data);
    },
    addProduct(product:DataProductType){
        return axiosInstance.post<MeProductType>('/products', product).then(response => response.data);
    },
    changeProduct(id:string,product:DataProductType){
        return axiosInstance.put(`/products/${id}`,{...product}).then(response => response.data);
    },
    delete(id:string){
        return axiosInstance.delete(`/products/${id}`).then(response => response.data);
    }
}
