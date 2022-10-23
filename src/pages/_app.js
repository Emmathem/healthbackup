import React, { useEffect } from 'react';
import '@/assets/styles/scss/main.scss';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';
import * as ga from '@/lib/ga';

const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
        const useAos = () => {
            AOS.init({ duration: 600 });
        };
        useAos();
    }, []);

    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url);
        };
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange);

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
