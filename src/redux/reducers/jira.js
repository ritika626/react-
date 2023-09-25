import { JiraLogin } from "../actions/types"

const initialState = {
    tasksStatus : [],
    tasksData : [] ,
    tasksType : [] ,
    users : []
};

export const TaskStatusReducer = (state = initialState,action) =>{
    switch(action.type) {
        case JiraLogin.GET_TASKS_STATUS :{
            return {
                ...state,
                tasksStatus : action.payload
            }
        }
        case JiraLogin.GET_TASKS : {
            return {
                ...state,
                tasksData : action.payload
            }
        }
        case JiraLogin.GET_TASKS_TYPE : {
            return {
                ...state,
                tasksType : action.payload
            }
        }
        case JiraLogin.GET_USERS : {
            return {
                ...state,
                users : action.payload
            }
        }
        case JiraLogin.ADD_NEW_TASKS : {
            const newTasksAdded = [...state.tasksData];
            newTasksAdded.push({
                id: new Date().getTime(),
                title : action.payload.taskTitle , 
                statusId : action.payload.taskStatus, 
                summary : "", 
                assignee : action.payload.taskAssignee, 
                type : action.payload.taskType});
            return {
                ...state,
                tasksData : newTasksAdded
            }
        }
        case JiraLogin.DELETE_SELECTED_TASK : {
            const deletedTask = [...state.tasksData]
            const newtasksArray = deletedTask.filter(i => i.id !== action.payload);
            return {
                ...state,
                tasksData : newtasksArray
            }
        }
        default :
            return state
    }
}
