import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import useMotion from './useMotion';
import { routes } from '@constants';
import Box from '@material-ui/core/Box';

export default () => {
    const location = useLocation();
    const {
        currentCard,
        options,
        currentPrecision,
        currentPreset,
        onChange,
        presetHandler,
        precisionHandler
    } = useMotion(location.pathname)

    return (
        <Box>
            <TransitionGroup>
                <Transition
                    key={ location.pathname }
                    timeout={ 500 }
                    mountOnEnter={true} 
                    unmountOnExit={true} 
                    appear={true}
                >
                    {status => (
                        <Switch location={ location }>
                        {
                            routes.map((route, i) => (
                                <Route
                                    key={i}
                                    exact path={route.path}
                                    render={ () => (
                                        <route.Card
                                            status={status === 'entered' ? true : false}
                                            data={{currentCard, options, currentPreset, currentPrecision}}
                                            onChange={onChange}
                                            presetHandler={presetHandler}
                                            precisionHandler={precisionHandler}
                                        />
                                    )}
                                />
                            ))
                        }
                        </Switch>
                    )}
                </Transition>
            </TransitionGroup>
        </Box>
    );
};