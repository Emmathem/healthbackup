import styled from 'styled-components';

export const SkillSection = styled.section`
    position: relative;
    width: 100%;
    padding: 2rem 0 4rem;
    .heading {
        padding: 3rem 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        h2 {
            color: var(--dark-blue);
            font-size: 2.3rem;
            font-weight: 600;
            letter-spacing: 2px;
            /* margin-bottom: 0; */
        }
        h4 {
            font-size: 1.3rem;
            font-weight: 200;
            text-transform: uppercase;
        }
    }
    .skills {
        position: relative;
        &__image {
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                height: 100%;
                object-fit: contain;
            }
        }
        &__details {
            background: #fafbfb;
            padding: 1rem 4rem;
            /* position: absolute; */
            height: 100%;
            display: flex;
            flex-direction: column;
            /* animation: zoomIn 3s ease 0.9s; */
        }
        &__desc {
            padding: 1rem 4rem;
            p {
                font-size: 1.2rem;
                color: var(--deep-blue);
                font-weight: 400;
                display: flex;
                align-items: center;
                svg {
                    fill: var(--lighter-blue);
                    padding-left: 7px;
                    margin-right: 20px;
                }
            }
        }
    }
    @media (max-width: 768px) {
        .heading {
            h4 {
                font-weight: 400;
            }
        }
    }
`;

export const SkillHolder = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50px;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.22), rgba(255, 255, 255, 0.25));
    box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 10px 0;
    /* text-wrap: wrap; */
    /* border: 1px solid #555; */
    svg {
        font-size: 2rem;
    }
`;
// npm install --save-dev @iconify/react @iconify-icons/typcn
