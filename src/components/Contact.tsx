import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles, useTheme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useInView } from 'react-intersection-observer';
import { IScreen } from '../elements/Interfaces';
import Container from './Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles<Theme, IScreen>((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.common.white,
        },

        wrapper: {
            display: (props) => props.isMobile ? 'block' : 'flex',
            overflow: 'hidden',

            paddingTop: theme.spacing(16),
            transform: (props) => props.inView ? `translateY(${theme.spacing(4) * -1}px)` : '',
            transition: "1s",
        },

        titleContainer: {
            display: 'flex',
            flexDirection: (props) => props.isMobile ? 'row' : 'column',
            justifyContent: (props) => props.isMobile ? 'center' : 'flex-start',
            flex: (props) => props.isMobile ? '' : '30%',
            paddingRight: (props) => props.isMobile ? 0 : theme.spacing(4),
        },

        contactOtherInfo: {
            display: (props) => props.isMobile ? 'none' : 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center',

            "& >:first-child": {
                paddingRight: theme.spacing(2)
            },

            "& >:last-child": {
                color: theme.palette.primary.light
            }
        },

        title: {
            paddingBottom: theme.spacing(3),
            position: 'relative',

            display: 'flex',
            justifyContent: (props) => props.isMobile ? 'center' : 'flex-end',

            "&:before": {
                content: '""',
                position: 'absolute',
                width: '50%',
                bottom: 0,
                margin: 'auto',
                left: '25%',
                borderBottom: `5px solid ${theme.palette.primary.dark}`,
                visibility: (props) => props.isMobile ? 'visible' : 'hidden',
            },
        },

        content: {
            paddingTop: (props) => props.isMobile ? theme.spacing(4) : 0,
            margin: (props) => props.isMobile ? theme.spacing(2) : 0,
            borderLeft: (props) => props.isMobile ? 'none' : `5px solid ${theme.palette.primary.dark}`,
            paddingLeft: (props) => props.isMobile ? 0 : theme.spacing(4),
            flex: (props) => props.isMobile ? '' : '70%',
        },

        form: {
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',

            '& > *': {
                margin: theme.spacing(2)
            },
        },
    }));

function Contact(props: any) {
    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 0,
    })
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const params: IScreen = {
        isMobile: isMobile,
        inView: inView
    };

    const classes = useStyles(params);

    return (
        <div className={classes.root} id='contact'>
            <Container>
                <div className={classes.wrapper}>
                    <div ref={ref} />
                    <div className={classes.titleContainer}>
                        <div className={classes.title}>
                            <Typography variant='h4'>CONTACT ME</Typography>
                        </div>
                        <div className={classes.contactOtherInfo}>
                            <Typography>michael.cajandig@gmail.com</Typography>
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </div>
                        <div className={classes.contactOtherInfo}>
                            <Typography>Makati, Philippines</Typography>
                            <FontAwesomeIcon icon={faMapMarker} size="lg" />
                        </div>
                    </div>

                    <div className={classes.content}>
                        <form className={classes.form} noValidate autoComplete="off">
                            <TextField id="name" label="Name" variant="outlined" />
                            <TextField id="email" label="Email" variant="outlined" />
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={8}
                                label="Your Message"
                                variant="outlined"
                            />

                            <Button variant="contained" color="primary">
                                SEND
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Contact;