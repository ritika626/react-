import React, { useState } from 'react';
import AddUser from '../components/AddUser';
import Box from '../components/Box/Index';
import UserList from '../components/UserList';
import CircularProgress from '@mui/material/CircularProgress';
import makeStyles from '@mui/styles/makeStyles';
import Snackbar from '@mui/material/Snackbar';

const useStyle = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const User = () => {
  const classes = useStyle()
  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, showError] = useState(false);

  const handleSubmit = (form) => {
    if (form.name === '' || form.age === '') {
      showError(true);
      return;
    }
    setLoader(true);
    setTimeout(() => {
      setUser([...user, form])
      setLoader(false)
    }, 2000);
  }

  const handleClose = () => {
    showError(false)
  }

  const handleDelete = (id) => {
    setUser(user.filter((i, index) => i.id != id))
  }

  return (
    <div className={classes.container}>
      <div>
        <AddUser handleSubmit={handleSubmit} />
      </div>
      <div>
        <Box>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={error}
            onClose={handleClose}
            message="Please enter name and age"
          />
          {
            loader ? <CircularProgress /> : <UserList userList={user} handleDelete={handleDelete} />
          }
        </Box>
      </div>
    </div>
  )
}

export default User;