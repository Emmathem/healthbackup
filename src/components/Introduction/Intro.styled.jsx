import styled from 'styled-components';

export const IntroContainer = styled.section`
    background: linear-gradient(-247deg, var(--background-blue), var(--lighter-blue));
    height: 100vh;
    width: 100%;
    position: relative;
    transition: ease all 0.5s;
    .introcont {
        /* display: flex; */
        /* align-items: center; */
        padding: 8rem 0 4rem;
        img {
            width: 100%;
            transition: ease all 0.5s;
            &:hover {
                transition: ease all 0.5s;
                transform: translateY(-4%);
            }
        }
    }
    .introname {
        display: flex;
        /* align-items: center; */
        width: 100%;
        padding-left: 6rem;
        flex-direction: column;
        /* justify-content: center; */
        height: 100%;
        /* text-align: center; */
        h2 {
            font-family: 'Lato', sans-serif;
            font-size: 4rem;
            margin-bottom: 0;
            color: var(--white-color);
            position: relative;
            font-weight: 700;
            /* text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4); */
            &:after {
                content: '';
                position: absolute;
                background: var(--deep-blue);
                height: 2px;
                left: 0;
                right: 0;
                width: 70%;
                margin: auto;
                transition: ease all 0.5s;
                bottom: 0;
            }
        }
        h3 {
            /* font-family: 'Bad Script', cursive; */
            font-family: 'Open Sans', sans-serif;
            font-size: 3.2rem;
            font-weight: 600;
            margin-bottom: 0;
            position: relative;
            color: var(--deep-blue);
        }
        p {
            display: flex;
            justify-content: flex-start;
            font-size: 17px;
            text-align: left;
            padding: 7px 0;
            line-height: 2;
            color: #fff;
            font-weight: normal;
        }
        &__view {
            display: flex;
            justify-content: flex-start;
            text-align: left;
        }
    }
    .mouse {
        display: flex;
        justify-content: center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 1rem;
        transition: ease all 0.5s;
        animation: bounce 4s linear 2s infinite;
        svg {
            font-size: 3rem;
            fill: var(--white-color);
            /* stroke: var(--lighter-blue); */
        }
    }
    .intro-image {
        margin: 0 auto;
        height: 100%;
        width: 75%;
        overflow: hidden;
        outline: none;
        display: flex;
        justify-content: flex-end;
        svg {
            font-size: 2rem;
        }
    }
    @media (max-width: 768px) {
        .introcont {
            padding: 8rem 0 4rem;
            img {
                margin-top: 6%;
            }
            p {
                padding: 5px 0;
            }
        }
        .introname {
            display: flex;
            /* align-items: center; */
            height: 100%;
            padding-left: 2rem;
            h2 {
                font-size: 2.5rem;
            }
            h3 {
                font-size: 2rem;
            }
        }
    }
`;

export const ShapeIconStyled = styled.div`
    position: absolute;
    top: 0;
    /* z-index: -1; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    div {
        height: 120px;
        width: 120px;
        border-radius: 50%;
        position: relative;
        transition: ease all 0.5s;
        &:first-child {
            left: -4%;
            bottom: auto;
            background: hsla(0, 0%, 100%, 0.1);
            animation: pulse 4s linear 2s infinite;
        }
        &:nth-child(2) {
            right: 4%;
            left: 20%;
            top: 10%;
            background: rgba(121, 125, 230, 0.1);
            animation: bounce 4s linear 2s infinite;
        }
        &:nth-child(3) {
            top: 280px;
            right: 5.66666%;
            background: hsla(0, 0%, 100%, 0.3);
            animation: swing 4s linear 2s infinite;
        }
        &:nth-child(4) {
            top: 320px;
            right: 9%;
            background: hsla(0, 0%, 100%, 0.15);
        }
        &:nth-child(5) {
            right: 54%;
            left: 20%;
            top: 10%;
            background: rgba(172, 206, 236, 0.1);
            animation: bounce 3s linear 4s infinite;
        }
        &:nth-child(6) {
            right: 10%;
            left: 24%;
            top: 41%;
            background: rgba(91, 97, 247, 0.1);
            animation: tada 4s linear 2s infinite;
            @media (max-width: 768px) {
                left: -18%;
                top: 2%;
            }
        }
        &:nth-child(7) {
            width: 200px;
            height: 200px;
            top: 12%;
            left: 24%;
            right: auto;
            background: rgb(196 208 236 / 11%);
            animation: shake 4s linear 2s infinite;
        }
    }
`;
