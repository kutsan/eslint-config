import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import type { Config } from 'eslint/config'

import { jsGlob, jsxGlob, tsGlob, tsxGlob } from '../utils/files-globs.ts'

export const reactConfig: Config[] = [
  {
    files: [jsGlob, jsxGlob, tsGlob, tsxGlob],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: [jsGlob, jsxGlob, tsGlob, tsxGlob],
    ...reactPlugin.configs.flat['recommended'],
    ...reactPlugin.configs.flat['jsx-runtime'],
  },
  {
    files: [jsGlob, jsxGlob, tsGlob, tsxGlob],
    ...reactHooksPlugin.configs.flat.recommended,
  },
  {
    files: [jsxGlob, tsxGlob],
    ...reactRefreshPlugin.configs.recommended,
  },
]
