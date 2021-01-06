import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export default ({ currentCard }) => (
    <Box width="100%" margin="16px 0 0">
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
        >
            <Grid item xs={6}>
                <Button
                    component={Link} to={currentCard.prev}
                    variant="contained"
                    color="primary"
                    startIcon={<ArrowBack />}
                    fullWidth
                >
                    Prev
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button
                    component={Link} to={currentCard.next}
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForward />}
                    fullWidth
                >
                    Next
                </Button>
            </Grid>
        </Grid>
    </Box>
);