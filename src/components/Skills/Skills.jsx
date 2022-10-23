import React, { useRef } from 'react';
import { SkillHolder, SkillSection } from './Skill.styled';
import { Row, Col, Divider } from 'antd';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {
    Html5,
    SassIcon,
    JsIcon,
    NuxtJsIcon,
    VueIcon,
    NextJsIcon,
    ReactIcon,
    MySQLIcon,
    PHPIcon,
    GitIcon,
} from '@/utils/Icons';

const Skills = () => {
    const aboutMe = useRef(null);
    return (
        <SkillSection ref={aboutMe}>
            <div className="heading" data-aos="fade-up" data-aos-delay="2s" data-aos-duration="1s">
                <h2>What I Do</h2>
                <h4>A Developer that would love to explore more stacks</h4>
            </div>
            <div className="skills" data-aos="zoom-in" data-aos-delay="5s" data-aos-duration="3s">
                <Row>
                    <Col xs={24} xl={12} lg={12}>
                        <div className="skills__image">
                            <img src="/images/introimage.png" alt="skill-image" />
                        </div>
                        <div className="skills__desc">
                            <p>
                                <CheckBoxIcon /> Working well independently and within a team setting.
                            </p>
                            <p>
                                <CheckBoxIcon />
                                Effectively translates client requirements into application designs and systems
                                requirements.
                            </p>
                            <p>
                                <CheckBoxIcon />I perform full integration with third party services, e.g. APIs
                            </p>
                        </div>
                    </Col>
                    <Col xs={24} xl={12} lg={12}>
                        <div
                            className="skills__details"
                            data-aos="flip-down"
                            data-aos-delay="3s"
                            data-aos-duration="3s"
                        >
                            <Divider>Languages I Speak</Divider>
                            <Row gutter={48} justify="space-between">
                                <Col lg={8}>
                                    <SkillHolder>
                                        <Html5 />
                                    </SkillHolder>
                                </Col>
                                <Col lg={8}>
                                    <SkillHolder>
                                        <SassIcon />
                                    </SkillHolder>
                                </Col>
                                <Col lg={8}>
                                    <SkillHolder>
                                        <JsIcon />
                                    </SkillHolder>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{ span: 6, offset: 5 }} lg={{ span: 6, offset: 5 }}>
                                    <SkillHolder>
                                        <ReactIcon />
                                    </SkillHolder>
                                </Col>
                                <Col xs={{ span: 7, offset: 3 }} lg={{ span: 7, offset: 3 }}>
                                    <SkillHolder>
                                        <NextJsIcon />
                                    </SkillHolder>
                                </Col>
                            </Row>
                            <Row gutter={48} justify="space-between">
                                <Col lg={8}>
                                    <SkillHolder>
                                        <NuxtJsIcon />
                                    </SkillHolder>
                                </Col>
                                <Col lg={8}>
                                    <SkillHolder>
                                        <GitIcon />
                                    </SkillHolder>
                                </Col>
                                <Col lg={8}>
                                    <SkillHolder>
                                        <VueIcon />
                                    </SkillHolder>
                                </Col>
                            </Row>

                            <Divider>Others</Divider>
                            <Row gutter={48} justify="space-between">
                                <Col xs={8} lg={8}>
                                    <SkillHolder>
                                        <PHPIcon />
                                    </SkillHolder>
                                </Col>
                                <Col xs={8} lg={8}>
                                    <SkillHolder>
                                        <MySQLIcon />
                                    </SkillHolder>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </SkillSection>
    );
};

export default Skills;
