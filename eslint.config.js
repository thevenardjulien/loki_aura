import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        env: {
            browser: true,
            node: true,
        },
        plugins: {
            '@typescript-eslint': tseslint,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            ...eslint.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/no-unescaped-entities': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
