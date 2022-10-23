module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 9,
        sourceType: 'module',
        allowImportExportEverywhere: true,
        ecmaFeatures: {
            jsx: true,
            modules: true,
            // experimentalObjectRestSpread: true,
        },
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        'import/resolver': {
            node: {
                path: ['./src'],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            },
            'babel-module': {},
        },
    },
    extends: ['prettier', 'plugin:prettier/recommended', 'eslint:recommended', 'plugin:react/recommended'],
    plugins: ['prettier', 'react', 'import', 'react-hooks'],
    // add your custom rules here
    rules: {
        'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
        'import/no-unresolved': [2, { commonjs: true, amd: true }],
        'import/named': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/export': 'off',
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'off',
        'react/display-name': 'off',
        'import/no-anonymous-default-export': 'off',
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                exports: 'always-multiline',
                functions: 'never',
                imports: 'always-multiline',
                objects: 'always-multiline',
            },
        ],
        'import/prefer-default-export': 'off',
    },
};
