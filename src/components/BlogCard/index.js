import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyle = makeStyles({
    blogContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: 5,
        flexWrap: 'wrap',
        background:'white',
        height:270,
    },
})

const BlogCard = ({children}) => {
    const classes = useStyle();

    return (
        <div className={classes.blogContainer}>
            {children}
        </div>
    )
}

export default BlogCard;