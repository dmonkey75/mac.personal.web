import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles, useTheme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useInView } from 'react-intersection-observer';
import { IScreen } from '../elements/Interfaces';
import Container from './Container';

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
            justifyContent: (props) => props.isMobile ? 'center' : 'flex-end',
            flex: (props) => props.isMobile ? '' : '30%',

            paddingRight: (props) => props.isMobile ? 0 : theme.spacing(4),
        },

        title: {
            paddingBottom: theme.spacing(3),
            position: 'relative',
             
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

        certifications: {
            paddingTop: theme.spacing(2),
        },

        certificationEntry: {
            paddingTop: theme.spacing(2),

            "& >:last-child": {
                paddingBottom: theme.spacing(2)
            }
        }
    }));

function About(props: any) {
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
        <div className={classes.root} id='about'>
            <Container>
                <div className={classes.wrapper}>
                    <div ref={ref} />
                    <div className={classes.titleContainer}>
                        <div className={classes.title}>
                            <Typography variant='h4'>ABOUT ME</Typography>
                        </div>
                    </div>

                    <div className={classes.content}>
                        <Typography variant='body1'>
                            Microsoft Certified Professional with 11 years of solid experience in .Net with two Microsoft certifications (MCTS).
                            Has strong knowledge in object-oriented programming. Skilled in building API and Web Based applications.
                            Primary programming language is C#. Proficient in MS SQL and experienced working with Azure and On-Premise environment.
                            Completed Bachelor of Science  in Computer Science from Notre Dame of Marbel University in 2007.
                        </Typography>

                        <div className={classes.certifications}>
                            <Typography variant="h6" >
                                Certifications
                            </Typography>

                            <div className={classes.certificationEntry}>
                                <Typography variant="body1" >
                                    2011.09.27 TS: Accessing Data with Microsoft .Net Framework 4
                                </Typography>

                                <Typography variant="body1" >
                                    2011.08.12  TS: Windows Applications Development with Microsoft .NET Framework 4
                                </Typography>
                            </div>

                            <Typography variant="h6" >
                                Certification Shared Access
                            </Typography>

                            <div className={classes.certificationEntry}>
                                <Typography variant="body1" >
                                    Transcript Viewing Page : <a href="https://mcp.microsoft.com/Anonymous/Transcript/Validate">Here</a>
                                </Typography>
                                <Typography variant="body1" >
                                    Transcript ID : 1230422
                                </Typography>
                                <Typography variant="body1" >
                                    Access Code : 09201247388
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default About;