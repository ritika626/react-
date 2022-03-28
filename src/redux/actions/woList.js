import { WoListActionTypes } from "./types"

export const WoList=(data)=>{
    return {
        type:WoListActionTypes.WO_LIST,
        payload:data
    }
}

export const Search=(data)=>{
    return{
        type:WoListActionTypes.SET_SEARCH,
        payload:data
    }
}

