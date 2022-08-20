import { accordionActionsClasses, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Accordian from '../components/Accordian';
import BlogCard from '../components/BlogCard';
import { makeStyles } from '@mui/styles';
import { Link, useHistory } from 'react-router-dom';
// https://jsonplaceholder.typicode.com/comments
// https://jsonplaceholder.typicode.com/photos
// https://jsonplaceholder.typicode.com/posts

const useStyle = makeStyles({
    card:{
        margin:10
    }
})

const ApiAccord = () => {
    const [accorData, setAccordData] = useState([]);
    const classes = useStyle();
    const history=useHistory();

    useEffect(async () => {
        // const {data}= await axios('https://jsonplaceholder.typicode.com/photos');
        const { data } = await axios('https://jsonplaceholder.typicode.com/posts');
        setAccordData(data);
    }, [])

    const handleBlog=(id)=>{
        history.push(`/blogContent/${id}`)
    }

    return (
        <>
            {/*  {
        accorData.map(({title,id,url},index)=>{
            return <Accordian key={index} title={title} content={<img src={url}></img>}/>
        })
      } */}
            <Grid container rowSpacing={1} className={classes.gridCard} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                {
                    accorData.map(({ title, body, id }, index) => {
                        return <Grid item xs={3} onClick={()=>handleBlog(id)}>
                            <BlogCard>
                                {<div>
                                    <div><h3>{title}</h3></div>
                                    <div><p>{body}</p></div>
                                </div>}
                            </BlogCard>
                        </Grid>
                    })
                }
            </Grid>
        </>
    )
}

export default ApiAccord;