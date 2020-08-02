import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        height: theme.spacing(8),
        backgroundColor: theme.palette.primary.dark,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  
        color:  theme.palette.primary.light,
        cursor: 'pointer', 
         
        "& > *": {
            margin: theme.spacing(2),
        },

        "& > :hover": {
            color: theme.palette.primary.main
        }
    },

    socialIcon: {
        marginRight: theme.spacing(1)
    }
}));

function Footer(props: any) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography>
                <FontAwesomeIcon className={classes.socialIcon} icon={faLinkedin} size="lg" />
                LinkedIn
            </Typography>
            <Typography>
                <FontAwesomeIcon className={classes.socialIcon} icon={faGithub} size="lg" />
                Github
            </Typography> 
            <Button variant="outlined" size="large" color="primary">
                    DOWNLOAD RESUMÉ
            </Button>
        </div>
    );
}

export default Footer;