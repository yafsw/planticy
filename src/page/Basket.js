import React, { memo } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import MainBasket from '../layout/MainBasket';

const Basket = () => {
    return (
        <>
            <Header />
            <MainBasket />
            <Footer />
        </>
    );
};

export default memo(Basket);