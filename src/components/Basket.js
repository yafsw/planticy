import React, { memo } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primary, secondary, tertiary } from '../config/color';
import { FaShoppingBag } from 'react-icons/fa';
import { useApp } from '../context';

const Basket = () => {
    const { state } = useApp();
    const basket = state.basket.length

    return (
        <BasketContainer to="/basket">
            <BasketStyle />
            <span>{basket}</span>
        </BasketContainer>
    );
};

const BasketContainer = Styled(Link)`
    display: flex;
    justify-contet: center;
    align-items: center;
    padding: 1rem;
    background-color: ${secondary};
    border-radius: 4rem;
    position: relative;
    text-decoration: none;

    span {
        font-size: .8rem;
        background-color: ${primary};
        padding: .2rem .5rem;
        color: white;
        border-radius: 2rem;
        position: absolute;
        top: .5rem;
        left: 2.4rem;
    }
`;

const BasketStyle = Styled(FaShoppingBag)`
    font-size: 2.4rem;
    color: grey;
    transition: .3s ease-in-out;

    &:hover {
        color: ${tertiary};
    }
`;

export default memo(Basket);