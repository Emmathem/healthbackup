import React /*useRef*/ from 'react';
import Link from 'next/link';
import { /*MenuContainer,*/ MobileMenu, IconHolder, HeaderStyle } from '@/components/Header/Header.styled';
import { Menu } from '@material-ui/icons';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    // const aboutMe = useRef(null);

    // const executeScroll = (e) => {
    //     e.preventDefault();
    //     aboutMe.current !== null && aboutMe.current.scrollIntoView();
    // };

    return (
        <HeaderStyle
            className={router.pathname == '/projects' ? 'main-bg' : ''}
            data-aos="slide-down"
            data-aos-delay="2s"
            data-aos-duration="5s"
        >
            <IconHolder>
                <Link href="/">
                    <a>
                        <h3>Temitope F.</h3>
                        <h4>portfolio</h4>
                    </a>
                </Link>
            </IconHolder>
            {/* <MenuContainer>
                <Link href="/#">
                    <a onClick={executeScroll}>About Me</a>
                </Link>
                <Link href="/">
                    <a>Projects</a>
                </Link>
                <Link href="/">
                    <a>Education</a>
                </Link>
                <Link href="/">
                    <a>Licence</a>
                </Link>
            </MenuContainer> */}
            <MobileMenu>
                <Menu />
            </MobileMenu>
        </HeaderStyle>
    );
};

export default Header;
