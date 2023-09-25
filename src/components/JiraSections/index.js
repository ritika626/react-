import React, { Children } from 'react';
import { makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    section: {
        flex: 1,
        height: 'calc(100vh - 120px)',
        margin : 10,
        background : '#F0F3F5',
        borderRadius : 5
    },
    heading : {
        padding : 10,
        marginBottom : 5,
    },
    sectionPadding : {
        padding :10
    }
});

const JiraSections = ({children,heading = 'heading'}) =>{
    const classes = useStyles();

    return(
        <div className={classes.section}>
           <div className={classes.heading}>
            {heading}
           </div>
           <div className={classes.sectionPadding}>
            {children}
           </div>
        </div>
    )
};

export default JiraSections;