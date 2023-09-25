import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Tabs, Tab, Button, Modal, Typography, Box, Input, InputLabel, FormControl, MenuItem, Select } from '@mui/material';
import JiraCard from '../../components/JiraCard';
import JiraSections from '../../components/JiraSections';
import { TaskStatus, TaskData, TaskType, UserData } from "../././../ob";
import AssignmentReturnedOutlinedIcon from '@mui/icons-material/AssignmentReturnedOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getTasksStatus as getTasksStatusAction, getTasksAction, getTasksTypeAction, getUsersAction ,deleteTaskAction} from '../../redux/actions/jiraTask'
import JiraModal from '../../components/JiraModal';

// {title,statusId,type,assignee}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addTask: {
        textAlign: 'right',
        marginTop: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    form: {

    },
    formItem: {
        margin: '5px !important'
    },
    formButton: {
        textAlign: 'right'
    },
    filter: {
        width: '20%',
        marginRight: '20px !important'
    }
});



// some,filter
const JiraLogin = ({getTasksActionHof}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [tasksId, setTasksId] = useState(null);
    const dispatch = useDispatch();
    const { tasksStatus, tasksData, tasksType, users } = useSelector(state => state.TaskStatusReducer);

    useEffect(() => {
        // getTasksActionHof()
        dispatch(getTasksStatusAction());
        dispatch(getTasksAction());
        dispatch(getTasksTypeAction());
        dispatch(getUsersAction());
    }, [])

    const handleAddTask = (id) => {
        setOpen(true);
        setTasksId(id);
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleDelete = () => {
        console.log('id for delete',tasksId);
        dispatch(deleteTaskAction(tasksId))
    }
    
    return (
        <>
            <div className={classes.addTask}>
                <FormControl className={classes.filter}>
                    <InputLabel id="demo-simple-select-label">Task Titles</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={multiTask}
                            // multiple
                            label="Task Titles"
                            // onChange={(e) => handleInputTaskChange(e, 'id')}
                        >
                            {
                                TaskData.map((item, index) => {
                                    return <MenuItem value={item.id}>{item.title}</MenuItem>
                                })
                            }

                        </Select>
                </FormControl>
                <FormControl className={classes.filter}>
                        <InputLabel id="demo-simple-select-label">Task Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={taskValues?.statusId}
                            label="Task Status"

                            // onChange={(e) => handleInputTaskChange(e, 'statusId')}
                        >
                            {
                                TaskStatus.map((item, index) => {
                                    return <MenuItem value={item.id}>{item.name}</MenuItem>
                                })
                            }

                        </Select>
                </FormControl>
                        <Button >Save</Button>
                        <Button onClick={handleAddTask}>Add New Task</Button>
                {/* {
                    multiTask && multiTask.length > 1 ? <Button >Delete</Button> : ''
                } */}
            </div>
            <div className={classes.container}>
                {
                    tasksStatus?.map((item, index) => {
                        return <JiraSections heading={item.name}>
                            {
                                tasksData && tasksData?.filter((i) => i.statusId === item.id)?.map((x, index) => {
                                    const tasksIcon = tasksType?.find(y => y.id === x.type);
                                    let emptyArr = []
                                    users.map(u => {
                                        if (x?.assignee?.includes(u.id)) {
                                            emptyArr = [...emptyArr, u.userImage]
                                        }
                                    });
                                    console.log(emptyArr);
                                    return <JiraCard
                                        onClick={() => handleAddTask(x.id)}
                                        title={x.title}
                                        avatarImage={emptyArr}
                                        tags={x.title}
                                        icon={tasksIcon.type === 'bug' ? <BugReportOutlinedIcon /> : <AssignmentReturnedOutlinedIcon />}
                                        ticketNo={`${tasksIcon.type === 'bug' ? 'BUG-' + x.id : 'TIS-' + x.id}`}
                                    />
                                })
                            }
                        </JiraSections>
                    })
                }
            </div>
            <JiraModal 
                open = {open}
                handleClose ={handleClose}
                handleDelete ={handleDelete}
            />
        </>
    )
}

const mapDispatchToProps = {
    getTasksActionHof : getTasksStatusAction
}

export default connect(null,mapDispatchToProps)(JiraLogin);