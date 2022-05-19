import {EditForm,ListInPractice} from "../actions/types";

export const EditInputReducer=(state={status:null},action)=>{
    console.log('payload for edit',action);
    switch (action.type) {
        case ListInPractice.SET_LIST_REQUEST:
            return {
                ...state,
                list:action.payload
            }
        case EditForm.SET_EDIT_INPUT:
            return {
                ...state,
                status:action.payload.status
            }
            default:
                return state
    }
}