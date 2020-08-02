import React from 'react';
import { makeStyles, useTheme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            display: (isMobile) => isMobile ? 'block' : 'flex',
            overflow: 'hidden',  
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

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles(isMobile);

    return (
        <div className={classes.root} id='about'>
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
                        Certications
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
    );
}

export default About;