import styled from 'styled-components';

export const ExperienceContainer = styled.section`
    position: relative;
    height: 100%;
    width: 100%;
    background: linear-gradient(89deg, #0a20bfd1, #3f65f1a8);
    .header {
        padding: 2rem 30px;
        display: flex;
        align-items: center;
        &__icon {
            width: 50px;
            height: 50px;
            border-radius: 50px;
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.22), rgba(255, 255, 255, 0.25));
            box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
            margin: 10px 0;
            svg {
                fill: var(--white-color);
            }
        }
        h3 {
            color: var(--white-color);
            font-size: 2rem;
            text-transform: uppercase;
            margin-bottom: 0;
            padding-left: 10px;
        }
    }
    .experience {
        padding: 2px 0;
        &__tabs {
            padding: 3px 0;
            border-bottom: 1px solid var(--lighter-blue);
        }
        &__details {
            padding: 10px 3rem;
        }
        &__langs {
            padding: 10px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            > div {
                padding: 4px 10px;
                border: 1px solid rgba(0, 0, 0, 0.09);
                background: #f7f7f7;
                border-radius: 3px;
                margin: 0 2px;
            }
        }
        &__more {
            display: flex;
            justify-content: center;
        }
        .MuiCard-root {
            cursor: pointer;
            transition: ease all 0.5s;
            transform: translateY(0);
            &:hover {
                transition: ease all 0.5s;
                transform: translateY(20px);
            }
        }
    }
`;
