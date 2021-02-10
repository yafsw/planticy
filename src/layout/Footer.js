import React, { memo } from 'react';
import Styled from 'styled-components';
import Foot from '../components/Foot';
import { primary } from '../config/color';

const Footer = () => {
    return (
        <FooterStyle>
            <Foot />
        </FooterStyle>
    );
};

const FooterStyle = Styled.footer`
    display: flec;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${primary}
`;

export default memo(Footer);