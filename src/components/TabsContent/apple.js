import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../../axiosConfig';
import { xObj } from '../../ob';

const useStyles = makeStyles({
    cardBorder: {
        border: '1px solid grey',
        padding: '2px 4px',
        margin: '5px 3px'
    },
    paginationButton: {
        right: 0,
        position: 'sticky',
        bottom: 0,
        margin: 4,
        textAlign: 'right'
    },
    pageButton: {
        margin: 3,
        padding: '4px 10px',
        fontSize: '16px'
    },
    li: {
        marginRight: 20,
        marginBottom: 10,
        width: '40%'
    },
    liMain: {
        display: 'flex',
        alignItems: 'center'
    },
    edit:{
        marginLeft:8
    }
})

const Apple = () => {
    const history = useHistory();
    const { location } = history;
    const params = useParams();
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [textInput, setTextInput] = useState('');
    const [normalList, setNormalList] = useState(xObj)
    const [currentPage, setCurrentPage] = useState(10);
    const [pageData, setPageData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [edit,setEdit]=useState(null)

    useEffect(async () => {
        setLoader(true)
        const { data } = await axiosInstance.get('/posts')
        setLoader(false);
        setData(data)
        setPageData(data.slice(0, currentPage))
    }, [])

    function previous() {
        console.log('page data', pageData)
    }

    function next() {
        // if(currentPage<=data.length/10){
        const nextPage = currentPage + 10
        setPageData(data.slice(currentPage, currentPage + 10))
        setCurrentPage(nextPage)
        // }
    }

    const handleTextChange = (e) => {
        setTextInput(e.target.value);
    }

    const handlePushText = () => {
        // const kk=[...normalList]
        // kk.push({id:10,name:textInput})
        // console.log('kk',kk)
        // setNormalList([...normalList,{id:10,name:textInput}]);
        const kk = { ...normalList }
        console.log('kk', { ...kk });
        //  kk?.users?.list?.data?.push({id:10,name:textInput})
        setNormalList({ ...kk, users: { ...kk.users, list: { ...kk.users.list, data: [...kk.users.list.data, { id: 10, name: textInput }] } } });
        setTextInput('')
    }

    const handleDelete = (id) => {
        const j = normalList?.users?.list?.data?.filter(x => {
            return x.id !== id
        })
        setNormalList({...normalList,users:{...normalList.users,list:{...normalList.users.list,data:[...j]}}});
    }

    const handleEdit=(id)=>{
            setEdit(id)
    }

    const changeEdit=(e)=>{
       setEdit({...edit,name:e.target.value})
    }

    const handleSave=()=>{
        let k={...normalList};
        k=k?.users?.list?.data?.map(i=>{
            if(edit.id===i.id){
                return {...i,name:edit.name}
            }
            return i
        })
        setNormalList({...normalList,users:{...normalList.users,list:{...normalList.users.list,data:k}}});
        setEdit(null)
    }

    /* concat 2 arrays
    function conArr(a,b){
        return [...a,...b]
        return a.concat(b);
    }
    console.log('conArr',conArr([1,2,3],[4,5,6])) */

    // put the value of f in b array of b
    let a={b:{c:{d:{e:{f:new Array(10).fill('e')}}}}}
    let b=[{a:'10',b:[]}]
    function reAssignValue(){
        let k=a?.b?.c?.d?.e?.f
        // b?.map(i=>{
        //     return i.b=[...k]
        // })
        b[0]['b']=[...k]
        console.log(b)
    }
    console.log(reAssignValue())

    return (
        <div>
            {
                loader ? <div>LOading......</div> :
                    (pageData?.map(i => {
                        return (<div className={classes.cardBorder}>
                            <p>{i.id}</p>
                            <p>{i.body}</p>
                            <p>{i.title}</p>
                        </div>)
                    }))
            }
            <div className={classes.paginationButton}>
                <button className={classes.pageButton} onClick={previous}>{'<'}</button>
                <button className={classes.pageButton} onClick={next}>{'>'}</button>
            </div>
            <div>
                {normalList?.type}
            </div>
            <div>
                {normalList?.users?.name}
            </div>
            <div>
                {normalList?.users?.list?.listName}
            </div>

            <ul>
                {
                    normalList?.users?.list?.data?.map((i, index) => {
                        return (
                            <li key={index} className={classes.liMain}>
                                {
                                    edit?.id===i.id ? (<input type="text" value={edit.name} onChange={(e)=>changeEdit(e)}></input>) : 
                                    (<div className={classes.li}>
                                    {i.name}
                                </div>)
                                }
                                <button onClick={() => handleDelete(i.id)}>Delete</button>
                                {
                                    edit?.id===i.id?(<button onClick={handleSave} className={classes.edit}>Save</button>):(<button onClick={() => handleEdit(i)} className={classes.edit}>edit</button>)
                                }
                                
                            </li>
                        )
                    })
                }
            </ul>
            <input type="text" value={textInput} onChange={handleTextChange}></input>
            <button onClick={handlePushText}>submit</button>
        </div>
    )
}

export default Apple;