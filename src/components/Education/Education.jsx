import React from 'react';
import { EducationContainer } from './Education.styled';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Timeline, Row, Col } from 'antd';
import { EducationList } from '@/utils/data';
import EducationCard from './EducationCard';

const Education = () => {
    const eduList = EducationList || [];
    return (
        <EducationContainer>
            <div className="header">
                <div className="header__icon">
                    <MenuBookIcon />
                </div>
                <h3>Education</h3>
            </div>
            <div className="educations animated">
                <Row>
                    <Col xs={24} xl={24} lg={24}>
                        <Timeline mode="alternate">
                            {eduList.length > 0 ? (
                                eduList.map((edu) => {
                                    return (
                                        <Timeline.Item
                                            key={edu.id}
                                            data-aos="zoom-in"
                                            data-aos-delay="3s"
                                            data-aos-duration="3s"
                                        >
                                            <EducationCard
                                                schoolName={edu.schoolName}
                                                location={edu.location}
                                                country={edu.country}
                                                course={edu.courseName}
                                                certificate={edu.certificateEarn}
                                                year={edu.yearRange}
                                            />
                                        </Timeline.Item>
                                    );
                                })
                            ) : (
                                <div className="nodetails blue-color">No Education Details Found</div>
                            )}
                        </Timeline>
                    </Col>
                </Row>
            </div>
        </EducationContainer>
    );
};

export default Education;
