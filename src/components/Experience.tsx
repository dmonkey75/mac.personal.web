import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles, useTheme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useInView } from 'react-intersection-observer';
import { IScreen } from '../elements/Interfaces';
import Container from './Container';
import { withStyles } from "@material-ui/core/styles";
import clsx from 'clsx';

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

const useStyles = makeStyles<Theme, IScreen>((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "#18181B", 
        },

        wrapper: {
            display: (props) => props.isMobile ? 'block' : 'flex',
            overflow: 'hidden',
 
            paddingTop: (props) => props.isMobile ? theme.spacing(16) : theme.spacing(24),
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
            marginTop: (props) => props.isMobile ? 0 : theme.spacing(-12), 
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
            flex: (props) => props.isMobile ? '' : '70%', 
            
            "& > :not(:last-child)": {
                borderLeft: (props) => props.isMobile ? 'none' : `5px solid ${theme.palette.primary.dark}`, 
                paddingLeft: (props) => props.isMobile ? 0 : theme.spacing(4),
            },

            "& >:last-child": {
                borderLeft:  `none`,
                paddingLeft: (props) => props.isMobile ? 0 : theme.spacing(4),
            }
        },

        experience: {
            paddingBottom: theme.spacing(4), 

            marginLeft: theme.spacing(2)
        },

        experienceLastItem: {
            paddingBottom: 0, 
        },

        presentYear: {
            position: 'absolute',
            marginLeft: theme.spacing(-27),
            paddingTop: theme.spacing(.5),
        },

        year: {
            position: 'absolute',
            marginLeft: theme.spacing(-33),
            paddingTop: theme.spacing(.5),
        },
 
        circle: {
            borderRadius: "50%",
            width: 34,
            height: 34,
            padding: 10,
            background: theme.palette.primary.dark,
            color: theme.palette.common.white,
            textAlign: "center",
            position: 'absolute',
            marginLeft: theme.spacing(-6.5), 
            paddingTop: theme.spacing(1),
            visibility: (props) => props.isMobile ? 'hidden' : 'visible'
        },
 
        lastCircleItem: { 
            marginLeft: theme.spacing(-6),
        },

        role: {
            //color: theme.palette.primary.light 
        },

        company: {

        },

        summary: {
            paddingTop: theme.spacing(4)
        },
 
    }));

