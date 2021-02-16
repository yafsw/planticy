import React, { memo } from 'react';
import Styled from 'styled-components';
import { useApp } from '../context';
import ProductsBasket from '../components/ProductsBasket';
import ProductsBasketSearch from '../components/ProductsBasketSearch';

const MainBasket = () => {
    const { state } = useApp();

    if (state.search === '') {
        return (
            <MainBasketStyle>
                <ProductsBasket />
            </MainBasketStyle>
        );
    } else {
        return (
            <MainBasketStyle>
                <ProductsBasketSearch />
            </MainBasketStyle>
        );
    }
};

const MainBasketStyle = Styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 1.2rem;
    min-height: 100vh;
    color: white;
`;

export default memo(MainBasket);