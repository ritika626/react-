import { EditForm, ListInPractice } from "../actions/types";

const EditIntialState = { list: [], loader: false, editAddress: null }

export const EditInputReducer = (state = EditIntialState, action) => {
    switch (action.type) {
        case ListInPractice.SET_LIST_REQUEST:
            return {
                ...state,
                list: action.payload
            }
        case EditForm.SET_EDIT_INPUT:
            return {
                ...state,
                editAddress: action.payload
            }
        case EditForm.SET_HANDLE_SAVE_EDIT_INPUT:
            return {
                ...state,
                editAddress: { ...state.editAddress,address:{...state.editAddress.address,[action.payload.key]: action.payload.value}  }
            }
        case EditForm.SET_SAVE_INPUT:
            let newList=[...state.list]
            newList.map((i,index)=>{
                  if(i.id===action.payload){
                       newList[index]=state.editAddress
                  }
            })
            //console.log('newlist',newList);
            return {
                ...state,
                list: newList,
                editAddress:null
            }
        default:
            return state
    }
}