import React, { memo } from 'react';
import Styled from 'styled-components';
import { secondary } from '../config/color';
import Button from './Button';
import { useApp } from "../context";

const Product = props => {
    const { action } = useApp();

    return (
        <ProductStyle src={props.src} onClick={() => action.handleAddBasket(props.payload)}>
            <span>${props.price}</span>
            <Button primary >{props.name}</Button>
        </ProductStyle>
    );
};

const ProductStyle = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 18rem;
    width: 100%;
    box-shadow: 0 1.2rem 3rem rgba(0,175,145,.03);
    background-color: ${secondary};
    background-image: url('${props => props.src}');
    background-image: linear-gradient(rgba(0, 121, 101, 0), rgba(0, 121, 101, .2)), url('${props => props.src}');
    background-size: cover;
    background-position: center;
    overflow: hidden;
    padding: 1rem;
    border-radius: 3rem;

    &:hover {
        background-image: linear-gradient(rgba(0, 121, 101, .1), rgba(0, 121, 101, .2)), url('${props => props.src}');
    }

    span {
        font-size: 2.4rem;
        padding: .5rem 1rem;
        background-color: rgba(245,245,245,.8);
        border-radius: 4rem;
        transition: .3s ease-in-out;
        color: black; 

        &:hover {
            background-color: white;
        }
    }
`;

export default memo(Product);