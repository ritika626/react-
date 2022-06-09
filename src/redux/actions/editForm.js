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

const handleEditSave={
    request:(data)=>action(EditForm.SET_HANDLE_SAVE_EDIT_INPUT,data)
}

const SaveInput={
    request:(data)=>action(EditForm.SET_SAVE_INPUT,data)
}
const listInPractice = {
    request: (data) =>
      action(ListInPractice.SET_LIST_REQUEST, data),
}

const actionsEdit={
    editForm,
    listInPractice,
    handleEditSave,
    SaveInput
}

export default actionsEdit;