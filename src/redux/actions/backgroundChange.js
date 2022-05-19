import { BackgroundChange , ListInPractice } from './types'

function action(type, payload = {}) {
    return { type, payload };
}

const backgroungChange = {
    request: (data) =>
      action(BackgroundChange.SET_BACKGROUND_REQUEST, data),
}

const actions = {
    backgroungChange,
};
export default actions