import React, { memo } from 'react';
import Styled from 'styled-components';
import { useApp } from '../context';
import Display from './Display';
import Input from './Input';
import Button from './Button';
import Basket from './Basket';

const Bar = () => {
    const { state } = useApp();

    return (
        <BarStyle show={state.bar}>
            <Display margin="1.2rem 0 0 0" width="100%" show>
                <Input placeholder="Search" type="text" />
                <Display margin="0 0 0 .8rem" width="auto" show>
                    <Basket />
                </Display>
            </Display>
            <Display margin="1.2rem 0 0 0" width="100%" show>
                <Button>Sign In</Button>
            </Display>
            <Display margin="1.2rem 0 0 0" width="100%" show>
                <Button primary>Sign Up</Button>
            </Display>
        </BarStyle>
    );
};

const BarStyle = Styled.div`
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export default memo(Bar);