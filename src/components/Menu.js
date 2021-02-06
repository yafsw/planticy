import React, { memo } from 'react';
import Styled from 'styled-components';
import { CgMenu } from 'react-icons/cg';
import { primary, tertiary } from '../config/color';

const Menu = () => {
    return (
        <MenuStyle />
    );
};

const MenuStyle = Styled(CgMenu)`
    color: ${primary};
    font-size: 4rem;
    transition: .3s ease-in-out;

    &:hover {
        color: ${tertiary};
    }
`;

export default memo(Menu);