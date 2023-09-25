import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Tabs, Tab, Button, Modal, Typography, Box, Input, InputLabel, FormControl, MenuItem, Select } from '@mui/material';
import JiraCard from '../../components/JiraCard';
import JiraSections from '../../components/JiraSections';
import { TaskStatus, TaskData, TaskType, UserData } from "../././../ob";
import AssignmentReturnedOutlinedIcon from '@mui/icons-material/AssignmentReturnedOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector, connect } from 'react-redux';
import {
    getTasksStatus as getTasksStatusAction,
    getTasksAction,
    getTasksTypeAction,
    getUsersAction,
    addNewTask
} from '../../redux/actions/jiraTask'

const useStyles = makeStyles({

})

const JiraModal = ({ open, handleClose, tasks , handleDelete }) => {

    const classes = useStyles();
    const [addModalValues, setAddModalValues] = useState({
        taskTitle: "",
        taskType: "",
        taskStatus: "", 
        taskAssignee: []
    })
    const dispatch = useDispatch();
    const { tasksStatus, tasksData, tasksType, users } = useSelector(state => state.TaskStatusReducer);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleInputChange = (e, key) => {
        setAddModalValues({
            ...addModalValues,
            [key]: e.target.value
        })
    }

    const handleModalSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTask({addModalValues}));
        handleClose();
    }


    return (
        <Modal
            open={open}
            onClose={handleClose}
            center
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className={classes.form}>
                <form onSubmit={handleModalSubmit}>
                    <FormControl fullWidth className={classes.formItem}>
                        <InputLabel id="demo-simple-select-label">Task Name</InputLabel>
                        <Input type='text' onChange={(e) => handleInputChange(e, "taskTitle")} />
                    </FormControl>
                    <FormControl fullWidth className={classes.formItem}>
                        <InputLabel id="demo-simple-select-label">Task Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(e) => handleInputChange(e, "taskStatus")}
                            // value={formValues?.statusId}
                            label="Task Status"
                        // onChange={(e) => handleInputChange(e, 'statusId')}
                        >
                            {
                                tasksStatus.map((item, index) => {
                                    return <MenuItem value={item.id}>{item.name}</MenuItem>
                                })
                            }

                        </Select>
                    </FormControl>
                    <FormControl fullWidth className={classes.formItem}>
                        <InputLabel id="demo-simple-select-label">Task Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(e) => handleInputChange(e, "taskType")}
                            // value={formValues?.type}
                            label="Task Type"
                        // onChange={(e) => handleInputChange(e, 'type')}
                        >
                            {
                                tasksType.map((item, index) => {
                                    return <MenuItem value={item.id}>{item.type}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                    <FormControl fullWidth className={classes.formItem}>
                        <InputLabel id="demo-simple-select-label">Assignee</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(e) => handleInputChange(e, "taskAssignee")}
                            value={addModalValues?.taskAssignee}
                            label="Assignee"
                            multiple
                        // onChange={(e) => handleInputChange(e, 'userId')}
                        >
                            <MenuItem value={'all'}>Select All</MenuItem>
                            {
                                users.map((item, index) => {
                                    return <MenuItem value={item.id}>{item.first_name}</MenuItem>
                                })
                            }

                        </Select>
                    </FormControl>
                    <div className={classes.formButton}>
                        <Button type="submit">Save</Button>
                        <Button onClick={handleClose}>Close</Button>
                        <Button onClick={handleDelete}>Delete</Button>
                    </div>
                </form>
            </Box>
        </Modal>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.TaskStatusReducer.tasksStatus
    }
}

export default connect(mapStateToProps)(JiraModal);