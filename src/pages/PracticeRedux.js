import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import actionsEdit from '../redux/actions/editForm'
import actions from '../redux/actions/backgroundChange'
import { useDispatch, useSelector } from 'react-redux';

const Arr = [{
    id: 1,
    name: 'ritika',
    address: {
        city: 'ambala',
        pincode: 133001
    }
},
{
    id: 2,
    name: 'ritika1',
    address: {
        city: 'ambala1',
        pincode: 133001
    }
},
{
    id: 3,
    name: 'ritika2',
    address: {
        city: 'ambala2',
        pincode: 133001
    }
}]

const PracticeRedux = () => {
    const dispatch = useDispatch();
    const { color } = useSelector(state => state.backgroundChangeRedux);
    const { editAddress, list } = useSelector(state => state.EditInputReducer);
    console.log('editAddress',editAddress);

    const handleClick = (e) => {
        dispatch(actions.backgroungChange.request(e.target.innerHTML))
    }

    const useStyles = makeStyles({
        box: {
            display: 'flex',
            justifyContent: 'center',
            height: '200px',
            width: '200px',
            alignItems: 'center',
            padding: '50px',
            background: color,
        },
        container: {
            display: 'flex',
            flexDirection: 'column'
        },
        btn: {
            padding: '5px',
            '& > button': {
                padding: '5px',
                border: '1px solid black'
            }
        }
    })
    const classes = useStyles();

    useEffect(() => {
        dispatch(actionsEdit.listInPractice.request(Arr));
    }, []);

    const handleEdit = (data) => {
        dispatch(actionsEdit.editForm.request(data))
    }

    const handleSave = (id) => {
        console.log('id',id);
        let change=false;
        for(let i=0;i<list.length;i++){
            if(editAddress?.id === list[i]?.id && (editAddress?.address?.city===list[i]?.address?.city || (editAddress?.address?.pincode ===list[i]?.address?.pincode))){
                change=true
                break
            }
        }
        if(change){
            alert('values are same');
            return
        }
        dispatch(actionsEdit.SaveInput.request(id))
    }

    const handleChange = (e,key) => {
        dispatch(actionsEdit.handleEditSave.request({value:e.target.value,key}))
    }

    return (
        <>
            {
                list?.map((i, index) => {
                    return (
                        <div key={index}>
                            <p>{i.name}</p>
                            <div>
                                <p>Address: {i.address.city} {i.address.pincode}</p>
                                <div>
                                    {
                                        editAddress?.id === i.id ? (
                                            <>
                                                    <input type="text" value={editAddress.address.city} onChange={(e) => handleChange(e,'city')}></input>
                                                    <input type="text"  value={editAddress.address.pincode} onChange={(e) => handleChange(e,'pincode')}></input>
                                            </>
                                        ) : ''
                                    }

                                </div>
                                {
                                        editAddress?.id === i.id ? 
                                        <button onClick={() => handleSave(i.id)}>save</button>
                                     : <button onClick={() => handleEdit(i)}>Edit</button>
                                }

                            </div>
                        </div>
                    )
                })
            }
            {/* <div className={classes.container}>
      <div className={`${classes.box}`}>
          <h4>here a box</h4>
      </div>
      <div className={classes.btn}>
          <button onClick={(e)=>handleClick(e)}>red</button>
          <button onClick={(e)=>handleClick(e)}>yellow</button>
          <button onClick={(e)=>handleClick(e)}>pink</button>
      </div>
      </div> */}

        </>

    )
}
export default PracticeRedux;