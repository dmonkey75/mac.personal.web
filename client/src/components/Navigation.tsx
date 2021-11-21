import React, { useState } from 'react';
import { makeStyles, useTheme, createStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Burger } from './../elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as Logo } from '../images/icon.svg'; 
import { Theme } from '@material-ui/core';

interface IParam {
    isToggled: boolean 
}

const useStyles = makeStyles<Theme, IParam>((theme: Theme) =>
    createStyles({
        root: {
            background: `linear-gradient(0deg, rgba(16,16,16,0.4), rgba(16, 16, 16, 0.4))` 
        },

        burger: {
            marginTop: theme.spacing(-5),
            marginRight: theme.spacing(5),
        },

        mobile: ({
            zIndex: 998,
            backgroundColor: "rgba(0,0,0, 0.9)",
            position: 'absolute',
            top: 0,
            right: 0,
            transition: '0.5s',
            width: (props) => props.isToggled ? '100%' : '0',
            overflowX: 'hidden',
            overflowY: 'hidden',
            height: '100vh',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            "& ul": {
                listStyleType: "none",
                textAlign: "center",
                fontSize: 28,

                "& li":
                {
                    paddingRight: theme.spacing(2),
                    paddingBottom: theme.spacing(2),
                    "& a": {
                        textDecoration: "none",
                        color: theme.palette.primary.main,

                        "&:hover": {
                            color: theme.palette.primary.dark
                        }
                    },
                }
            },
        }),

        logo: {
            fill: theme.palette.primary.main,
        },

        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            height: theme.spacing(8),

            [theme.breakpoints.up('xs')]: {
                maxWidth: '100%',
                marginLeft: theme.spacing(2),
                marginRight: theme.spacing(2)
            },

            [theme.breakpoints.up('md')]: {
                maxWidth: '90%',
                margin: 'auto',
            },
        },

        web: {
            padding: theme.spacing(.5),

            "& ul": {
                display: "flex",
                justifyContent: "flex-end",
                flexFlow: "row",
                listStyleType: "none",
                textAlign: "right",
                fontWeight: 700,

                "& li":
                {
                    marginRight: theme.spacing(6),

                    "& a": {
                        textDecoration: "none",
                        color: theme.palette.primary.main,

                        "&:hover": {
                            color: theme.palette.primary.dark
                        }
                    }
                },

                "& >:last-child": {
                    marginRight: 0,
                }
            }
        },

        socialIcons: {
            "& >:last-child": {
                marginLeft: theme.spacing(2),
            }
        }
    }));
 
function Navigation(props: any) { 
    const theme = useTheme(); 
    const [toggle, setToggle] = useState(false);
    const classes = useStyles({ isToggled : toggle }); 
    const isMobile = useMediaQuery(theme.breakpoints.down('xs')); 
    const navigationClass = isMobile ? classes.mobile : classes.web;
 
    return (
        <div className={classes.root}>
            <nav className={classes.container}>
                <div className={classes.logo}>
                    <a href="/"> 
                        <Logo width='12%'/> 
                    </a> 
                </div>

                {(() => {
                    if (isMobile) {
                        return <div className={classes.burger}>
                            <Burger OnClick={() => { setToggle(!toggle); }} isToggled={toggle} />
                        </div>
                    }
                })()}

                <div className={navigationClass}>
                    <ul>
                        <li><a href="#about" onClick={() => { setToggle(!toggle) }}>ABOUT</a></li>
                        <li><a href="#skills" onClick={() => { setToggle(!toggle) }}>SKILLS</a></li>
                        <li><a href="#experience" onClick={() => { setToggle(!toggle) }}>EXPERIENCE</a></li>
                        <li><a href="#contact" onClick={() => { setToggle(!toggle) }}>CONTACT</a></li>
                        <li>
                            <div className={classes.socialIcons}>
                                <a href="https://linkedin.com/in/michaelcajandig"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
                                <a href="https://github.com/dmonkey75"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Navigation;
