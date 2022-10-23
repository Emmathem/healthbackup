import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
// import { ServerStyleSheet } from 'styled-components';
// import Script from 'next/script';

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const sheet = new ServerStyleSheet();
    //     const originalRenderPage = ctx.renderPage;
    //
    //     try {
    //         ctx.renderPage = () =>
    //             originalRenderPage({
    //                 enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
    //             });
    //
    //         const initialProps = await Document.getInitialProps(ctx);
    //         // console.log('props', initialProps);
    //         return {
    //             ...initialProps,
    //             styles: (
    //                 <>
    //                     {initialProps.styles}
    //                     {sheet.getStyleElement()}
    //                 </>
    //             ),
    //         };
    //     } finally {
    //         sheet.seal();
    //     }
    // }

    render() {
        return (
            <>
                <Html lang="en">
                    <Head>
                        <script
                            async
                            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                        />
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                                  page_path: window.location.pathname,
                                });
                              `,
                            }}
                        />
                        <meta name="application-name" content="Falua Temitope Oyewole Portfolio" />
                        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
                        <meta charSet="utf-8" />
                        <meta name="google-site-verification" content="jJQ_Brck8uecHEFz1-H0N-DgKW_QwlB8aJ9nJZdRz6M" />
                        <meta
                            name="description"
                            content="An experienced & passionate web application developer with a variety of developed web projects"
                        />
                        <meta property="og:title" content="Falua Temitope Oyewole Portfolio" key="ogtitle" />
                        <meta
                            property="og:description"
                            content="An experienced & passionate web application developer with a variety of developed web projects"
                            key="ogdesc"
                        />
                        <meta property="og:image" content="/images/portfolio.png" key="ogimage" />
                        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
                        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                        <link rel="manifest" href="/manifest.json" />
                        <link rel="shortcut icon" href="/icons/favicon.ico" />
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
                    </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Html>
            </>
        );
    }
}

export default MyDocument;
