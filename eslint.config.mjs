import storybook from 'eslint-plugin-storybook';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...storybook.configs['flat/recommended'],
  {
    plugins: {
      react,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // React rules
      'react/prop-types': 'off',
      'react/jsx-key': 'error',
      'react/no-unescaped-entities': 'error',
      'react/no-unused-prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // JSX rules
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/no-static-element-interactions': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',

      'storybook/no-uninstalled-addons': 'error',
      'storybook/no-redundant-story-name': 'error',

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ], // Ignore variables starting with _
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: ['error', 'always'], // Enforce strict equality
      'no-duplicate-imports': 'error', // Prevent duplicate imports
    },
  },
];

export default eslintConfig;
