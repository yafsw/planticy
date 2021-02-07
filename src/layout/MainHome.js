import React, { memo } from 'react';
import Styled from 'styled-components';
import Banner from '../components/Banner';

const MainHome = () => {
    return (
        <MainHomeStyle>
            <Banner />
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