import React, { memo } from 'react';
import Styled from 'styled-components';
import { primary, tertiary } from '../config/color';

const Button = props => {
    return (
        <ButtonStyle primary={props.primary}>
            {props.children}
        </ButtonStyle>
    );
};

const ButtonStyle = Styled.button`
    border: none;
    outline: none;
    padding: .8rem; 1.4rem;
    font0size: 1.6rem;
    font-weight: bold;
    width: 100%;
    border-radius: .2rem;
    border: .2rem solid ${primary};
    color: ${props => props.primary ? 'white' : primary};
    background-color: ${props => props.primary ? primary : 'white'};
    cursor: pointer;
    transition: .3s ease-in-out;

    &:hover {
        border-color: ${tertiary};
        color: ${props => props.primary ? 'white' : tertiary};
        background-color: ${props => props.primary ? tertiary : 'white'};
    }
`;

export default memo(Button);