import React, { memo } from 'react';
import Header from '../layout/Header';
import MainHome from '../layout/MainHome';

const Home = () => {
    return (
        <>
            <Header />
            <MainHome />
        </>
    );
};

export default memo(Home);