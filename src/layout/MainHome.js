import React, { memo } from 'react';
import Styled from 'styled-components';
import Banner from '../components/Banner';
import Products from '../components/Products';
import ProductsSearch from '../components/ProductsSearch';
import Title from '../components/Title';
import { useApp } from '../context';

const MainHome = () => {
    const { state } = useApp();

    if (state.search === '') {
        return (
            <MainHomeStyle>
                <Banner />
                <Title title="Sale" and="35%" />
                <Products />
            </MainHomeStyle>
        );
    } else {
        return (
            <MainHomeStyle>
                <ProductsSearch />
            </MainHomeStyle>
        );
    }
};

const MainHomeStyle = Styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 1.2rem;
    min-height: 100vh;
`;

export default memo(MainHome);