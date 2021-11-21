import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles'; 
import { IBurger } from './Interfaces'; 
import { Theme } from '@material-ui/core';
 
interface IParam {
    isToggled: boolean 
}
 
const useStyles = makeStyles<Theme, IParam>((theme: Theme) => (
    createStyles({
        root: {
            position: 'absolute',
            display: "inlineBlock",
            cursor: "pointer", 
            zIndex: 999
        }, 
        
        bar1:  ({
            width: 35,
            height: 4,
            backgroundColor: theme.palette.primary.main,
            margin: "6px 0",
            transition: "0.4s",
            transform:  (props) => props.isToggled ? 'rotate(-45deg) translate(-8px, 6px)' : ''
        }),

        bar2: ({
            width: 35,
            height: 4,
            backgroundColor: theme.palette.primary.main,
            margin: "6px 0",
            transition: "0.4s",
            opacity:  (props) => props.isToggled ? 0 : 1
        }),

        bar3: ({
            width: 35,
            height: 4,
            backgroundColor: theme.palette.primary.main,
            margin: "6px 0",
            transition: "0.4s",
            transform:  (props) => props.isToggled ? 'rotate(45deg) translate(-7px, -7px)' : ''
        })
 
    })));

function Burger(props: IBurger) {

    const classes = useStyles({ isToggled : props.isToggled });

    return (
        <div className={classes.root} onClickCapture={() => { props.OnClick() }}>
            <div className={classes.bar1}></div>
            <div className={classes.bar2}></div>
            <div className={classes.bar3}></div>
        </div>
    );
}

export default Burger;