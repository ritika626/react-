import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Tabs, Tab, Button, Modal, Typography, Box, Input, InputLabel, FormControl, MenuItem, Select } from '@mui/material';
import JiraCard from '../../components/JiraCard';
import JiraSections from '../../components/JiraSections';
import { TaskStatus, TaskData, TaskType, UserData } from "../././../ob";
import AssignmentReturnedOutlinedIcon from '@mui/icons-material/AssignmentReturnedOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import { DragDropContext } from 'react-beautiful-dnd';

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
        display:'flex',
        alignItems:'center',
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
    filter : {
        width:'20%',
        marginRight:'20px !important'
    }
});




// some,filter
const LoginTodo = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [formValues, setFormValues] = useState({
        title: "",
        type: "",
        statusId: "",
        userId : []
    })
    const [task, setAddTask] = useState(TaskData);
    const [multiTask, setMultiTask] = useState([]);
    const [taskValues,setTaskValues] = useState ({
        title : "",
        statusId : ""
    });
    const [formType, setFormType] = useState();

    const handleAddTask = (taskId) => {
        setOpen(true);
        if (taskId) {
            let defaultFormValues = task?.find((i) => i.id === taskId)
            defaultFormValues['userId'] = defaultFormValues?.assignee;
            setFormValues(defaultFormValues);
            setFormType(taskId);
        }
        else {
            setFormType('add');
        }
    };

    const handleClose = () => {
        setOpen(false);
        setFormType(null);
        setFormValues({
            title: "",
            type: "",
            statusId: "",
            userId : []
        });
    };

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

    const handleSubmit = (e) => {
        console.log('add');
        e.preventDefault();
        setAddTask([...task, { ...formValues, assignee : formValues.userId, summary: '', id: new Date().getTime() }])
        handleClose()
    };

    const handleInputChange = async (e, key) => {
        //  console.log('form values',formValues[key]);
        setFormValues({ ...formValues, [key]: e.target.value })
        try{
            const g  = await strornum('kk')
            
        console.log(g)
        }
        catch(error){
            console.log(error)
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const index = task.findIndex(i => i.id === formType)
        const newUpdatedTask = [...task];
        // const newUpdateFormValues = {...formValues}
        // newUpdateFormValues.assignee = newUpdateFormValues.userId
        const newUpdateFormValues = {...formValues}
        const updatedAssignee = newUpdateFormValues.userId
        delete newUpdateFormValues.userId
        newUpdatedTask[index] = {...newUpdateFormValues,assignee :updatedAssignee}
        console.log(newUpdatedTask)
        setAddTask([...newUpdatedTask])
        handleClose()
    }

    const strornum = (str) => {
      return new Promise((resolve,reject)=>{
          if(typeof str === 'number'){
            resolve(str);
          }
          else{
            reject('dfnubf');
          }
    }
    )
}



    const handleSave = () => {

        //    const index = task.findIndex(i=> i.id === taskValues.id);      // for single task update  statuson save ;
        //    console.log('title index',index);
        //    const newTaskValues=[...task];
        //    newTaskValues[index]={...newTaskValues[index],statusId: taskValues.statusId}
        //    setAddTask([...newTaskValues])

        // for multi task update  statuson save ;
        const newTasksValue=[...task]
        newTasksValue.map((i) => {
             if(multiTask.includes(i.id)){
                i['statusId'] = taskValues?.statusId
             }
        }) 
       setAddTask(newTasksValue)
    }

    const handleInputTaskChange = (e,key) => {
        const newD = e.target.value
        // for sinlge select and defalt values but after changing the status, the value of the status of particular task get updated

        // if(key==='id'){
        //     // const taskIndex = task.findIndex(i => i.id === e.target.value);   // my way of doing the default task status set
        //     // const defaultTasks = [...task]
        //     // defaultTasks[taskIndex] = {...defaultTasks[taskIndex],statusId : task[taskIndex].statusId}
        //     // const deafutlTaskvalues = {...taskValues}
        //     // deafutlTaskvalues['statusId']=defaultTasks[taskIndex].statusId
        //     // setTaskValues({...deafutlTaskvalues,title:e.target.value})

        //     // const deafutlTaskvalues = task.find(i => i.id === e.target.value); // defaulttask status wrt task i.e before changing task status
        //     // setTaskValues({...deafutlTaskvalues})
        // }
        // else{
        //     setTaskValues({...taskValues,[key]:e.target.value})
        // }

    //    setMultiTask(newD); // as we dont get updated value right after setting the state so we need variable or the exact value coming from the argment.
    //    const newMultiTaskDefaultStatus =  task.find(i => i.id === newD[0]);
    //    setTaskValues(newMultiTaskDefaultStatus)
    if(key==='statusId'){
        setTaskValues({statusId:e.target.value})
    }
    else{
        setMultiTask(e.target.value);
    }
    }

    // if we are not updating the state right after setting it then we can write it in useEffect
    useEffect(() => {
        const newMultiTaskDefaultStatus =  task.find(i => i.id === multiTask[0]);
        // setTaskValues(newMultiTaskDefaultStatus)
        setTaskValues({statusId: newMultiTaskDefaultStatus?.statusId})
    },[multiTask]);

    const handleDeleteTask =() =>{
       const tasksArray = [...task];
       const updatedTaskArray = tasksArray.filter(i => i.id != formType);
       setAddTask(updatedTaskArray)
       handleClose()
    }

    const handleDeleteMultiTask =() =>{
        const drpDownTasks = [...task];
        const deleteTaskFromDropDown= drpDownTasks.filter((item)=> !multiTask.includes(item.id));
        setMultiTask([]);
        setAddTask(deleteTaskFromDropDown);
    }

    console.log('formValues',formValues);

    return (
        <>
            <div className={classes.addTask}>
                <FormControl className={classes.filter}>
                            <InputLabel id="demo-simple-select-label">Task Titles</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={multiTask}
                                multiple
                                label="Task Titles"
                                onChange={(e) => handleInputTaskChange(e, 'id')}
                            >
                                {
                                    TaskData.map((item, index) => {
                                        return <MenuItem value={item.id}>{item.title}</MenuItem>
                                    })
                                }

                            </Select>
                        </FormControl>
                <FormControl  className={classes.filter}>
                            <InputLabel id="demo-simple-select-label">Task Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={taskValues?.statusId}
                                label="Task Status"
                               
                                onChange={(e) => handleInputTaskChange(e, 'statusId')}
                            >
                                {
                                    TaskStatus.map((item, index) => {
                                        return <MenuItem value={item.id}>{item.name}</MenuItem>
                                    })
                                }

                            </Select>
                        </FormControl>
                <Button onClick={handleSave}>Save</Button>
                <Button onClick={() => handleAddTask()}>Add New Task</Button>
                {
                    multiTask && multiTask.length > 1 ? <Button onClick={handleDeleteMultiTask}>Delete</Button> : ''
                }
            </div>
            <div className={classes.container}>
                {
                    TaskStatus?.map((i, index) => {
                        return (
                            <JiraSections key={index} heading={i.name}>
                                {
                                    task.filter((j, index) => {
                                        return j.statusId === i.id
                                    }).map((k, index) => {
                                        const taskType = TaskType?.find(taskTypeItem => taskTypeItem.id === k.type)?.type
                                        const userDataImage = UserData?.filter(x => k?.assignee?.includes(x.id)).map(item => {
                                            return item.userImage ? item.userImage : item.first_name
                                        })
                                        return (
                                            <div onClick={() => handleAddTask(k.id, 'update')}>
                                                <JiraCard
                                                    title={k.title}
                                                    tags={k.title}
                                                    icon={taskType === 'bug' ? <BugReportOutlinedIcon /> : <AssignmentReturnedOutlinedIcon />}
                                                    ticketNo={taskType === 'bug' ? `BUG-${k.id}` : `TIS-${k.id}`}
                                                    avatarImage={userDataImage}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </JiraSections>
                        )
                    })
                }
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                center
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={classes.form}>
                    <form onSubmit={formType === 'add' ? handleSubmit : handleUpdate}>
                        <FormControl fullWidth className={classes.formItem}>
                            <InputLabel id="demo-simple-select-label">Task Name</InputLabel>
                            <Input type='text' value={formValues?.title} onChange={(e) => handleInputChange(e, 'title')} />
                        </FormControl>
                        <FormControl fullWidth className={classes.formItem}>
                            <InputLabel id="demo-simple-select-label">Task Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formValues?.statusId}
                                label="Task Status"
                                onChange={(e) => handleInputChange(e, 'statusId')}
                            >
                                {
                                    TaskStatus.map((item, index) => {
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
                                value={formValues?.type}
                                label="Task Type"
                                onChange={(e) => handleInputChange(e, 'type')}
                            >
                                {
                                    TaskType.map((item, index) => {
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
                                value={formValues?.userId}
                                label="Assignee"
                                multiple
                                onChange={(e) => handleInputChange(e, 'userId')}
                            >
                                <MenuItem value={'all'}>Select All</MenuItem>
                                {
                                    UserData.map((item, index) => {
                                        return <div>
                                            <MenuItem value={item.id}>{item.first_name}</MenuItem>
                                        </div>
                                    })
                                }

                            </Select>
                        </FormControl>
                        <div className={classes.formButton}>
                            <Button type="submit">Save</Button>
                            <Button onClick={handleClose}>Close</Button>
                            <Button onClick={handleDeleteTask}>Delete</Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default LoginTodo;