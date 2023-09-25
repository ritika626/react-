import React from 'react';
import { makeStyles } from '@mui/styles';
import AssignmentReturnedOutlinedIcon from '@mui/icons-material/AssignmentReturnedOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import Avatar from '@mui/material/Avatar';
import { AvatarGroup } from '@mui/material';

const useStyles = makeStyles({
  card: {
    padding: 10,
    border: '1px solid #F0F3F5',
    background: 'white',
    borderRadius: '10px',
    boxShadow: '1px 1px 1px 1px lightgrey',
    marginBottom: 10
  },
  status: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ticketAvatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});


const JiraCard = ({ title = 'title', tags, icon, ticketNo, avatarImage , onClick}) => {
  const classes = useStyles();

  return (
    <div className={classes.card} onClick={onClick}>
      <div>
        <b>{title}</b>
      </div>
      <div>
        {tags}
      </div>
      <div className={classes.status}>
        <div>
          {
            icon
          }
        </div>
        <div className={classes.ticketAvatar}>
          {ticketNo}
          <div>
            <AvatarGroup max={2}>
              {avatarImage.map((item, index) =>{
                return <Avatar alt={item} src={item} />
              })}
            </AvatarGroup>
          </div>
        </div>
      </div>
    </div>
  )
};

export default JiraCard;