import { EditForm ,ListInPractice} from './types'

function action(type,payload={}){
    return {
        type,
        payload
    }
}

const editForm={
    request:(data)=>action(EditForm.SET_EDIT_INPUT,data)
}

const listInPractice = {
    request: (data) =>
      action(ListInPractice.SET_LIST_REQUEST, data),
}

const actionsEdit={
    editForm,
    listInPractice
}

export default actionsEdit;