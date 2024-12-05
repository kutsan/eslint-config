import type { ESLint } from 'eslint'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'

import type { ConfigArray } from '../types/config.js'
import { tsGlob, tsxGlob } from '../utils/files-globs.js'
import { reactTypeScriptLanguageOptions } from '../utils/language-options.js'

export const reactConfig: ConfigArray = [
  {
    files: [tsxGlob],
    languageOptions: reactTypeScriptLanguageOptions,
  },
  {
    files: [tsGlob, tsxGlob],
    plugins: {
      react: pluginReact as ESLint.Plugin,
      'react-hooks': pluginReactHooks as ESLint.Plugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ...pluginReact.configs.flat!.recommended!.rules,
      ...pluginReactHooks.configs.recommended?.rules,
    },
  },
  {
    files: [tsxGlob],
    rules: {
      'react-refresh/only-export-components': 'error',
    },
  },
]
