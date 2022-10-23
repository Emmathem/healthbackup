import styled from 'styled-components';

export const FooterContainer = styled.footer`
    position: relative;
    background-color: #3f51b5;
    transition: ease all 0.5s;
    .footer {
        padding: 2rem 4rem;
        &__title {
            padding: 0 20px 0 0;
            h2 {
                color: var(--white-color);
                font-weight: bold;
                position: relative;
                transition: ease all 0.5s;
                &:after {
                    content: '';
                    position: absolute;
                    width: 10%;
                    left: 0;
                    bottom: 0;
                    margin: 0;
                    background: var(--lighter-blue);
                    height: 2px;
                }
            }
            p {
                font-size: 1rem;
                color: #ccc;
            }
        }
        &__dp {
            img {
                object-fit: contain;
            }
        }
    }
    .copyright {
        padding: 20px 0;
        border-top: 1px solid #777;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            text-align: center;
            color: var(--white-color);
            font-size: 0.9rem;
        }
    }
    @media (max-width: 768px) {
        .footer {
            padding: 15px;
            &__title {
                padding: 0 20px 0 0;
                h2 {
                    font-size: 1rem;
                    &:after {
                        width: 40%;
                    }
                }
                p {
                    font-size: 0.8rem;
                }
            }
        }
    }
`;
