import React, { memo } from 'react';
import Styled from 'styled-components';
import { useApp } from '../context';
import ProductBasket from './ProductBasket';

const ProductsBasket = () => {
    const { state } = useApp();

    return (
        <ProductsBasketStyle>
            <div>
                {state.basket.map((item, index) => (
                    <ProductBasket category={item.category} src={item.url} name={item.name} price={item.price} key={index} />
                ))}
            </div>
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