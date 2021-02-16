import React, { memo } from 'react';
import Styled from 'styled-components';
import ProductBasket from './ProductBasket';
import { useApp } from '../context';

const ProductsBasket = () => {
    const { state } = useApp();

    return (
        <ProductsBasketStyle>
            {state.basket.map((item, index) => (
                <ProductBasket category={item.category} src={item.url} name={item.name} price={item.price} key={index} />
            ))}
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