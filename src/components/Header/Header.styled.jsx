import styled from 'styled-components';

export const HeaderStyle = styled.header`
    display: flex;
    min-height: 60px;
    justify-content: space-between;
    padding: 15px 20px;
    transition: ease all 0.5s;
    align-items: center;
    position: absolute;
    z-index: 1;
    width: 100%;
    /* background: var(--deep-blue); */
    /* background: linear-gradient(89deg, #0a20bfd1, #3f65f1a8); */
`;

export const IconHolder = styled.div`
    position: relative;
    padding: 0 20px;
    transition: ease all 0.45s;
    h3 {
        font-family: 'Lato', sans-serif;
        font-size: 1.62rem;
        font-weight: 700;
        color: var(--white-color);
        position: relative;
    }
    h4 {
        margin-bottom: 0;
        font-family: 'Bad Script', cursive;
        font-size: 1rem;
        letter-spacing: 2px;
        position: absolute;
        top: 33px;
        left: 4rem;
        color: var(--white-color);
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    @media (max-width: 768px) {
        display: none;
    }
    a {
        margin: 10px;
        cursor: pointer;
        font-weight: bold;
        color: var(--white-color);
        position: relative;
        &:after {
            content: '';
            position: absolute;
            background: var(--white-color);
            height: 2px;
            font-size: 1.3rem;
            left: 0;
            right: 0;
            width: 80%;
            margin: auto;
            transition: ease all 0.5s;
            bottom: -3px;
            transform: translateX(-100%);
            opacity: 0;
        }
        &:hover {
            &:after {
                transform: translateX(0%);
                opacity: 1;
                transition: transform ease 0.5s opacity;
            }
        }
    }
`;

export const MobileMenu = styled.div`
    @media only screen and (min-width: 960px) {
        display: none;
    }
    svg {
        font-size: 2rem;
        fill: var(--white-color);
    }
    /* @media (max-width: 1200px) {
        display: flex;
    } */
`;
