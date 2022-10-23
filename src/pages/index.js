import React from 'react';
import { NextSeo } from 'next-seo';
import DefaultPage from '@/components/Default';

export default function Home() {
    return (
        <>
            <NextSeo
                title="Temitope F Portfolio"
                description="An experienced & passionate web application developer with a variety of developed web project"
                openGraph={{
                    title: 'Temitope F Portfolio',
                    description:
                        'An experienced & passionate web application developer with a variety of developed web projects',
                    url: 'https://temitope-portfolio.vercel.app/',
                }}
            />
            <DefaultPage />
        </>
    );
}
