import React, { memo } from 'react';
import Styled from 'styled-components';
import { primary, secondary, tertiary } from '../config/color';
import { useApp } from '../context';
import Close from './Close';

const ProductBasket = props => {
    const { action } = useApp();

    return (
        <ProductBasketStyle>
            <div className="image">
                <Image src={props.src} />
            </div>
            <div className="text">
                <div>
                    <span className="category">{props.category}</span>
                    <p>{props.name}</p>
                </div>
                <span className="price">${props.price}</span>
            </div>
            <span className="close" onClick={() => action.handleRemoveBasket(props.name)}>
                <Close />
            </span>
        </ProductBasketStyle>
    );
};

const ProductBasketStyle = Styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: start;
    height: auto;
    width: 100%;
    border: .2rem solid ${primary};
    border-radius: 3rem;
    overflow: hidden;
    box-shadow: 0 1.2rem 3rem rgba(0,175,145,.03);
    margin: 1.2rem 0 0 0;
    position: relative;
    transition: .3s ease-in-out;

    @media(max-width: 24rem) {
        flex-direction: column;
    }

    &:hover {
        border-color: ${tertiary};
    }

    .image {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 3rem 0 0 3rem;
        height: 14rem;
        min-width: 12rem;
        overflow: hidden;

        @media(max-width: 24rem) {
            width: 100%;
            height: 24rem;
            border-radius: 3rem 3rem 0 0;
        }
    }

    .text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 14rem;
        padding: 1.6rem;
        overflow: hidden;
        width: 100%;

        @media(max-width: 24rem) {
            flex-direction: row;
            align-items: center;
            width: 100%;
            height: auto;
            padding-bottom: 1rem;
        }

        .category {
            font-size: 1.2rem;
            border-bottom: .2rem solid ${primary};
            padding-right: 1.2rem;
            transition: .3s ease-in-out;

            &:hover {
                padding: 0;
            }
        }

        p {
            font-size: 2.4rem;
            font-weight: bold;
            transition: .3s ease-in-out;

            &:hover {
                color: darkgrey;
            }
        }

        .price {
            font-size: 1.6rem;
            font-weight: bold;
            color: white;
            padding: 1.2rem;
            border-radius: 0 4rem 4rem 0;
            background-color: ${primary};
            width: 100%;
            transition: .3s ease-in-out;

            @media(max-width: 24rem) {
                width: auto;
                border-radius: 4rem;
            }

            &:hover {
                background-color: ${tertiary};
            }
        }   
    }

    .close {
        position: absolute;
        top: 1.2rem;
        right: 1.2rem;
        cursor: pointer;
    }
`;

const Image = Styled.span`
        background-color: ${secondary};
        background-image: url('${props => props.src}');
        background-image: linear-gradient(rgba(0, 121, 101, 0), rgba(0, 121, 101, .2)), url('${props => props.src}');
        background-size: cover;
        background-position: center;
        height: 100%;
        width: 100%;
        transition: .3s ease-in-out;

        &:hover {
            background-image: linear-gradient(rgba(0, 121, 101, .1), rgba(0, 121, 101, .2)), url('${props => props.src}');
        }
`;

export default memo(ProductBasket);