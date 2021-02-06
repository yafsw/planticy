import React, { memo, StrictMode } from 'react';
import Home from '../page/Home';
import { AppProvider } from '../context';

const App = () => {
    return (
        <StrictMode>
            <AppProvider>
                <Home />
            </AppProvider>
        </StrictMode>
    );
};

export default memo(App);