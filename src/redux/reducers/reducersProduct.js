import {ADD_BOX, REMOVE_BOX, RESET_LOADING, SET_LOADING, SET_PRODUCT} from "../actionTypes";

const initialState = {
    product: [],
    box:JSON.parse(localStorage.getItem("state"))||[],
    isLoading: false
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT: {
            return {
                ...state,product: action.payload
            }
        }
        case SET_LOADING:{
            return {
                ...state,isLoading: true
            }
        }
        case RESET_LOADING:{
            return {
                ...state,isLoading: false
            }
        }
        case ADD_BOX:{
            const {payload}=action
            const alerBox=state.box.find(({id})=>id===payload)
            if(alerBox){
                return state
            }
            const itemProduct=state.product.find(el=>el.id===payload)

            return {
                ...state,box: [...state.box,itemProduct]
            }
        }
        case REMOVE_BOX:{
            const {payload}=action
            const isMising=!state.box.find(({id})=>id===payload)
            if(isMising){
                return state
            }
            return {
                ...state,box:state.box.filter(el=>el.id!==payload)
            }
        }
        default:
            return state
    }

}