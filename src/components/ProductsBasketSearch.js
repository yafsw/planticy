import React, { memo, useEffect, useState } from 'react';
import Styled from 'styled-components';
import ProductBasket from './ProductBasket';
import { useApp } from '../context';

const ProductsBasketSearch = () => {
    const [productsState, setProductsState] = useState([]);
    const { state } = useApp();

    useEffect(() => {
        const filter = state.basket.filter(item => item.name.toLowerCase().includes(state.search));
        setProductsState(filter);
    }, [state.search, state.basket]);

    return (
        <ProductsBasketSearchStyle>
            {productsState.map((item, index) => (
                <ProductBasket src={item.url} name={item.name} price={item.price} key={index} />
            ))}
        </ProductsBasketSearchStyle>
    );
};

const ProductsBasketSearchStyle = Styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 128rem;
`;

export default memo(ProductsBasketSearch);