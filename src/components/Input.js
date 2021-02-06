import React, { memo } from 'react';
import Styled from 'styled-components';
import { secondary} from '../config/color';

const Input = props => {
    return (
        <InputStyle
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    );
};

const InputStyle = Styled.input`
    background-color: ${secondary};
    padding: 1rem 1.8rem;
    border: none;
    outline: none;
    border-radius: 4rem;
    width: 100%;
    color: black;
    font-size: 1.6rem;
`;

export default memo(Input);