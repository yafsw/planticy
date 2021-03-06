import React, { memo } from 'react';
import Styled from 'styled-components';
import { secondary } from '../config/color';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import banner from '../data/banner';

const Banner = () => {
    const settings = {
        autoPlay: true,
        disableButtonsControls: true,
        infinite: true,
        autoPlayInterval: 5000,
        disableDotsControls: true,
        autoHeight: true,
        animationType: 'fadeout',
        animationDuration: 1000,
        mouseTracking: true
    };

    return (
        <Container>
            <AliceCarousel {...settings}>
                {banner.map((item, index) => (
                    <BannerStyle key={index} src={item.url}>
                        <p>{item.quote}</p>
                    </BannerStyle>
                ))}
            </AliceCarousel>
        </Container>
    );
};

const Container = Styled.section`
    width: 100%;
    max-width: 128rem;
    border-radius: 3rem;
    box-shadow: 0 1.2rem 3rem rgba(0,175,145,.03);
    margin-bottom: 1.2rem;
    overflow: hidden;
`;

const BannerStyle = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${secondary};
    background-image: url('${props => props.src}');
    background-image: linear-gradient(rgba(0, 121, 101, 0), rgba(0, 121, 101, .2)), url('${props => props.src}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    max-width: 128rem;
    padding: 4rem;

    &:hover {
        background-image: linear-gradient(rgba(0, 121, 101, .1), rgba(0, 121, 101, .2)), url('${props => props.src}');
    }

    p {
        font-size: 2.8rem;
        font-weight: bold;
        color: white;
    }
`;

export default memo(Banner);