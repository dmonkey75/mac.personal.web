import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles, withStyles, useTheme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useInView } from 'react-intersection-observer';
import { IScreen } from '../elements/Interfaces';
import Container from './Container';
import clsx from 'clsx';

const WhiteTextTypography = withStyles((theme: Theme) => ({
    root: {
        color: theme.palette.common.white
    }
}))(Typography);

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
            flex: (props) => props.isMobile ? '' : '70%',

            "& > :not(:last-child)": {
                borderLeft: (props) => props.isMobile ? 'none' : `5px solid ${theme.palette.primary.dark}`,
                paddingLeft: (props) => props.isMobile ? 0 : theme.spacing(4),
            },

            "& >:last-child": {
                borderLeft: `none`,
                paddingLeft: (props) => props.isMobile ? 0 : theme.spacing(4),
            },

            "& > * li": {
                color: theme.palette.common.white
            }
        },

        experience: {
            paddingBottom: theme.spacing(4), 
        },

        experienceLastItem: {
            paddingBottom: 0,
        },

        year: {
            color: (props) => props.isMobile ? theme.palette.primary.main : theme.palette.common.white,
            fontWeight: (props) => props.isMobile ? theme.typography.fontWeightBold : theme.typography.fontWeightRegular,
            position: (props) => props.isMobile ? 'initial' : 'absolute',
            paddingTop: (props) => props.isMobile ? 0 : theme.spacing(.5),
        },

        presentYear: { 
            marginLeft: (props) => props.isMobile ? 0 : theme.spacing(-30),
        },

        previousYear: {  
            position: (props) => props.isMobile ? 'initial' : 'absolute',
            marginLeft: (props) => props.isMobile ? 0 : theme.spacing(-33), 
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

        summary: {
            paddingTop: theme.spacing(4)
        },

    }));

function Works(props: any) {
    const [ref, inView] = useInView({
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
                            <WhiteTextTypography className={clsx(classes.year, classes.presentYear)}>2015.11.23 - Present</WhiteTextTypography>
                            <div className={classes.circle}>4</div>
                            <Typography variant='h6'>Systems Developer</Typography>
                            <WhiteTextTypography>Grundfos IS Operation Centre Philippines</WhiteTextTypography>
                            <WhiteTextTypography variant='subtitle2'>26F Cybergate Beta Building, Topaz & Ruby Roads, Ortigas, Pasig City, Philippines</WhiteTextTypography>
                            <WhiteTextTypography variant='body1' className={classes.summary}>
                                Work in a scrum team to develop cloud based solutions in Azure.
                                Building React applications and Restful API’s.
                                Work closely with QA's, consultants, project managers and project owners.
                            </WhiteTextTypography>

                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1' className={classes.items}>Designed solution to properly handle firmware updates based from pump configuration.</WhiteTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1' className={classes.items}>Successfully developed and deployed restful api's to serve pump firmwares.</WhiteTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1' className={classes.items}>Successfully implemented a feature to secure license keys for firmwares.</WhiteTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1' className={classes.items}>Assigned at company's office in Indiana, US in 2016 & 2018 for short term assignment for project handover and to continue develop and support legacy systems.</WhiteTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1' className={classes.items}>Assigned at company's headquarters in Denmark in 2017 & 2019 for short term assignment for project handover and to kick off new azure based projects.</WhiteTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1' className={classes.items}>Successfully delivered projects on specified budget and with no major issues.</WhiteTextTypography>
                                </li>
                            </ul>
                        </div>

                        <div className={classes.experience}>
                            <WhiteTextTypography className={clsx(classes.year, classes.previousYear)}>2014.09.15 - 2015.11.30</WhiteTextTypography>
                            <div className={classes.circle}>3</div>
                            <Typography variant='h6'>Software Engineer</Typography>
                            <WhiteTextTypography>FactSet Philippines, Inc.</WhiteTextTypography>
                            <WhiteTextTypography variant='subtitle2'>Taguig City, Philippines </WhiteTextTypography>
                            <WhiteTextTypography variant='body1' className={classes.summary}>
                                Member of insfrastructure team to develop generic libraries to support other teams.
                            </WhiteTextTypography>

                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1'>Develop custom controls that can be integrated into other projects.</WhiteTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1'>Successfully developed WPF MVVM projects with implementation of organization coding standards.</WhiteTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1'>Sucessfully migrated foxpro application to WPF using C#.</WhiteTextTypography>
                                </li>
                            </ul>

                        </div>

                        <div className={classes.experience}>
                            <WhiteTextTypography className={clsx(classes.year, classes.previousYear)}>2012.05.28 - 2014.09.12</WhiteTextTypography>
                            <div className={classes.circle}>2</div>
                            <Typography variant='h6'>Programmer/Analyst</Typography>
                            <WhiteTextTypography>Manulife Business Processing Services</WhiteTextTypography>
                            <WhiteTextTypography variant='subtitle2'>Quezon City, Philippines </WhiteTextTypography>
                            <WhiteTextTypography variant='body1' className={classes.summary}>
                                Work in a Team to develop and maintain existing applications. Follow coding standards and procedures on Planning, Requirements, Design, Implementation, Deployment and Maintenance.
                                Use C#.Net and VB.Net. Windows Based and Web Based Application.
                            </WhiteTextTypography>

                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1'>Successfully developed and delivered VB6 applications for clients.</WhiteTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1'>Initiated development from VB6 to C#.Net.</WhiteTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1'>Successfully implemented coding standard for the team.</WhiteTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1'>Selected to join the group of developers to develop company's HR system to handle application process.</WhiteTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1'>Received Top Performer Award during company's annual Performers Night event in July 2014.</WhiteTextTypography>
                                </li>
                            </ul>

                        </div>

                        <div className={clsx(classes.experience, classes.experienceLastItem)}>
                            <WhiteTextTypography className={clsx(classes.year, classes.previousYear)}>2008.07.01 - 2012.04.30</WhiteTextTypography>
                            <div className={clsx(classes.circle, classes.lastCircleItem)}>1</div>
                            <Typography variant='h6'>Systems Developer</Typography>
                            <WhiteTextTypography>Kinetique Systems, Inc.</WhiteTextTypography>
                            <WhiteTextTypography variant='subtitle2'>Davao City, Philippines </WhiteTextTypography>
                            <WhiteTextTypography variant='body1' className={classes.summary}>
                                Develop windows-based application. Worked with a team and build libraries.
                                Create Stored Procedure, UDF, Views, UDT, Indices and Triggers and optimize large queries.
                                Create Reports with Crystal Reports for data presentation. Create web services
                            </WhiteTextTypography>

                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1'>Work with a smart/client architechture systems.</WhiteTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1'>Successfully deployed ERP applications to client site.</WhiteTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1'>Enhance sql queries performance for large transactions for Accounting system.</WhiteTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1'> Work with integrated systems Inventory, POS and Accounting.</WhiteTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <WhiteTextTypography variant='body1'>Successfully developed systems from specs into a working system.</WhiteTextTypography>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Works; 