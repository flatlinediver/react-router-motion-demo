import React, {memo} from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Transition, TransitionGroup } from 'react-transition-group'
import {routes} from './routes'
import {useMotion} from './useMotion'

const ViewsComponent = memo(({ location }) => {
    let pathname = location.pathname
    const {
        currentCard,
        options,
        currentPrecision,
        currentPreset,
        onChange,
        presetHandler,
        precisionHandler
    } = useMotion(pathname)

    return(
        <React.Fragment>
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
        </React.Fragment>
    )
})

export const Views = withRouter(ViewsComponent)