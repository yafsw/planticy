import React, { memo } from 'react';
import Styled from 'styled-components';
import ProductBasket from './ProductBasket';
import Button from './Button';
import { useApp } from '../context';

const ProductsBasket = () => {
    const { state, action } = useApp();
    const calculate = () => {
        state.basket.forEach(item => price += item.price);
    };
    let price = 0;
    calculate();

    return (
        <ProductsBasketStyle>
            {state.basket.map((item, index) => (
                <ProductBasket category={item.category} src={item.url} name={item.name} price={item.price} key={index} />
            ))}
            {state.basket.length === 0
                ? null : (
                <Button primary onClick={action.handleResetBasket}>
                    Checkout ${price}
                </Button>
                ) 
            }
        </ProductsBasketStyle>
    );
};

const ProductsBasketStyle = Styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 128rem;
`;

export default memo(ProductsBasket);