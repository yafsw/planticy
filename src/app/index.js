import React, { memo, StrictMode } from 'react';
import Home from '../page/Home';

const App = () => {
    return (
        <StrictMode>
            <Home />
        </StrictMode>
    );
};

export default memo(App);