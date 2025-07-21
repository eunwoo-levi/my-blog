import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    ignores: [
      // Dependencies
      'node_modules/**',
      'pnpm-lock.yaml',
      'package-lock.json',
      'yarn.lock',

      // Build outputs
      '.next/**',
      'dist/**',
      'build/**',
      'out/**',

      // Environment files
      '.env*',

      // Logs
      '*.log',
      'logs/**',

      // Cache
      '.cache/**',
      '.turbo/**',

      // IDE/Editor files
      '.vscode/**',
      '.idea/**',
      '*.swp',
      '*.swo',
      '*~',

      // OS generated files
      '.DS_Store',
      'Thumbs.db',

      // Temporary files
      '*.tmp',
      '*.temp',

      // Minified files
      '*.min.js',
      '*.min.css',

      // Public assets that don't need linting
      'public/**',

      // Content files (MDX)
      'content/**',
      'portfolio/**',
      'interview/**',

      // Config files that might not need strict linting
      'next.config.*',
      'tailwind.config.*',
      'postcss.config.*',
    ],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  {
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
