import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Views from '@views';
import { StylesProvider } from '@material-ui/core/styles';
import { Credits } from '@components';
import Box from '@material-ui/core/Box';
import { Favicon } from './utils/favicon';

render(
    <Router>
        <Favicon />
        <StylesProvider injectFirst>
            <Box>
                <Credits />
                <Views />
            </Box>
        </StylesProvider>
    </Router>,
    document.getElementById('root')
);