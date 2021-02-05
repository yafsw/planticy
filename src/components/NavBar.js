import React, { memo } from 'react';
import Styled from 'styled-components';
import Logo from './Logo';

const NavBar = () => {
    return (
        <NavBarStyle>
            <Logo />
        </NavBarStyle>
    );
};

const NavBarStyle = Styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 128rem;
`;

export default memo(NavBar);