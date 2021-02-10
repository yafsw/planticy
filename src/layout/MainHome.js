import React, { memo } from 'react';
import Styled from 'styled-components';
import Banner from '../components/Banner';
import Products from '../components/Products';

const MainHome = () => {
    return (
        <MainHomeStyle>
            <Banner />
            <Products />
        </MainHomeStyle>
    );
};

const MainHomeStyle = Styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1.2rem;
    color: white;
`;

export default memo(MainHome);