import React, { memo } from 'react';
import Styled from 'styled-components';
import { CgClose } from "react-icons/cg";
import { primary, tertiary } from '../config/color';

const Close = () => {
    return (
        <CloseStyle />
    );
};

const CloseStyle = Styled(CgClose)`
    color: ${primary};
    font-size: 4rem;
    transition: .3s ease-in-out;

    &:hover {
        color: ${tertiary};
    }
`;

export default memo(Close);