import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles({
   calculator:{
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       height:'calc(100vh - 80px)'
   },
   box:{
       width:200
   },
   num:{
       display:'flex',
       width:'100%',
       '& div':{
           padding:10,
           border:'1px solid grey',
           width:50,
           textAlign:'center'
       },
       '& > div':{
           border:'1px solid grey',
           flex:1,
           height:30
       }
   }
})

const Calculator=()=>{
    const classes=useStyles();
    return(
        <div className={classes.calculator}>
            <div className={classes.box}>
            <div className={classes.num}>
                    <div></div>
                </div>
                <div className={classes.num}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>+</div>
                </div>
                <div className={classes.num}>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>-</div>
                </div>
                <div className={classes.num}>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>x</div>
                </div>
                <div className={classes.num}>
                    <div>clr</div>
                    <div>0</div>
                    <div>/</div>
                    <div>%</div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;