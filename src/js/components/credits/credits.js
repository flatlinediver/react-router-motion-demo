import React from 'react';
import GitHub from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        marginRight: theme.spacing(2),
    },
    githubWrapper: {
        cursor: 'pointer',
        zIndex: 999
    },
    github: {
        color: 'white',
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography edge="start" variant="h6" component="h1" className={classes.title}>
                        Animating React route changes using React Motion
                    </Typography>
                    <Button href="https://github.com/flatlinediver/react-router-motion-demo" fontSize="inherit" aria-label="Github" className={classes.githubWrapper}>
                        <GitHub className={classes.github}/>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};