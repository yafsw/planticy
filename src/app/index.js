import React, { memo, StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../context';
import Home from '../page/Home';

const App = () => {
    return (
        <StrictMode>
            <Router>
                <AppProvider>
                    <Home />
                </AppProvider>
            </Router>
        </StrictMode>
    );
};

export default memo(App);