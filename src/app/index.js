import React, { memo, StrictMode } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Basket from '../page/Basket';
import { AppProvider } from '../context';
import Home from '../page/Home';

const App = () => {
    return (
        <StrictMode>
            <Router>
                <AppProvider>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/basket" component={Basket} />
                    </Switch>
                </AppProvider>
            </Router>
        </StrictMode>
    );
};

export default memo(App);