import React from 'react';
import { makeStyles, useTheme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Bar } from './../elements';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            display: (isMobile) => isMobile ? 'inline' : 'flex',
            overflow: 'hidden'
        },

        titleContainer: {
            display: 'flex',
            justifyContent: (isMobile) => isMobile ? 'center' : 'flex-end',
            flex: (isMobile) => isMobile ? '' : '30%',

            paddingRight: (isMobile) => isMobile ? 0 : theme.spacing(4),
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
                visibility: (isMobile) => isMobile ? '' : 'hidden'
            }
        },

        content: {
            paddingTop: (isMobile) => isMobile ? theme.spacing(4) : 0,
            margin: (isMobile) => isMobile ? theme.spacing(2) : 0,
            borderLeft: (isMobile) => isMobile ? 'none' : `5px solid ${theme.palette.primary.dark}`,
            paddingLeft: (isMobile) => isMobile ? 0 : theme.spacing(4),

            flex: (isMobile) => isMobile ? '' : '70%',

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

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles(isMobile);

    return (
        <div className={classes.root} id='skills'>
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