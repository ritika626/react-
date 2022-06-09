import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    box: {
        border: '1px solid black',
        padding: 20,
        display: 'flex',
        width: 80,
        height: 50
    }
})
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const TicToeRedux = () => {
    const classes = useStyle();
    return (
        <div className={classes.box}>
        <div >
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
        <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
        <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
          {/*   {
                arr.map((i, index) => {
                    return (
                        <div className={classes.box}>
                        <div>
                            {i}
                        </div>
                    </div>
                    )
                })
            } */}
        </div>
    )
}

export default TicToeRedux;