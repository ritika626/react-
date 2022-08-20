import { LineAxisOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import Accordian from '../Accordian';

const useStyle = makeStyles({
})

const BlogContent = () => {
    const classes = useStyle();
    const [postData,setPostData]=useState('');
    const [comments,setComments]=useState([]);
    const params=useParams()

    useEffect(async()=>{
        // const {data}=await axios(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
        const [postData,commentsData]=await Promise.all([axios(`https://jsonplaceholder.typicode.com/posts/${params.id}`),axios(`https://jsonplaceholder.typicode.com/comments?postId=${params.id}`)]);
        setPostData(postData.data);
        setComments(commentsData.data);
    },[params])

    return (
        <div >
             {postData.body}
             {
                comments.map((comm,index)=>{
                    return <Accordian key={index} title={comm.email} content={comm.body}/>
                })
             }
        </div>
    )
}

export default BlogContent;