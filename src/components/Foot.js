import React, { memo } from 'react';
import Styled from 'styled-components';
import { primary, tertiary } from '../config/color';
import { SiYoutube, SiFacebook, SiInstagram, SiGmail, SiTwitter } from "react-icons/si";
import Logo from './Logo';

const Foot = () => {
    return (
        <FootStyle>
            <Logo />
            <div>
                <span><SiFacebook className="icon" /></span>
                <span><SiInstagram className="icon" /></span>
                <span><SiYoutube className="icon" /></span>
                <span><SiGmail className="icon" /></span>
                <span><SiTwitter className="icon" /></span>
            </div>
        </FootStyle>
    );
};

const FootStyle = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 128rem;
    margin: 4rem 0;

    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .icon {
        font-size: 1.6rem;
        color: ${primary};

        &:hover {
            color: black;
        }
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .8rem;
        background-color: white;
        margin: .6rem;
        border-radius: 4rem;
        transition: .3s ease-in-out;

        &:hover {
            background-color: ${tertiary};
        }
    }
`;

export default memo(Foot);