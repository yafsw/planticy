import React, { memo } from 'react';
import Header from '../layout/Header';
import MainHome from '../layout/MainHome';
import Footer from '../layout/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <MainHome />
            <Footer />
        </>
    );
};

export default memo(Home);