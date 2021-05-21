import {combineReducers} from "redux";
import {productReducer} from "./reducersProduct";

export * from './reducersProduct'
export const rootReducer=combineReducers({
product:productReducer
})