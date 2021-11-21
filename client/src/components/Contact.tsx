import React, { useState } from 'react';
import axios from 'axios'
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
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import EmailValidator from 'email-validator';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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

export interface IMessage {
    open: boolean,
    message: string,
    severity: 'success' | 'error'
}

function Contact(props: any) {
    const [ref, inView] = useInView({
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

    const [inputs, setInputs] = useState({ name: '', email: '', text: '' })

    const [message, setMessage] = React.useState<IMessage>({ open: false, message: '', severity: 'success' });

    const handleClose = () => {
        setMessage({ ...message, open: false });
    };

    const handleChange = async (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target
        setInputs(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        const { name, email, text } = inputs

        if (EmailValidator.validate(email)) {
            axios.post('/mail', {
                email,
                name, 
                text: text
            })

            setMessage({ open: true, message: 'Message has been sent succesfully.', severity: 'success' });

            setInputs({ name: '', email: '', text: '' })
        }
        else {
            setMessage({ open: true, message: 'Email is not valid.', severity: 'error' });
        }
    };

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
                        <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
                            <TextField name="name" required label="Your Name" variant="outlined" value={inputs.name} onChange={handleChange} />
                            <TextField name="email" required label="Your Email" variant="outlined" value={inputs.email} onChange={handleChange} />
                            <TextField
                                name="text"
                                required
                                multiline
                                rows={8}
                                label="Your Message"
                                variant="outlined"
                                value={inputs.text}
                                onChange={handleChange}
                            />

                            <Button type="submit" variant="contained" color="primary">
                                SEND
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                autoHideDuration={3000}
                open={message.open}
                onClose={handleClose}
            >
                <Alert severity={message.severity}>{message.message}</Alert>
            </Snackbar>
        </div>
    );
}

export default Contact;