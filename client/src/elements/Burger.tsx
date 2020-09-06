import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles'; 
import { IBurger } from './Interfaces';

const useStyles = makeStyles(theme => (
    createStyles({
        root: {
            position: 'absolute',
            display: "inlineBlock",
            cursor: "pointer", 
            zIndex: 999
        }, 
        
        bar1: (isToggled: boolean) => ({
            width: 35,
            height: 4,
            backgroundColor: theme.palette.primary.main,
            margin: "6px 0",
            transition: "0.4s",
            transform: isToggled ? 'rotate(-45deg) translate(-8px, 6px)' : ''
        }),

        bar2: (isToggled: boolean) => ({
            width: 35,
            height: 4,
            backgroundColor: theme.palette.primary.main,
            margin: "6px 0",
            transition: "0.4s",
            opacity: isToggled ? 0 : 1
        }),

        bar3: (isToggled: boolean) => ({
            width: 35,
            height: 4,
            backgroundColor: theme.palette.primary.main,
            margin: "6px 0",
            transition: "0.4s",
            transform: isToggled ? 'rotate(45deg) translate(-7px, -7px)' : ''
        })
 
    })));

function Burger(props: IBurger) {

    const classes = useStyles(props.isToggled);

    return (
        <div className={classes.root} onClickCapture={() => { props.OnClick() }}>
            <div className={classes.bar1}></div>
            <div className={classes.bar2}></div>
            <div className={classes.bar3}></div>
        </div>
    );
}

export default Burger;