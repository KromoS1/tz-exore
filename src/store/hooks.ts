import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, StateType} from "./store";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
