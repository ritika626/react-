import { accordionActionsClasses, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import Accordian from '../components/Accordian';
import BlogCard from '../components/BlogCard';
import { makeStyles } from '@mui/styles';
import { Link, useHistory } from 'react-router-dom';
import LineChart from '../components/LineChart';
import { BarChart } from '../components/BarChart';
// https://jsonplaceholder.typicode.com/comments
// https://jsonplaceholder.typicode.com/photos
// https://jsonplaceholder.typicode.com/posts

const useStyle = makeStyles({
    card: {
        margin: 10
    }
})



const ApiAccord = () => {
    const [accorData, setAccordData] = useState([]);
    const [comments, setComments] = useState([])
    const classes = useStyle();
    const history = useHistory();

    useEffect(async () => {
        // const {data}= await axios('https://jsonplaceholder.typicode.com/photos');
        const { data } = await axios('https://jsonplaceholder.typicode.com/posts');
        const { data: dataComments } = await axios('https://jsonplaceholder.typicode.com/comments');
        setAccordData(data);
        setComments(dataComments);
    }, [])

    const handleBlog = (id) => {
        history.push(`/blogContent/${id}`)
    }

    const labelMaker=useMemo(()=>{
         let labels=[];
         let countOfComments=[];
         comments.map((labeldata,index)=>{
            if(!labels.includes(`post-${labeldata.postId}`)){
                let count=comments.filter(i=>i.postId===labeldata.postId).length + Math.random(1);
                labels=[...labels,`post-${labeldata.postId}`]
                countOfComments=[...countOfComments,count]
            }
         })
         return {labels,countOfComments};
    },[comments]);

    const data = {
        labels:labelMaker.labels,
        datasets: [
            {
                label: 'Dataset 2',
                data: labelMaker.countOfComments,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <>
            {/*  {
        accorData.map(({title,id,url},index)=>{
            return <Accordian key={index} title={title} content={<img src={url}></img>}/>
        })
      } */}
            {/* for different api calls showuing posts comments */}
            {/*  <Grid container rowSpacing={1} className={classes.gridCard} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
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
            </Grid> */}
            {/* <LineChart /> */}
            <BarChart data={data}/>
        </>
    )
}

export default ApiAccord;