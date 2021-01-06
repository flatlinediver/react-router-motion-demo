import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Views from '@views';
import { StylesProvider } from '@material-ui/core/styles';

render(
    <Router>
        <StylesProvider injectFirst>
            <Views />
        </StylesProvider>
    </Router>,
    document.getElementById('root')
);