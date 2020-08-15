import React, { useState } from 'react';
import { makeStyles, useTheme, createStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Burger } from './../elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {

        },

        burger: {
            paddingRight: theme.spacing(2),
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            display: "flex",
            justifyContent: "flex-end"
        },

        mobile: (isToggled: boolean) => ({
            zIndex: 998,
            backgroundColor: "rgba(0,0,0, 0.9)",
            position: 'absolute',
            top: 0,
            right: 0,
            transition: '0.5s',
            width: isToggled ? '100%' : '0',
            paddingTop: theme.spacing(8),
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

        web: {
            background: `linear-gradient(0deg, rgba(16,16,16,0.4), rgba(16, 16, 16, 0.4))`,
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
    const [toggle, setToggle] = useState(false);

    const classes = useStyles(toggle);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const navigationClass = isMobile ? classes.mobile : classes.web;

    return (
        <div>
            {(() => {
                if (isMobile) {
                    return <div className={classes.burger}>
                        <Burger OnClick={() => { setToggle(!toggle); }} isToggled={toggle} />
                    </div>
                }
            })()}

            <nav className={navigationClass}>
                <ul>
                    <li><a href="#about" onClick={() => { setToggle(!toggle) }}>ABOUT</a></li>
                    <li><a href="#skills" onClick={() => { setToggle(!toggle) }}>SKILLS</a></li>
                    <li><a href="#experience" onClick={() => { setToggle(!toggle) }}>EXPERIENCE</a></li>
                    <li><a href="#contact" onClick={() => { setToggle(!toggle) }}>CONTACT</a></li>
                    <li>
                        <div className={classes.socialIcons}>
                            <a href="/"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
                            <a href="/"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;