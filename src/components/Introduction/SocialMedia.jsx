import React from 'react';
import { Instagram, GitHub, Twitter, LinkedIn, Phone, WhatsApp } from '@material-ui/icons';

const SocialMedia = () => {
    return (
        <div className="social">
            <div className="phone">
                <a href="tel:07068912907" target="_blank" rel="noreferrer">
                    <Phone />
                </a>
            </div>
            <div className="linkedln">
                <a href="https://www.linkedin.com/in/faluatemitopeo/" target="_blank" rel="noreferrer">
                    <LinkedIn />
                </a>
            </div>
            <div className="whatsapp">
                <a href="https://wa.link/qxd9ki" target="_blank" rel="noreferrer">
                    <WhatsApp />
                </a>
            </div>
            <div className="instagram">
                <a href="https://www.instagram.com/faluatemitopeo/" target="_blank" rel="noreferrer">
                    <Instagram />
                </a>
            </div>
            <div className="github">
                <a href="https://github.com/Emmathem" target="_blank" rel="noreferrer">
                    <GitHub />
                </a>
            </div>
            <div className="twitter">
                <a href="https://twitter.com/faluatemitopeo" target="_blank" rel="noreferrer">
                    <Twitter />
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;
