import React from 'react';
import Image from 'next/image';
import { FooterContainer } from './Footer.styled';
import { Row, Col } from 'antd';
import { Button } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import SocialMedia from '@/components/Introduction/SocialMedia';

const Footer = () => {
    return (
        <FooterContainer>
            <div className="footer">
                <Row>
                    <Col xs={12} xl={16} lg={8} data-aos="fade-up" data-aos-delay="2s" data-aos-duration="1s">
                        <div className="footer__title">
                            <h2>Let's Know Each Other</h2>
                            <p>i’m always inspired by awesome tech, an avid learner and i’m all about excellence</p>
                        </div>
                        <div className="">
                            <Button
                                endIcon={<Send />}
                                variant="contained"
                                color="primary"
                                href="mailto:faluatemitopeo@gmail.com"
                            >
                                Email Me
                            </Button>
                        </div>
                        <SocialMedia />
                    </Col>
                    <Col xs={12} xl={8} lg={8} data-aos="zoom-in-right" data-aos-delay="2s" data-aos-duration="1s">
                        <div className="footer__dp">
                            <Image src="frontend-picture_e8bcqj.jpg" layout="fill" />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="copyright">
                <span>
                    Copyright &copy; {new Date().getFullYear()} <br />
                    Falua Temitope Oyewole
                </span>
            </div>
        </FooterContainer>
    );
};

export default Footer;
