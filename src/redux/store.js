import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers";
import thunk from "redux-thunk";

export const store=createStore(rootReducer,applyMiddleware(thunk))
store.subscribe(()=>{
    localStorage.setItem('state', JSON.stringify(store.getState().product.box))
})