function Works(props: any) {
    const [ref, inView, entry] = useInView({
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
        <div className={classes.root} id='experience'>
            <Container>
                <div className={classes.wrapper}>
                    <div ref={ref} />
                    <div className={classes.titleContainer}>
                        <div className={classes.title}>
                            <WhiteTextTypography variant='h4'>EXPERIENCE</WhiteTextTypography>
                        </div>
                    </div>

                    <div className={classes.content}>
                        <div className={classes.experience}>
                            <WhiteTextTypography className={classes.presentYear}>2015.11.23-Present</WhiteTextTypography>
                            <div className={classes.circle}>4</div>
                            <Typography className={classes.role} variant='h6'>Systems Developer</Typography>
                            <WhiteTextTypography className={classes.company}>Grundfos IS Operation Centre Philippines</WhiteTextTypography>
                            <WhiteTextTypography variant='subtitle2'>26F Cybergate Beta Building, Topaz & Ruby Roads, Ortigas, Pasig City, Philippines</WhiteTextTypography>
                            <WhiteTextTypography variant='body1' className={classes.summary}>
                                Develop cloud based solutions with microsoft tools and technologies. Develop frontend/backend applications. Building React applications and Restful API’s. Work closely with consultants, project managers and project owners.
                            </WhiteTextTypography>
                            <WhiteTextTypography variant='body1' className={classes.items}>
                                <ul>
                                    <li>
                                        Designed solution to properly handle firmware updates based from pump configuration.
                                     </li>
                                </ul>
                                <ul>
                                    <li>
                                        Successfully developed and deployed restful api's to serve pump firmwares.
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Successfully implemented a feature to secure license keys for firmwares.
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Assigned at company's office in Indiana, US in 2016 & 2018 for short term assignment for project handover to continue develop and support legacy systems.
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Assigned at company's headquarters in Denmark in 2017 & 2019 for short term assignment for project handover and to kick off new azure based projects.
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Successfully delivered projects on specified budget and with no major issues.
                                    </li>
                                </ul>
                            </WhiteTextTypography>
                        </div>

                        <div className={classes.experience}>
                            <WhiteTextTypography className={classes.year}>2014.09.15 - 2015.11.30</WhiteTextTypography>
                            <div className={classes.circle}>3</div>
                            <Typography className={classes.role} variant='h6'>Software Engineer</Typography>
                            <WhiteTextTypography className={classes.company}>FactSet Philippines, Inc.</WhiteTextTypography>
                            <WhiteTextTypography variant='subtitle2'>Taguig City, Philippines </WhiteTextTypography>
                            <WhiteTextTypography variant='body1' className={classes.summary}>
                                Member of insfrastructure team to develop generic libraries to support other teams.
                            </WhiteTextTypography>
                            <WhiteTextTypography variant='body1'>
                                <ul>
                                    <li>
                                        Develop custom controls that can be integrated into other projects.
                                     </li>
                                </ul>
                                <ul>
                                    <li>
                                        Successfully developed WPF MVVM projects with implementation of organization coding standards.
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Sucessfully migrated foxpro application to WPF using C#.
                                    </li>
                                </ul>
                            </WhiteTextTypography>
                        </div>

                        <div className={classes.experience}>
                            <WhiteTextTypography className={classes.year}>2012.05.28 - 2014.09.12</WhiteTextTypography>
                            <div className={classes.circle}>2</div>
                            <Typography className={classes.role} variant='h6'>Programmer/Analyst</Typography>
                            <WhiteTextTypography className={classes.company}>Manulife Business Processing Services</WhiteTextTypography>
                            <WhiteTextTypography variant='subtitle2'>Quezon City, Philippines </WhiteTextTypography>
                            <WhiteTextTypography variant='body1' className={classes.summary}>
                                Work in a Team to develop and maintain existing applications. Follow coding standards and procedures on Planning, Requirements, Design, Implementation, Deployment and Maintenance.
                                Use C#.Net and VB.Net. Windows Based and Web Based Application. Use of Entity Framework and implement a 3-Tier architecture.
                            </WhiteTextTypography>
                            <WhiteTextTypography variant='body1'>
                                <ul>
                                    <li>
                                        Successfully developed and delivered VB6 applications for clients.
                                     </li>
                                </ul>
                                <ul>
                                    <li>
                                        Initiated development from VB6 to C#.Net.
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Successfully implemented coding standard for the team.
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Selected to join the group of developers to develop company's HR system to handle application process.
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Received Top Performer Award during company's annual Performers Night event in July 2014.
                                    </li>
                                </ul>
                            </WhiteTextTypography>
                        </div>

                        <div className={clsx(classes.experience, classes.experienceLastItem)}>
                            <WhiteTextTypography className={classes.year}>2008.07.01 - 2012.04.30</WhiteTextTypography>
                            <div className={clsx(classes.circle, classes.lastCircleItem)}>1</div>
                            <Typography className={classes.role} variant='h6'>Systems Developer</Typography>
                            <WhiteTextTypography className={classes.company}>Kinetique Systems, Inc.</WhiteTextTypography>
                            <WhiteTextTypography variant='subtitle2'>Davao City, Philippines </WhiteTextTypography>
                            <WhiteTextTypography variant='body1' className={classes.summary}>
                                Develop windows-based application. Worked with a team and build libraries.
                                Create Stored Procedure, UDF, Views, UDT, Indices and Triggers and optimize large queries.
                                Create Reports with Crystal Reports for data presentation. Create web services
                            </WhiteTextTypography>
                            <WhiteTextTypography variant='body1'>
                                <ul>
                                    <li>
                                        Work with a smart/client architechture systems.
                                     </li>
                                </ul>
                                <ul>
                                    <li>
                                        Successfully deployed ERP applications to client site.
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Enhance sql queries performance for large transactions for Accounting system.
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Work with integrated systems Inventory, POS and Accounting.
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Successfully developed accounting sytem from specs into a working system.
                                    </li>
                                </ul>
                            </WhiteTextTypography>
                        </div> 
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Works; 