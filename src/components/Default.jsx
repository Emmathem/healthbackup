import React, { useEffect } from 'react';
// import Header from '@/components/Header/Header';
import Intro from '@/components/Introduction/Intro';
import Skills from '@/components/Skills/Skills';
import Experience from '@/components/Experience/Experience';
import Education from '@/components/Education/Education';
import Footer from '@/components/Footer/Footer';
// import { WOW } from 'wow.js/dist/wow.js';
import Head from 'next/head';

function DefaultPage() {
    useEffect(function mount() {
        function onScroll() {
            console.log('scroll!');
        }

        window.addEventListener('scroll', onScroll);

        return function unMount() {
            window.removeEventListener('scroll', onScroll);
        };
    });

    return (
        <div>
            <Head>
                <title>Falua Temitope Portfolio</title>
            </Head>
            {/* <Header /> */}
            <Intro />
            <Skills />
            <Experience />
            <Education />
            <Footer />
        </div>
    );
}

export default DefaultPage;
