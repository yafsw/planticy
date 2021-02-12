import React, { memo, useEffect, useState } from 'react';
import Styled from 'styled-components';
import products from '../data/products';
import { useApp } from '../context';
import Product from './Product';

const ProductsSearch = () => {
    const [productsState, setProductsState] = useState([]);
    const { state } = useApp();

    useEffect(() => {
        const filter = products.filter(item => item.name.toLowerCase().includes(state.search));
        setProductsState(filter);
    }, [state.search]);

    return (
        <ProductsSearchStyle>
            {productsState.map(item => (
                <Product src={item.url} name={item.name} price={item.price} key={item.id} />
            ))}
        </ProductsSearchStyle>
    );
};

const ProductsSearchStyle = Styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
    grid-auto-rows: 18rem;
    place-items: center;
    grid-gap: 1.2rem;
    margin-top: 1.2rem;
    width: 100%;
    max-width: 128rem;
`;

export default memo(ProductsSearch);