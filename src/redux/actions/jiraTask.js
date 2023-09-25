import { JiraLogin } from "./types"
import { TaskStatus , TaskData , TaskType , UserData} from "../../ob"

export const getTasksStatus = () =>{
      return {
            type:JiraLogin.GET_TASKS_STATUS,
            payload : TaskStatus
      }
}

export const getTasksAction = () =>{
      return {
            type :JiraLogin.GET_TASKS,
            payload : TaskData
      }
}

export const getTasksTypeAction = () =>{
      return {
            type : JiraLogin.GET_TASKS_TYPE,
            payload : TaskType
      }
}

export const getUsersAction = () =>{
      return {
            type : JiraLogin.GET_USERS,
            payload : UserData
      }
}

export const addNewTask = (data) => {
      return {
            type : JiraLogin.ADD_NEW_TASKS,
            payload : data
      }
}

export const deleteTaskAction = (id) => {
      return {
            type : JiraLogin.DELETE_SELECTED_TASK,
            payload: id
      }
}