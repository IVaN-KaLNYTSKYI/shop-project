import {ADD_BOX, REMOVE_BOX, RESET_LOADING, SET_LOADING, SET_PRODUCT} from "../actionTypes";


export const fetchProduct =()=> async (dispatch) => {
    try {
        dispatch(setLOADING())

        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        console.log(data)

        dispatch(setPRODUCT(data))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(resetLOADING())
    }

}

export const setPRODUCT=(payload)=>({type:SET_PRODUCT,payload})
export const setLOADING=()=>({type:SET_LOADING})
export const resetLOADING=()=>({type:RESET_LOADING})
export const removeBOX=(payload)=>({type:REMOVE_BOX,payload})
export const addBOX=(payload)=>({type:ADD_BOX,payload})