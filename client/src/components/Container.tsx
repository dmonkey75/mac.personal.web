import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles(theme => ({
    
    root: {
        margin: 'auto',
        maxWidth: 850,
 
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },

        "& > *": {
            paddingTop: theme.spacing(8),
        },

        "& >:last-child": {
            paddingBottom: theme.spacing(8)
        }
    }
}));

function Container(props: any) {
    
    const classes = useStyles();

    return (
        <div className={classes.root}> {props.children} </div>
    );
}

export default Container;