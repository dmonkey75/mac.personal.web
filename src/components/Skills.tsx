import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles, useTheme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Bar } from './../elements';
import { useInView } from 'react-intersection-observer';
import { IScreen } from '../elements/Interfaces';

const useStyles = makeStyles<Theme, IScreen>((theme: Theme) =>
    createStyles({
        root: {
            display: (props) => props.isMobile ? 'inline' : 'flex',
            overflow: 'hidden'
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

            paddingTop: theme.spacing(4),
            transform: (props) => props.inView ? `translateY(${theme.spacing(4) * -1}px)` : '',
            transition: "1s",

            "&:before": {
                content: '""',
                position: 'absolute',
                width: '50%',
                bottom: 0,
                margin: 'auto',
                left: '25%',
                borderBottom: `5px solid ${theme.palette.primary.dark}`,
                visibility: (props) => props.isMobile ? 'visible' : 'hidden'
            }
        },

        content: {
            //paddingTop: (props) => props.isMobile ? theme.spacing(4) : 0,
            margin: (props) => props.isMobile ? theme.spacing(2) : 0,
            borderLeft: (props) => props.isMobile ? 'none' : `5px solid ${theme.palette.primary.dark}`,
            paddingLeft: (props) => props.isMobile ? 0 : theme.spacing(4),

            flex: (props) => props.isMobile ? '' : '70%',

            "& > :not(first-child)": {
                paddingBottom: theme.spacing(4)
            },

            "& >:last-child": {
                paddingBottom: 0
            }
        },

        group: {
            "& >:last-child": {
                paddingBottom: theme.spacing(2)
            }
        },

        skill: {
            display: 'flex',
            flexFlow: 'wrap',
            alignItems: 'center',
            paddingTop: theme.spacing(2)
        },

        skillName: {
            flex: '30%',
        },

        bar: {
            flex: '70%', 
        },

    }));

function Skills(props: any) {
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
        <div className={classes.root} id='skills'>
            <div ref={ref} />
            <div className={classes.titleContainer}>
                <div className={classes.title}>
                    <Typography variant='h4'>SKILLS</Typography>
                </div>
            </div>

            <div className={classes.content}>
                <div className={classes.group}>
                    <Typography variant="h6" >
                        Frameworks & Libraries
                    </Typography>

                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            C#
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={80} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            Typescript
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={70} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            ASP.Net Core
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={80} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            MS SQL
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={85} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            ReactJS
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={70} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            EF Core
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={80} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            CSS
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={70} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            React Hooks
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={70} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            Redux
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={70} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            Serilog
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={80} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            Mocking (Moq)
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={80} />
                        </div>
                    </div>
                </div>

                <div className={classes.group}>
                    <Typography variant="h6" >
                        Azure
                    </Typography>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            Web App
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={80} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            Web Job
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={80} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            Function App
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={80} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            Key Vault
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={75} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            Storage
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={80} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            Active Directory
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={75} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            App Insights
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={80} />
                        </div>
                    </div>
                </div>

                <div className={classes.group}>
                    <Typography variant="h6" >
                        Tools
                    </Typography>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            VS Studio
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={80} />
                        </div>
                    </div> 
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            VS Code
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={80} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            Azure Devops
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={70} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            SSMS
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={85} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            Postman
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={85} />
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <Typography className={classes.skillName}>
                            Git for Windows
                        </Typography>
                        <div className={classes.bar}>
                            <Bar value={80} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;