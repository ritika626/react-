import { BackgroundChange , ListInPractice } from './types'

function action(type, payload = {}) {
    return { type, payload };
}

const backgroungChange = {
    request: (data) =>
      action(BackgroundChange.SET_BACKGROUND_REQUEST, data),
}

const backgroundChangeHeader={
    request:(data)=>{
        return action(BackgroundChange.SET_HEADER_COLOR_REQUEST,data)
    }
    
}

const actions = {
    backgroungChange,
    backgroundChangeHeader
};
export default actions