import React from 'react';
import { EduTimeline } from '@/components/Education/Education.styled';

const EducationCard = ({ schoolName, location, country, certificate, year, course }) => {
    return (
        <EduTimeline>
            <div className="timeline">
                <h3>{schoolName}</h3>
                <h4>
                    {location} {country}
                </h4>
                <p>{course}</p>
                <h4>{certificate}</h4>
                <p>{year}</p>
            </div>
        </EduTimeline>
    );
};

export default EducationCard;
