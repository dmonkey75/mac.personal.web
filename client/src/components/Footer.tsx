import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.dark,
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.primary.light,
        cursor: 'pointer',

        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: theme.spacing(2)
        },


        "& > *": {
            margin: theme.spacing(2),
        },

        "& > :hover": {
            color: theme.palette.primary.main
        }
    },

    link: {
        color: theme.palette.primary.light,

        "& > :hover": {
            backgroundColor: theme.palette.primary.dark
        }
    },

    socialIcon: {
        marginRight: theme.spacing(1)
    }
}));

function Footer(props: any) {

    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link className={classes.link} underline="none" href="https://linkedin.com/in/michaelcajandig" onClick={preventDefault}>
                <Typography>
                    <FontAwesomeIcon className={classes.socialIcon} icon={faLinkedin} size="lg" />
                    LinkedIn
                </Typography>
            </Link>

            <Link className={classes.link} underline="none" href="https://github.com/dmonkey75" onClick={preventDefault}>
                <Typography>
                    <FontAwesomeIcon className={classes.socialIcon} icon={faGithub} size="lg" />
                    Github
                </Typography>
            </Link>

            <Link className={classes.link} underline="none" onClick={() => console.log('Downloading...')} >
                <Typography>
                    <FontAwesomeIcon className={classes.socialIcon} icon={faFileDownload} size="lg" />
                    Download Resumé
                </Typography>
            </Link>
        </div>
    );
}

export default Footer;