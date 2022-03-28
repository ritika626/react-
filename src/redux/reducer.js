import {DrActionTypes, WoListActionTypes} from './actions/types';

const woListIniState={list:[],search:''}


export const dr=(state={},action)=>{
    switch (action.type) {
        case DrActionTypes.REQUESTED:
            return {
                ...state,
                date:action.payload
            }
        default:
            return state
    }
}

export const woList=(state=woListIniState,action)=>{
    console.log('actio=====>',action);
    let searchList=state.list;
    switch (action.type) {
        case WoListActionTypes.SET_SEARCH:
            return {
                ...state,
                search:action.payload,
            }
            case WoListActionTypes.WO_LIST:
            return {
                ...state,
                list:action.payload
            }
    
        default:
            return state;
    }
}
