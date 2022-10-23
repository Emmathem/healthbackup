import React from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import AllSelectedProjects from '@/components/Experience/AllSelectedProjects';
import Head from 'next/head';

const project = () => {
    return (
        <>
            <Head>
                <title>My Project | Falua Temitope Portfolio</title>
                <meta
                    name="description"
                    content="This shows all the project that I have done both personal, training and others"
                />
            </Head>
            <Header />
            <AllSelectedProjects />
            <Footer />
        </>
    );
};

export default project;
