import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IBar } from './Interfaces';

const useStyles = makeStyles(theme => ({
        bar: { 
            width: '100%',
            height: theme.spacing(1.5),
            backgroundColor: theme.palette.grey[300], 
            borderRadius: 12, 
        },

        progress: (value: number) => ({
            width: `${value}%`, 
            height: theme.spacing(1.5),
            backgroundColor: theme.palette.primary.light,
            transition: "0.4s",
            borderRadius: 12, 
        }), 
    }));

function Bar(props: IBar) {

    const classes = useStyles(props.value);

    return ( 
        <div className={classes.bar}>
            <div className={classes.progress} />
        </div> 
    );
}

export default Bar;