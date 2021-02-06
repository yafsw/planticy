import React, { memo } from 'react';
import Styled from 'styled-components';

const Display = props => {
    return (
        <DisplayStyle
            show={props.show}
            width={props.width}
            margin={props.margin}
        >   {props.children}
        </DisplayStyle>
    );
};

const DisplayStyle = Styled.div`
    display: ${props => props.show ? 'none' : 'flex'};
    width: ${props => props.width};
    margin: ${props => props.margin};
    justify-content: center;
    align-items: center;

    @media(max-width: 56rem) {
        display: ${props => props.show ? 'flex' : 'none'};
    }
`;

export default memo(Display);