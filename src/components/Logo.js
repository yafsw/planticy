import React, { memo } from 'react';
import Styled from 'styled-components';
import { primary, tertiary } from '../config/color';
import { Link } from 'react-router-dom';

const Logo = props => {
    return (
        <LogoStyle primary={props.primary} to="/">
            Planticy
        </LogoStyle>
    );
};

const LogoStyle = Styled(Link)`
    font-size: 2.8rem;
    font-weight: bold;
    color: ${props => props.primary ? primary : 'white'};
    cursor: pointer;
    transition: .3s ease-in-out;
    text-decoration: none;

    &:hover {
        color: ${tertiary};
    }
`;

export default memo(Logo);