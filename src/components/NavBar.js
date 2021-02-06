import React, { memo } from 'react';
import Styled from 'styled-components';
import Logo from './Logo';
import Display from './Display';
import Input from './Input';
import Button from './Button';

const NavBar = () => {
    return (
        <NavBarStyle>
            <Logo primary />
            <Display width="100%" margin="0 1.2rem" >
                <Input type="text" placeholder="Search" />
            </Display>
            <Display width="16rem" margin="0 .6rem 0 0">
                <Button>Sign In</Button>
            </Display>
            <Display width="16rem">
                <Button primary>Sign Up</Button>
            </Display>
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