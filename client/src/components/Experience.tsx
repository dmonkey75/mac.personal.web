import React from 'react';
import { Theme, ThemeProvider } from '@material-ui/core';
import { makeStyles, withStyles, useTheme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useInView } from 'react-intersection-observer';
import { IScreen } from '../elements/Interfaces';
import Container from './Container';
import clsx from 'clsx';
  
const GreyTextTypography = withStyles((theme: Theme) => ({
    root: {
        color: theme.palette.grey[300]
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
            paddingTop: (props) => props.isMobile ? theme.spacing(8) : 0, 
            flex: (props) => props.isMobile ? '' : '70%',

            marginLeft: theme.spacing(2),

            "& > :not(:last-child)": { 
                paddingLeft: (props) => props.isMobile ? theme.spacing(3) : theme.spacing(4),
                borderLeft: `5px solid ${theme.palette.primary.dark}`,
            },

            "& >:last-child": {
                borderLeft: `none`,  
                paddingLeft: (props) => props.isMobile ? theme.spacing(4) : theme.spacing(4),
            },

            "& > * li": {
                color: theme.palette.grey[300]
            }
        },

        experience: {
            paddingBottom: theme.spacing(4), 
        },

        experienceLastItem: {
            paddingBottom: 0,
        },

        year: { 
            color: (props) => props.isMobile ? theme.palette.primary.main : '',
            fontSize: (props) => props.isMobile ? theme.typography.h6.fontSize : theme.typography.body1.fontSize,
            fontWeight: (props) => props.isMobile ? theme.typography.h6.fontWeight :  theme.typography.body1.fontWeight,
 
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
            paddingTop: theme.spacing(1),  
            marginLeft:  (props) => props.isMobile ? theme.spacing(-5.5) : theme.spacing(-6.5),
            marginTop: (props) => props.isMobile ? theme.spacing(-3.5) : 0,
        },

        lastCircleItem: { 
            marginLeft: (props) => props.isMobile ? theme.spacing(-6) : theme.spacing(-6),
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
                            <GreyTextTypography variant='h4'>EXPERIENCE</GreyTextTypography>
                        </div>
                    </div>

                    <div className={classes.content}>
                        <div className={classes.experience}>
                            <GreyTextTypography className={clsx(classes.year, classes.presentYear)}>2015.11.23 - Present</GreyTextTypography>
                            <div className={classes.circle}>4</div>
                            <Typography variant='h6'>Systems Developer</Typography>
                            <GreyTextTypography>Grundfos IS Operation Centre Philippines</GreyTextTypography>
                            <GreyTextTypography variant='subtitle2'>26F Cybergate Beta Building, Topaz & Ruby Roads, Ortigas, Pasig City, Philippines</GreyTextTypography>
                            <GreyTextTypography variant='body1' className={classes.summary}>
                                Work in a scrum team to develop cloud based solutions in Azure. Design and Build React applications and Restful API’s.
                                Work closely with QA's, consultants, project managers and project owners.
                            </GreyTextTypography>

                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1' className={classes.items}>Designed solution to properly handle firmware updates based from pump configuration.</GreyTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1' className={classes.items}>Successfully developed and deployed restful api's to serve pump firmwares.</GreyTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1' className={classes.items}>Successfully implemented a feature to secure license keys for firmwares.</GreyTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1' className={classes.items}>Assigned at company's office in Indiana, US in 2016 & 2018 for short term assignment, project handover and to continue develop and support legacy systems.</GreyTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1' className={classes.items}>Assigned at company's headquarters in Denmark in 2017 & 2019 for short term assignment, project handover and to kick off new azure based projects.</GreyTextTypography>
                                </li>
                            </ul> 
                        </div>

                        <div className={classes.experience}>
                            <GreyTextTypography className={clsx(classes.year, classes.previousYear)}>2014.09.15 - 2015.11.30</GreyTextTypography>
                            <div className={classes.circle}>3</div>
                            <Typography variant='h6'>Software Engineer</Typography>
                            <GreyTextTypography>FactSet Philippines, Inc.</GreyTextTypography>
                            <GreyTextTypography variant='subtitle2'>Taguig City, Philippines </GreyTextTypography>
                            <GreyTextTypography variant='body1' className={classes.summary}>
                                Member of insfrastructure team to develop generic libraries to support other development teams.
                            </GreyTextTypography>

                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1'>Develop custom controls that can be integrated into other projects.</GreyTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1'>Sucessfully migrated foxpro application to WPF using C#.</GreyTextTypography>
                                </li>
                            </ul> 
                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1'>Primarily develop WPF MVVM solutions.</GreyTextTypography>
                                </li>
                            </ul>
                        </div>

                        <div className={classes.experience}>
                            <GreyTextTypography className={clsx(classes.year, classes.previousYear)}>2012.05.28 - 2014.09.12</GreyTextTypography>
                            <div className={classes.circle}>2</div>
                            <Typography variant='h6'>Programmer/Analyst</Typography>
                            <GreyTextTypography>Manulife Business Processing Services</GreyTextTypography>
                            <GreyTextTypography variant='subtitle2'>Quezon City, Philippines </GreyTextTypography>
                            <GreyTextTypography variant='body1' className={classes.summary}>
                                Work in a Team to develop and maintain existing applications. Follow coding standards and procedures on Planning, Requirements, Design, Implementation, Deployment and Maintenance.
                                Build small-sized solutions from ground up. Rewrite projects from VB.Net to C#.
                            </GreyTextTypography>

                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1'>Successfully developed and delivered VB6 applications for clients.</GreyTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1'>Initiated rewriting of projects from VB/VB6 to C#.Net.</GreyTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1'>Implemented coding standard with the team.</GreyTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1'>Selected to join the group of developers to develop company's HR system to handle application process.</GreyTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1'>Received Top Performer Award during company's annual Performers Night event in July 2014.</GreyTextTypography>
                                </li>
                            </ul>

                        </div>

                        <div className={clsx(classes.experience, classes.experienceLastItem)}>
                            <GreyTextTypography className={clsx(classes.year, classes.previousYear)}>2008.07.01 - 2012.04.30</GreyTextTypography>
                            <div className={clsx(classes.circle, classes.lastCircleItem)}>1</div>
                            <Typography variant='h6'>Systems Developer</Typography>
                            <GreyTextTypography>Kinetique Systems, Inc.</GreyTextTypography>
                            <GreyTextTypography variant='subtitle2'>Davao City, Philippines </GreyTextTypography>
                            <GreyTextTypography variant='body1' className={classes.summary}>
                                Work in a team to develop end-to-end solutions. Build windows based applications using web forms and integrate with SOAP web services. 
                                Follow team coding standard, best practices and peer review. Create Stored Procedure, UDF, Views, UDT, Indices, Triggers and optimize large queries. 
                            </GreyTextTypography>

                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1'>Work with a smart/client architechture systems.</GreyTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1'>Successfully deployed ERP applications on client site.</GreyTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1'>Enhance sql queries performance for large transactions.</GreyTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1'>Work with integrated systems Inventory, POS and Accounting.</GreyTextTypography>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1'>Develop reports with Crystal Reports for data presentation.</GreyTextTypography>
                                </li>
                            </ul> 
                            <ul>
                                <li>
                                    <GreyTextTypography variant='body1'>Successfully developed systems from specs into a working system.</GreyTextTypography>
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