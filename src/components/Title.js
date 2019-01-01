import React, { memo } from 'react';
import Styled from 'styled-components';
import { primary, secondary, tertiary } from "../config/color";

const Title = props => {
    return (
        <TitleStyle>
            <h2>{props.title}</h2>
            <span>{props.and}</span>
        </TitleStyle>
    );
};

const TitleStyle = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${secondary};
    padding: 1.2rem 1.2rem 1.2rem 3rem;
    border-radius: 4rem;
    width: 100%;
    max-width: 128rem;

    h2 {
        font-size: 2.8rem;
        font-weight: bold;
        color: black;
        transition: .3s ease-in-out;

        &:hover {
            color: ${primary};
        }
    }

    span {
        background-color: ${primary};
        color: white;
        font-size: 1.6rem;
        padding: 1.2rem 2.4rem;
        font-weight: bold;
        border-radius: 4rem;
        transition: .3s ease-in-out;

        &:hover {
            background-color: ${tertiary};
        }
    }
`;

export default memo(Title);