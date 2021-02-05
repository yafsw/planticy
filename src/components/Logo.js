import React, { memo } from 'react';
import Styled from 'styled-components';
import { primary, tertiary } from '../config/color';

const Logo = props => {
    return (
        <LogoStyle primary={props.primary}>
            Planticy
        </LogoStyle>
    );
};

const LogoStyle = Styled.span`
    font-size: 2.8rem;
    font-weight: bold;
    color: ${props => props.primary ? primary : 'white'};
    cursor: pointer;
    transition: .3s ease-in-out;

    &:hover {
        color: ${tertiary};
    }
`;

export default memo(Logo);