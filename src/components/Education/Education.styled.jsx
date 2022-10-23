import styled from 'styled-components';

export const EducationContainer = styled.section`
    background: var(--white-color);
    position: relative;
    .header {
        padding: 2rem 30px;
        display: flex;
        align-items: center;
        justify-content: center;
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
                fill: var(--deep-color);
            }
        }
        h3 {
            color: var(--deep-color);
            font-size: 2rem;
            text-transform: uppercase;
            margin-bottom: 0;
            padding-left: 10px;
        }
    }
    .educations {
        padding: 10px 8rem;
        transition: ease all 0.5s;
        .ant-timeline-item-content {
            height: auto;
            width: 100%;
            /* background: #f7f7f7; */
            padding: 1rem;
            margin-bottom: 20px;
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.22), rgba(255, 255, 255, 0.25));
            box-shadow: 12px 2px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
        }
    }
    @media (max-width: 768px) {
        .educations {
            padding: 10px 20px;
        }
    }
`;

export const EduTimeline = styled.div`
    .timeline {
        border-radius: 2px;
        text-align: left;
        h3 {
            font-size: 1.2rem;
            color: var(--deeper-blue);
            /* margin-bottom: 0; */
            font-weight: bold;
        }
        p {
            display: flex;
            /* justify-content: flex-end; */
        }
        h4 {
            display: flex;
            /* justify-content: flex-end; */
        }
        @media (max-width: 768px) {
            h3 {
                font-size: 0.9rem;
                margin-bottom: 0;
            }
            h4 {
                margin-bottom: 0;
            }
            p {
                margin-bottom: 0;
            }
        }
    }
`;
