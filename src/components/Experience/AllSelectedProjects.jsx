import React from 'react';
import { ExperienceContainer } from './Experience.styled';
import { Projects } from '@/utils/data';
import { Build } from '@material-ui/icons';
import { Col, Row } from 'antd';
import ExperienceCard from '@/components/Experience/ExperienceCard';

const AllSelectedProjects = () => {
    const projectData = Projects || [];
    return (
        <ExperienceContainer className="white-bg pt-70">
            <div className="header">
                <div className="header__icon">
                    <Build />
                </div>
                <h3 className="deep-blue">Selected Projects</h3>
            </div>
            <div className="experience">
                {/* <div className="experience__tabs"></div> */}
                <div className="experience__details">
                    <Row gutter={24}>
                        {projectData.length > 0 ? (
                            projectData.map((project) => {
                                return (
                                    <Col
                                        xs={24}
                                        xl={8}
                                        lg={6}
                                        key={project.id}
                                        style={{ marginBottom: '4rem' }}
                                        data-aos="slide-right"
                                        data-aos-delay="3s"
                                        data-aos-duration="3s"
                                    >
                                        <ExperienceCard
                                            title={project.title}
                                            subtitle={project.subtitle}
                                            subheader={project.subheader}
                                            image={project.image}
                                            description={project.description}
                                            languages={project.languages}
                                        />
                                    </Col>
                                );
                            })
                        ) : (
                            <div className="nodetails">No Projects Found</div>
                        )}
                    </Row>
                </div>
            </div>
        </ExperienceContainer>
    );
};

export default AllSelectedProjects;
