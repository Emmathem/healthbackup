import React from 'react';
import { IntroContainer } from './Intro.styled';
import ShapeIcon from './ShapeIcon';
import { Mouse, InsertDriveFile } from '@material-ui/icons';
import { Row, Col } from 'antd';
import { Button } from '@material-ui/core';
import SocialMedia from '@/components/Introduction/SocialMedia';
import { IntroSkilled } from '@/utils/Icons';
// import ReadMoreReact from 'read-more-react';

const Intro = () => {
    // const IntroText = `I’m a passionate web application developer with wealth of experience spanned across the
    //         Financial and Digital Printing industry. I have worked on several web projects and
    //         recently delve into Core-banking applications development where have leveraged on my
    //         skills mostly in frontend technology, such as Vuejs (NuxtJs), React (NextJs), and SEO
    //         integration.`;

    return (
        <IntroContainer>
            <ShapeIcon />

            <div className="introcont">
                <Row>
                    <Col xs={24} xl={12} lg={12}>
                        <div className="introname" data-aos="fade-right" data-aos-delay="2s" data-aos-duration="3s">
                            <h2>I'm Temitope Falua</h2>
                            <h3 className="animated wow zoomIn" data-wow-delay="4s" data-wow-duration="3s">
                                Senior Frontend Developer
                            </h3>
                            <p>
                                {/* <ReadMoreReact
                                    text={IntroText}
                                    min={0}
                                    ideal={200}
                                    max={200}
                                    readMoreText="read more"
                                /> */}
                                I’m a passionate web application developer with wealth of experience spanned across the
                                Financial and Digital Printing industry. I have worked on several web projects and
                                recently delve into Core-banking applications development where have leveraged on my
                                skills mostly in frontend technology, such as Vuejs (NuxtJs), React (NextJs), and SEO
                                integration.
                                {/* My personality combines technical training with corporate experience. I
                                count with superior intelligence and also learning skills. I am able to work under
                                minimal supervision in challenging, Fast paced & competitive environments. */}
                            </p>
                            <SocialMedia />
                            <div className="introname__view">
                                <Button
                                    startIcon={<InsertDriveFile />}
                                    variant="contained"
                                    href={process.env.APP_RESUME_LINK}
                                    color="primary"
                                >
                                    See my Resume
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} xl={12} lg={12} data-aos="fade-left" data-aos-delay="2s" data-aos-duration="3s">
                        {/* <img src="/images/fulltime.png" alt="image" /> */}
                        <div className="intro-image">
                            <IntroSkilled />
                        </div>
                    </Col>
                </Row>
            </div>
            {/* <SkillIcon /> */}

            <div className="mouse">
                <Mouse />
            </div>
        </IntroContainer>
    );
};

export default Intro;
