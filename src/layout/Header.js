import React, { memo } from 'react';
import Styled from 'styled-components';
import Bar from '../components/Bar';
import NavBar from '../components/NavBar';

const Header = () => {
    return (
        <HeaderStyle>
            <NavBar />
            <Bar />
        </HeaderStyle>
    );
};

const HeaderStyle = Styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: white;
    box-shadow: 0 1.2rem 3rem rgba(0,175,145,.05);
`;

export default memo(Header);