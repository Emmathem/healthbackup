import React from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import AllSelectedProjects from '@/components/Experience/AllSelectedProjects';
import Head from 'next/head';

const PanelSugar = () => {
    return (
        <>
            <Head>
                <title>Panel Sugare | HealthTracka</title>
                <meta
                    name="description"
                    content="This shows all the projects that I have done both personal, training and others"
                />
            </Head>
            <Header />
            <AllSelectedProjects />
            <Footer />
        </>
    );
};

export default PanelSugar;
