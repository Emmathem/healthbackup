import React from 'react';
import Link from 'next/link';
import { ExperienceContainer } from '@/components/Experience/Experience.styled';
import { Build, Visibility } from '@material-ui/icons';
import { Col, Row } from 'antd';
import ExperienceCard from '@/components/Experience/ExperienceCard';
import { ShortProjects } from '@/utils/data';
import { Button } from '@material-ui/core';

const Experience = () => {
    const projectData = ShortProjects || [];

    // const LimitProject = () => {
    //     if (projectData !== undefined && projectData.length === 0) {
    //         return;
    //     }
    //     console.log('pro', projectData.slice(1, 3));
    //     return projectData.slice(1, 3);
    // };

    return (
        <ExperienceContainer>
            <div className="header">
                <div className="header__icon">
                    <Build />
                </div>
                <h3>Selected Projects</h3>
            </div>
            <div className="experience">
                <div className="experience__tabs"></div>
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
            <div className="experience__more">
                <Link href="/project">
                    <a>
                        <Button startIcon={<Visibility />} variant="contained" color="primary">
                            View More
                        </Button>
                    </a>
                </Link>
            </div>
        </ExperienceContainer>
    );
};

export default Experience;
