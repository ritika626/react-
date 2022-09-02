import { Avatar, Badge } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    profile: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid lightgrey',
        padding: 10
    },
    profileDetail: {
        marginLeft: 10,
        flex: 1
    },
    badge:{
        marginRight:10
    }
})
const stringToHslColor = (str, s = 50, l = 50) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    const h = hash % 360;
    return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
  };

const CardChat = ({ name = 'ritika', lastMessage = 'where are you', unReadMessageCount, profilePhoto }) => {
    const classes = useStyles();

    const firstCharacter = (str) => {
        let newCharac = str.split('')[0]
        return newCharac;
    }

    return (
        <div className={classes.card}>
            <div className={classes.profile}>
                <Avatar sx={{ bgcolor: stringToHslColor(name) }}>{firstCharacter(name)}</Avatar>
                <div className={classes.profileDetail}>
                    <div><b>{name}</b></div>
                    <div>{lastMessage}</div>
                </div>
                <div className={classes.badge}>
                <Badge color="secondary" badgeContent={unReadMessageCount || 7}>
                </Badge>
                </div>
            </div>

        </div>
    )
}
export default CardChat;