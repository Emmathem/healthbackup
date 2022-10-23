const path = require('path');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/assets/styles/scss')],
    },
    env: {
        APP_BASE_URL: process.env.APP_BASE_URL,
        APP_RESUME_LINK: process.env.APP_RESUME_LINK,
    },
    images: {
        loader: 'cloudinary',
        domains: ['res.cloudinary.com'],
        path: 'https://res.cloudinary.com/emmathem-media-company/',
    },
    async rewrites() {
        return [
            {
                source: '/vendor',
                destination: '/vendor/login',
            },
        ];
    },
};

const plugins = [
    [
        withImages({
            fileExtension: ['jpg', 'jpeg', 'png', 'svg', 'ico'],
            // eslint-disable-next-line no-unused-vars
            webpack(config, options) {
                config.resolve.modules.push(path.resolve('./'));
            },
        }),
    ],
    [
        withPWA({
            pwa: {
                disable: process.env.NODE_ENV === 'development',
                dest: 'public',
            },
        }),
    ],
];

module.exports = withPlugins([...plugins], nextConfig);
