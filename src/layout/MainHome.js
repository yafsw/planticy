import React, { memo } from 'react';
import Styled from 'styled-components;'

const MainHome = () => {
    return (
        <MainHomeStyle>

        </MainHomeStyle>
    );
};

const MainHomeStyle = Styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: cennter;
    width: 100%;
    paddng: 1.2rem;
    color: white;
`;

export default memo(MainHome);