import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { IBar } from './Interfaces';
import { useInView } from 'react-intersection-observer';

interface IParam {
    bar: IBar,
    inView: boolean
}

const useStyles = makeStyles<Theme, IParam>((theme: Theme) =>
    createStyles({
        bar: {
            width: '100%',
            height: theme.spacing(1.5),
            backgroundColor: theme.palette.grey[300],
            borderRadius: 12,
        },

        progress: {
            height: theme.spacing(1.5),
            backgroundColor: theme.palette.primary.light,
            transition: "1s",
            borderRadius: 12,
            width: (props) => props.inView ? `${props.bar.value}%` : 0,
        },
    }));

function Bar(props: IBar) {

    const [ref, inView] = useInView({
        /* Optional options */
        threshold: 0,
    })

    const params: IParam = {
        bar: props,
        inView: inView
    };

    const classes = useStyles(params);

    return (
        <div className={classes.bar}>
            <div ref={ref} />
            <div className={classes.progress} />
        </div>
    );
}

export default Bar;