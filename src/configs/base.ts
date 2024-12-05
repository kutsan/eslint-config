import eslint from '@eslint/js'
import configLove from 'eslint-config-love'
import tseslint from 'typescript-eslint'

import type { ConfigArray } from '../types/config.js'
import { jsGlob, tsGlob, tsxGlob } from '../utils/files-globs.js'
import { typeScriptLanguageOptions } from '../utils/language-options.js'

export const baseConfig: ConfigArray = [
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    files: [tsGlob],
    languageOptions: typeScriptLanguageOptions,
  },
  {
    ...configLove,
    files: [jsGlob, tsGlob, tsxGlob],
    rules: {
      ...configLove.rules,
      complexity: [
        'error',
        {
          variant: 'modified',
          // TODO: Gradually decrease this rule.
          max: 10,
        },
      ],
      // TODO: Gradually enable this rule
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/prefer-destructuring': [
        'error',
        { array: true, object: true },
      ],
      '@typescript-eslint/no-unsafe-type-assertion': 'off',
    },
  },
]
