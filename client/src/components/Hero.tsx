import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'; 
import Button from '@material-ui/core/Button';
import HeroImage from './../images/bg_01.jpg';
import { Navigation } from './index';

const useStyles = makeStyles(theme => ({
    background: { 
        background:`linear-gradient(0deg, rgba(24,24,24,0.6), rgba(24, 24, 24, 0.6)), url(${HeroImage})`, 
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',  
        position: 'relative',
        overflowX: 'hidden',
        overflowY: 'hidden',
 
        [theme.breakpoints.down('md')]: {
            backgroundAttachment: 'scroll',
        },

        [theme.breakpoints.up('md')]: {
            backgroundAttachment: 'fixed',
        }, 
    },

    headline: {
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },

    headlineText: {
        color: theme.palette.primary.contrastText
    },

    margin: {
        margin: theme.spacing(1),
      },

}));
 
function download() {
    fetch('Michael-Cajandig-Resume.pdf')
        .then(response => {
            response.blob().then(blob => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = 'Michael Cajandig - Resume.pdf';
                a.click();
            }); 
    });
}

function Hero(props: any) {

    const classes = useStyles();

    return (
        <>
            <div className={classes.background}>
                <Navigation />
                <div className={classes.headline}>
                    <Typography component="div" variant='h1'>
                        <Box className={classes.headlineText} fontWeight="fontWeightBold" m={1}>
                            MICHAEL CAJANDIG
                        </Box>
                    </Typography>
                    <Typography component="div" variant='h6'>
                        <Box className={classes.headlineText} fontWeight="fontWeightBold" m={1}>
                            WEB/API DEVELOPER
                        </Box>
                    </Typography>
                    <Button variant="contained" size="large" color="secondary" className={classes.margin} onClick={() => download()}>
                        DOWNLOAD RESUMÉ
                    </Button>
                </div>
            </div> 
        </>
    );
}

export default Hero;