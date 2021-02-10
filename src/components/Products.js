import React, { memo } from 'react';
import Styled from 'styled-components';
import products from '../data/products';
import Product from './Product';

const Products = () => {
    return (
        <ProductsStyle>
            {products.map(item => (
                <Product src={item.src} name={item.name} key={item.id} price={item.price} payload={item} />
            ))}
        </ProductsStyle>
    );
};

const ProductsStyle = Styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
    grid-auto-rows: 18rem;
    place-items: center;
    grid-gap: 1.2rem;
    margin-top: 1.2rem;
    width: 100%;
    max-width: 128rem;
`;

export default memo(Products);