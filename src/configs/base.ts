import eslint from '@eslint/js'
import configLove from 'eslint-config-love'
import type { Config } from 'eslint/config'
import tseslint from 'typescript-eslint'

import { jsGlob, jsxGlob, tsGlob, tsxGlob } from '../utils/files-globs.ts'
import { mapTypeScriptEslintConfig } from '../utils/tseslint-config-mapper.ts'

const maxComplexity = 20

export const baseConfig: Config[] = [
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked.map(mapTypeScriptEslintConfig),
  ...tseslint.configs.stylisticTypeChecked.map(mapTypeScriptEslintConfig),
  {
    files: [jsGlob, jsxGlob, tsGlob, tsxGlob],
    languageOptions: { parser: tseslint.parser },
  },
  {
    files: [jsGlob, jsxGlob, tsGlob, tsxGlob],
    ...configLove,
    rules: {
      ...configLove.rules,
      complexity: [
        'error',
        {
          variant: 'modified',
          max: maxComplexity,
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          ignore: [0, 1, -1],
          ignoreArrayIndexes: false,
          ignoreDefaultValues: false,
          ignoreClassFieldInitialValues: false,
          enforceConst: false,
          detectObjects: true,
          ignoreEnums: true,
          ignoreNumericLiteralTypes: false,
          ignoreReadonlyClassProperties: true,
          ignoreTypeIndexes: false,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/prefer-destructuring': [
        'error',
        { array: true, object: true },
      ],
    },
  },
]
