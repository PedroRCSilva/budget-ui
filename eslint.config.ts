import eslintPluginPrettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  { ignores: ['dist', 'coverage', 'node_modules', 'tsconfig.tsbuildinfo'] },

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser, // 👉 parser para TS!
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypeScript,
      react: pluginReact,
      prettier: eslintPluginPrettier,
      unicorn: eslintPluginUnicorn,
      'react-hooks': reactHooks,
      'unused-imports': unusedImports
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'no-console': 'warn',
      'react/button-has-type': 'error',
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto'
        }
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      ...eslintPluginTypeScript.configs.recommended.rules
    }
  }
]
