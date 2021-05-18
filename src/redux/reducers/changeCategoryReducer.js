import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function changeCategoryReducer(state=initialState.currentCategory,action){
    switch (action.teype) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload
    
        default:
           return state;
    }
}
